import { Dispatch } from 'react';

import { FilesSelection, ImageEncoding } from '@types';

export interface State {
  filesSelection: FilesSelection;
  isUploading: boolean;

  imageEncodings: ImageEncoding[];
  errorMessage: string;
}

export enum ActionType {
  RESET_STATE = 'RESET_STATE',

  UPDATE_FILES_SELECTION = 'UPDATE_FILES_SELECTION',
  UPDATE_IS_UPLOADING = 'UPDATE_IS_UPLOADING',

  UPDATE_IMAGE_ENCODINGS = 'UPDATE_IMAGE_ENCODINGS',
  UPDATE_ERROR_MESSAGE = 'UPDATE_ERROR_MESSGE',
}

export interface ActionResetState {
  type: ActionType.RESET_STATE;
}

export interface ActionUpdateFilesSelection {
  type: ActionType.UPDATE_FILES_SELECTION;
  value: State['filesSelection'];
}

export interface ActionUpdateIsUploading {
  type: ActionType.UPDATE_IS_UPLOADING;
  value: State['isUploading'];
}

export interface ActionUpdateImageEncodings {
  type: ActionType.UPDATE_IMAGE_ENCODINGS;
  value: State['imageEncodings'];
}

export interface ActionUpdateServerErrorMessage {
  type: ActionType.UPDATE_ERROR_MESSAGE;
  value: State['errorMessage'];
}

export type Action =
  | ActionResetState
  | ActionUpdateFilesSelection
  | ActionUpdateIsUploading
  | ActionUpdateImageEncodings
  | ActionUpdateServerErrorMessage;

export type AppDispatch = Dispatch<Action>;
