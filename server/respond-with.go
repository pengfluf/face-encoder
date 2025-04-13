package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func RespondWithEncodings(ctx *gin.Context, encodings []EncodedFile) {
	ctx.JSON(http.StatusOK, encodings)
}

// Errors

func RespondWithMessage(ctx *gin.Context, status int, message string) {
	log.Print(message)
	ctx.JSON(status, MessageResponse{message})
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
