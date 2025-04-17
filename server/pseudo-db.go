package main

type CachedSelectionItem struct {
	Name      string    `json:"name"`
	Encodings Encodings `json:"encodings"`
}

type PseudoDB struct {
	CachedFiles map[string]CachedSelectionItem `json:"cachedFiles"`
}

var DB = PseudoDB{
	CachedFiles: make(map[string]CachedSelectionItem),
}
