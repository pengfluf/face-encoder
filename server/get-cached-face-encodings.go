package main

import "github.com/gin-gonic/gin"

func GetCachedFaceEncodings(ctx *gin.Context) {
	encodings := GetFaceEncodingsResponse{}

	for _, cachedFile := range DB.CachedFiles {
		encodings = append(encodings, EncodedFile{
			Name:      cachedFile.Name,
			Encodings: cachedFile.Encodings,
		})
	}

	RespondWithEncodings(ctx, encodings)
}
