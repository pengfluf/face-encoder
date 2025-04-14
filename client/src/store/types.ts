import { Dispatch } from 'react';

import {
  EncodedImageInfo,
  FileCache,
  FileSelectionInfo,
} from '@customTypes';

export interface State {
  fileSelection: FileSelectionInfo;
  fileCache: FileCache;

  isUploading: boolean;

  encodedImages: EncodedImageInfo[];
  errorMessage: string;
}

export enum ActionType {
  START_UPLOADING = 'START_UPLOADING',

  UPDATE_FILE_SELECTION = 'UPDATE_FILE_SELECTION',

  UPDATE_IS_UPLOADING = 'UPDATE_IS_UPLOADING',

  UPDATE_ENCODED_IMAGES = 'UPDATE_ENCODED_IMAGES',
  UPDATE_ERROR_MESSAGE = 'UPDATE_ERROR_MESSGE',
}

export interface ActionStartUploading {
  type: ActionType.START_UPLOADING;
}

export interface ActionUpdateFileSelection {
  type: ActionType.UPDATE_FILE_SELECTION;
  value: State['fileSelection'];
}

export interface ActionUpdateIsUploading {
  type: ActionType.UPDATE_IS_UPLOADING;
  value: State['isUploading'];
}

export interface ActionUpdateEncodedImages {
  type: ActionType.UPDATE_ENCODED_IMAGES;
  value: State['encodedImages'];
}

export interface ActionUpdateServerErrorMessage {
  type: ActionType.UPDATE_ERROR_MESSAGE;
  value: State['errorMessage'];
}

export type Action =
  | ActionStartUploading
  | ActionUpdateFileSelection
  | ActionUpdateIsUploading
  | ActionUpdateEncodedImages
  | ActionUpdateServerErrorMessage;

export type AppDispatch = Dispatch<Action>;
