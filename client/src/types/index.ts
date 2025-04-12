export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export interface FileInfo {
  name: string;
  sizeFormatted: string;
}

export enum FileInvalidReason {
  'incorrectFormat' = 'incorrectFormat',
  'tooLarge' = 'tooLarge',
}

interface FileValidationError {
  reason: FileInvalidReason;
  reasonMessage: string;
  files: FileInfo[];
}

export interface FilesSelection {
  files: FileInfo[];
  validationErrors: FileValidationError[];
  isReadyToUpload: boolean;
}

export interface ImageEncoding {
  name: string;
  encodings: number[][];
}

export enum AcceptType {
  image = 'image/*',
}

export enum EncodingType {
  multipartFormData = 'multipart/form-data',
}

export enum ElementId {
  inputFileUpload = 'inputFileUpload',
}

export enum IconId {
  logo = 'logo',
}
