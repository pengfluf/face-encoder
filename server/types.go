package main

type MessageResponse struct {
	message string
}

type Encodings [][]float64

type EncodingInfo struct {
	fileName  string
	encodings Encodings
}

type EncodingResponse struct {
	encodings []EncodingInfo
}
