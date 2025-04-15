package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.MaxMultipartMemory = MaxFileSizeMB * MaxConcurrency
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},
		AllowMethods: []string{"POST"},
	}))

	router.POST("/v1/face-encodings", GetFaceEncodings)

	router.Run("localhost:8001")
}
