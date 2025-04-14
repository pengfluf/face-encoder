import { emptyFilesSelection } from '@constants';

import { Action, ActionType, State } from './types';
import { createFileCache } from './utils';

export const initialState: State = {
  fileSelection: emptyFilesSelection,
  fileCache: {},

  isUploading: false,

  encodedImages: [],
  errorMessage: '',
};

export function reducer(draft: State, action: Action): void {
  switch (action.type) {
    case ActionType.START_UPLOADING:
      draft.isUploading = true;
      draft.encodedImages = [];
      draft.errorMessage = '';
      draft.fileCache = createFileCache(draft.fileSelection.files);
      break;

    case ActionType.UPDATE_FILE_SELECTION:
      draft.fileSelection = action.value;
      break;

    case ActionType.UPDATE_FILE_CACHE:
      draft.fileCache = createFileCache(draft.fileSelection.files);
      break;

    case ActionType.UPDATE_IS_UPLOADING:
      draft.isUploading = action.value;
      break;

    case ActionType.UPDATE_ENCODED_IMAGES:
      draft.encodedImages = action.value;
      break;

    case ActionType.UPDATE_ERROR_MESSAGE:
      draft.errorMessage = action.value;
      break;

    default:
      break;
  }
}
