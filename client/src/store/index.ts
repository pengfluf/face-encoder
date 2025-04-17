import { emptyFileSelection } from '@constants';

import { Action, ActionType, State } from './types';
import { createFileCache } from './utils';

export const initialState: State = {
  fileSelection: emptyFileSelection,
  cachedFileSelection: {},

  isFetching: false,
  isUploading: false,

  encodings: [],
  cachedEncodings: [],

  errorMessage: '',
};

export function reducer(draft: State, action: Action): void {
  switch (action.type) {
    case ActionType.START_UPLOADING:
      draft.isUploading = true;
      draft.errorMessage = '';
      draft.encodings = [];
      draft.cachedFileSelection = createFileCache(
        draft.fileSelection.files,
      );
      break;

    case ActionType.START_FETCHING_CACHED_ENCODINGS:
      draft.isFetching = true;
      draft.errorMessage = '';
      draft.cachedEncodings = [];
      break;

    case ActionType.UPDATE_IS_UPLOADING:
      draft.isUploading = action.value;
      break;

    case ActionType.UPDATE_IS_FETCHING:
      draft.isFetching = action.value;
      break;

    case ActionType.UPDATE_FILE_SELECTION:
      draft.fileSelection = action.value;
      break;

    case ActionType.UPDATE_ENCODINGS:
      draft.encodings = action.value;
      break;

    case ActionType.UPDATE_CACHED_ENCODINGS:
      draft.cachedEncodings = action.value;
      break;

    case ActionType.UPDATE_ERROR_MESSAGE:
      draft.errorMessage = action.value;
      break;

    default:
      break;
  }
}
