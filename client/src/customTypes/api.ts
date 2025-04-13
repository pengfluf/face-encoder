export interface FaceEncoding {
  name: string;
  encodings: number[][];
}

export type PostFaceEncodingsResponse = FaceEncoding[];

export interface PostFaceMessageResponse {
  message?: string;
}
