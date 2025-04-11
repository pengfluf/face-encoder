package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func RespondWithEncodings(ctx *gin.Context, encodings []EncodedFile) {
	ctx.IndentedJSON(http.StatusOK, GetFaceEncodingsResponse{encodings})
}

// Errors

func RespondWithMessage(ctx *gin.Context, status int, message string) {
	log.Print(message)
	ctx.IndentedJSON(status, MessageResponse{message})
}

func RespondWithBadRequest(ctx *gin.Context, message string) {
	RespondWithMessage(ctx, http.StatusBadRequest, message)
}

func RespondWithUnprocessableEntity(ctx *gin.Context, message string) {
	RespondWithMessage(ctx, http.StatusUnprocessableEntity, message)
}

func RespondWithBadGateway(ctx *gin.Context, message string) {
	RespondWithMessage(ctx, http.StatusBadGateway, message)
}

func RespondWithInternalServerError(ctx *gin.Context, message string) {
	RespondWithMessage(ctx, http.StatusInternalServerError, message)
}
