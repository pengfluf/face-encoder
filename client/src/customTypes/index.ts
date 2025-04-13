export type ValueOf<T> = T[keyof T];

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export interface FileInfo {
  name: string;
  sizeFormatted: string;
  src: string;
}

export type FileCache = Record<string, FileInfo>;

export enum FileErrorReason {
  'incorrectFormat' = 'incorrectFormat',
  'tooLarge' = 'tooLarge',
  'duplicateName' = 'duplicateName',
}

export interface FileSelectionErrorInfo {
  reason: FileErrorReason;
  reasonMessage: string;
  files: FileInfo[];
}

export interface FileSelectionInfo {
  status: string;
  files: FileInfo[];
  errors: FileSelectionErrorInfo[];
  isReadyToUpload: boolean;
}

export interface EncodedImageInfo {
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
