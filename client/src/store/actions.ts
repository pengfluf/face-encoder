import {
  ActionResetState,
  ActionType,
  ActionUpdateFilesSelection,
  ActionUpdateImageEncodings,
  ActionUpdateIsUploading,
  ActionUpdateServerErrorMessage,
  State,
} from './types';

export function resetState(): ActionResetState {
  return { type: ActionType.RESET_STATE };
}

export function updateFilesSelection(
  value: State['filesSelection'],
): ActionUpdateFilesSelection {
  return { type: ActionType.UPDATE_FILES_SELECTION, value };
}

export function updateIsUploading(
  value: State['isUploading'],
): ActionUpdateIsUploading {
  return { type: ActionType.UPDATE_IS_UPLOADING, value };
}

export function updateImageEncodings(
  value: State['imageEncodings'],
): ActionUpdateImageEncodings {
  return { type: ActionType.UPDATE_IMAGE_ENCODINGS, value };
}

export function updateErrorMessage(
  value: State['errorMessage'],
): ActionUpdateServerErrorMessage {
  return { type: ActionType.UPDATE_ERROR_MESSAGE, value };
}
