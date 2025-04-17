import { Dispatch } from 'react';

import { CachedFaceEncoding, FaceEncoding } from '@api/types';
import { CachedFileSelection, FileSelectionInfo } from '@customTypes';

export interface State {
  fileSelection: FileSelectionInfo;
  cachedFileSelection: CachedFileSelection;

  isFetching: boolean;
  isUploading: boolean;

  encodings: FaceEncoding[];
  cachedEncodings: CachedFaceEncoding[];

  errorMessage: string;
}

export enum ActionType {
  START_UPLOADING = 'START_UPLOADING',
  START_FETCHING_CACHED_ENCODINGS = 'START_FETCHING_CACHED_ENCODINGS',

  UPDATE_IS_UPLOADING = 'UPDATE_IS_UPLOADING',
  UPDATE_IS_FETCHING = 'UPDATE_IS_FETCHING',

  UPDATE_FILE_SELECTION = 'UPDATE_FILE_SELECTION',

  UPDATE_ENCODINGS = 'UPDATE_ENCODINGS',
  UPDATE_CACHED_ENCODINGS = 'UPDATE_CACHED_ENCODINGS',

  UPDATE_ERROR_MESSAGE = 'UPDATE_ERROR_MESSGE',
}

export interface ActionStartUploading {
  type: ActionType.START_UPLOADING;
}

export interface ActionStartFetchingCachedEncodings {
  type: ActionType.START_FETCHING_CACHED_ENCODINGS;
}

export interface ActionUpdateIsUploading {
  type: ActionType.UPDATE_IS_UPLOADING;
  value: State['isUploading'];
}

export interface ActionUpdateIsFetching {
  type: ActionType.UPDATE_IS_FETCHING;
  value: State['isFetching'];
}

export interface ActionUpdateFileSelection {
  type: ActionType.UPDATE_FILE_SELECTION;
  value: State['fileSelection'];
}

export interface ActionUpdateEncodings {
  type: ActionType.UPDATE_ENCODINGS;
  value: State['encodings'];
}

export interface ActionUpdateCachedEncodings {
  type: ActionType.UPDATE_CACHED_ENCODINGS;
  value: State['cachedEncodings'];
}

export interface ActionUpdateErrorMessage {
  type: ActionType.UPDATE_ERROR_MESSAGE;
  value: State['errorMessage'];
}

export type Action =
  | ActionStartUploading
  | ActionStartFetchingCachedEncodings
  | ActionUpdateIsUploading
  | ActionUpdateIsFetching
  | ActionUpdateFileSelection
  | ActionUpdateEncodings
  | ActionUpdateCachedEncodings
  | ActionUpdateErrorMessage;

export type AppDispatch = Dispatch<Action>;
