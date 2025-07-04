package main

import (
	"crypto/md5"
	"encoding/hex"
	"log"
	"math"
	"path/filepath"
)

func GetIsImage(fileName string) bool {
	extension := filepath.Ext(fileName)

	log.Print(extension)

	return ImageFormats.Has(extension)
}

func RoundFloat(value float64, precision uint) float64 {
	ratio := math.Pow(10, float64(precision))

	return math.Round(value*ratio) / ratio
}

func BytesToMBs(value int64) float64 {
	return RoundFloat(float64(value)/1024/1024, 1)
}

func GetMD5Hash(data []byte) string {
	hasher := md5.New()
	hasher.Write(data)

	return hex.EncodeToString(hasher.Sum(nil))
}
