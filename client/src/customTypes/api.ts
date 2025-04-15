export interface FaceEncoding {
  name: string;
  encodings: number[][];
  isFromCache: boolean;
}

export type PostFaceEncodingsResponse = FaceEncoding[];

export interface PostFaceMessageResponse {
  message?: string;
}
