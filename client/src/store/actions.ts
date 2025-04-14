import {
  ActionStartUploading,
  ActionType,
  ActionUpdateEncodedImages,
  ActionUpdateFileCache,
  ActionUpdateFileSelection,
  ActionUpdateIsUploading,
  ActionUpdateServerErrorMessage,
  State,
} from './types';

export function startUploading(): ActionStartUploading {
  return { type: ActionType.START_UPLOADING };
}

export function updateFilesSelection(
  value: State['fileSelection'],
): ActionUpdateFileSelection {
  return { type: ActionType.UPDATE_FILE_SELECTION, value };
}

export function updateFileCache(): ActionUpdateFileCache {
  return { type: ActionType.UPDATE_FILE_CACHE };
}

export function updateIsUploading(
  value: State['isUploading'],
): ActionUpdateIsUploading {
  return { type: ActionType.UPDATE_IS_UPLOADING, value };
}

export function updateEncodedImages(
  value: State['encodedImages'],
): ActionUpdateEncodedImages {
  return { type: ActionType.UPDATE_ENCODED_IMAGES, value };
}

export function updateErrorMessage(
  value: State['errorMessage'],
): ActionUpdateServerErrorMessage {
  return { type: ActionType.UPDATE_ERROR_MESSAGE, value };
}
