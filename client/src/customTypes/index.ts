export type ValueOf<T> = T[keyof T];

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export interface SelectedFile {
  name: string;
  sizeFormatted: string;
  file: File;
}

export interface CachedFile {
  name: string;
  src: string;
}

export type FileCache = Record<string, CachedFile>;

export enum FileErrorReason {
  'incorrectFormat' = 'incorrectFormat',
  'tooLarge' = 'tooLarge',
  'duplicateName' = 'duplicateName',
}

export interface FileSelectionErrorInfo {
  reason: FileErrorReason;
  reasonMessage: string;
  files: SelectedFile[];
}

export interface FileSelectionInfo {
  status: string;
  files: SelectedFile[];
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
