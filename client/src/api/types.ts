export enum ApiMethod {
  'GET' = 'GET',
  'POST' = 'POST',
}

export interface MessageResponse {
  message?: string;
}

export interface FaceEncoding {
  name: string;
  encodings: number[][];
  isFromCache: boolean;
}

export type CachedFaceEncoding = Omit<FaceEncoding, 'isFromCache'>;

export type PostFaceEncodingsResponse = FaceEncoding[];

export type GetCachedFaceEncodingsResponse = CachedFaceEncoding[];
