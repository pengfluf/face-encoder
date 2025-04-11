package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

func getFaceEncodings(ctx *gin.Context) {
	form, err := ctx.MultipartForm()

	if err != nil {
		RespondWithBadRequest(ctx, fmt.Sprintf(
			"Expected valid multipart form. %s", err.Error(),
		))
		return
	}

	fileHeaders := form.File["files"]
	filesAmount := len(fileHeaders)

	if filesAmount == 0 {
		RespondWithBadRequest(ctx, "There should be at least 1 file, found 0.")
		return
	}

	if filesAmount > MaxFilesAmount {
		RespondWithBadRequest(ctx, fmt.Sprintf(
			"Only %s files is allowed, got %s.",
			strconv.Itoa(MaxFilesAmount), strconv.Itoa(filesAmount),
		))
		return
	}

	result := []EncodingInfo{}

	for _, fileHeader := range fileHeaders {
		fileName := filepath.Base((fileHeader.Filename))
		isImage := GetIsImage(fileName)

		if !isImage {
			RespondWithUnprocessableEntity(ctx, fmt.Sprintf(
				"Only %s files are allowed. \"%s\" doesn't meet this criteria.",
				strings.Join(ImageFormats.List(), ", "), fileName,
			))
			return
		}

		fileSize := BytesToMBs(fileHeader.Size)

		log.Print("File size: ", fileSize)

		if fileSize > MaxFileSizeMB {
			RespondWithBadRequest(ctx, fmt.Sprintf(
				"Max file size is %sMB, the size of \"%s\" is %sMB.",
				strconv.Itoa(MaxFileSizeMB), fileName,
				strconv.FormatFloat(fileSize, 'g', -1, 64),
			))
			return
		}

		file, err := fileHeader.Open()

		if err != nil {
			RespondWithUnprocessableEntity(ctx, fmt.Sprintf(
				"Failed to open \"%s\" file.", fileName,
			))
			return
		}

		// log.Print("File is: ", file)

		fileContents, err := io.ReadAll(file)

		if err != nil {
			RespondWithUnprocessableEntity(ctx, fmt.Sprintf(
				"Failed to read \"%s\" file contents.", fileName,
			))
			return
		}

		defer file.Close()

		// bufferedReader := bufio.NewReader(file)
		requestBody := &bytes.Buffer{}
		writer := multipart.NewWriter(requestBody)
		fileField, err := writer.CreateFormFile("file", fileName)

		if err != nil {
			RespondWithBadGateway(ctx, "Failed to create file field.")
			return
		}

		fileField.Write(fileContents)

		writer.Close()

		// log.Print("Request body: ", requestBody)

		encodingsResponse, err := http.Post(
			"http://localhost:8000/v1/selfie",
			writer.FormDataContentType(),
			requestBody,
		)

		// log.Print("Encodings Response: ", encodingsResponse)

		if err != nil {
			RespondWithBadGateway(
				ctx,
				fmt.Sprintf("Failed to fetch face encodings. %s", err.Error()),
			)
			return
		}

		encodings := Encodings{}
		if err := json.NewDecoder(encodingsResponse.Body).Decode(&encodings); err != nil {
			log.Fatalf("Failed to read response body: %v", err)
		}

		defer encodingsResponse.Body.Close()

		// log.Print("Data: ", encodings)

		result = append(result, EncodingInfo{fileName, encodings})
	}

	// log.Print("Result", result)

	RespondWithEncodings(ctx, result)
}

func main() {
	router := gin.Default()
	router.MaxMultipartMemory = MaxFileSizeMB

	router.POST("/v1/face-encodings", getFaceEncodings)

	router.Run("localhost:8001")
}
