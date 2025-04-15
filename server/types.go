package main

type MessageResponse struct {
	Message string `json:"message"`
}

type Encodings [][]float64

type EncodedFile struct {
	Name        string    `json:"name"`
	Encodings   Encodings `json:"encodings"`
	IsFromCache bool      `json:"isFromCache"`
}

type GetFaceEncodingsResponse []EncodedFile
