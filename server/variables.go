package main

const MaxFilesAmount = 5
const MaxFileSizeMB = 5 * 1024
const MaxConcurrency = 5

var ImageFormats = NewSet([]string{".jpg", ".jpeg", ".png"})
