package main

type MessageResponse struct {
	message string
}

type Encodings [][]float64

type EncodedFile struct {
	name      string
	sizeMB    float64
	encodings Encodings
}

type GetFaceEncodingsResponse struct {
	encodings []EncodedFile
}
