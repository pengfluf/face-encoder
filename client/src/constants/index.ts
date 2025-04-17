import { FileSelectionInfo } from '@customTypes';

export const filesFieldName = 'files';

export const minFilesAmount = 1;
export const maxFilesAmount = 5;

export const maxFileSizeMB = 5;
export const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;

export const emptyFileSelection: FileSelectionInfo = {
  status: '',
  files: [],
  errors: [],
  isReadyToUpload: false,
};
