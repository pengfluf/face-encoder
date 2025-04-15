package main

type CachedFile struct {
	Name      string    `json:"name"`
	Encodings Encodings `json:"encodings"`
}

type PseudoDB struct {
	CachedFiles map[string]CachedFile `json:"cachedFiles"`
}

var DB = PseudoDB{
	CachedFiles: make(map[string]CachedFile),
}
