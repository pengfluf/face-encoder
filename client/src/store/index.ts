import { Action, ActionType, State } from './types';

export const initialState: State = {
  filesSelection: {
    files: [],
    validationErrors: [],
    isReadyToUpload: false,
  },
  isUploading: false,

  imageEncodings: [],
  errorMessage: '',
};

export function reducer(draft: State, action: Action): State | undefined {
  switch (action.type) {
    case ActionType.RESET_STATE:
      return initialState;

    case ActionType.UPDATE_FILES_SELECTION:
      draft.filesSelection = action.value;
      break;

    case ActionType.UPDATE_IS_UPLOADING:
      draft.isUploading = action.value;
      break;

    case ActionType.UPDATE_IMAGE_ENCODINGS:
      draft.imageEncodings = action.value;
      break;

    case ActionType.UPDATE_ERROR_MESSAGE:
      draft.errorMessage = action.value;
      break;

    default:
      break;
  }
}
