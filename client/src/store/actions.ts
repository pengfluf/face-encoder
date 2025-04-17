import {
  ActionStartFetchingCachedEncodings,
  ActionStartUploading,
  ActionType,
  ActionUpdateCachedEncodings,
  ActionUpdateEncodings,
  ActionUpdateErrorMessage,
  ActionUpdateFileSelection,
  ActionUpdateIsFetching,
  ActionUpdateIsUploading,
  State,
} from './types';

export function startUploading(): ActionStartUploading {
  return { type: ActionType.START_UPLOADING };
}

export function startFetchingCachedEncodings(): ActionStartFetchingCachedEncodings {
  return { type: ActionType.START_FETCHING_CACHED_ENCODINGS };
}

export function updateIsUploading(
  value: State['isUploading'],
): ActionUpdateIsUploading {
  return { type: ActionType.UPDATE_IS_UPLOADING, value };
}

export function updateIsFetching(
  value: State['isFetching'],
): ActionUpdateIsFetching {
  return { type: ActionType.UPDATE_IS_FETCHING, value };
}

export function updateFileSelection(
  value: State['fileSelection'],
): ActionUpdateFileSelection {
  return { type: ActionType.UPDATE_FILE_SELECTION, value };
}

export function updateEncodings(
  value: State['encodings'],
): ActionUpdateEncodings {
  return { type: ActionType.UPDATE_ENCODINGS, value };
}

export function updateCachedEncodings(
  value: State['cachedEncodings'],
): ActionUpdateCachedEncodings {
  return { type: ActionType.UPDATE_CACHED_ENCODINGS, value };
}

export function updateErrorMessage(
  value: State['errorMessage'],
): ActionUpdateErrorMessage {
  return { type: ActionType.UPDATE_ERROR_MESSAGE, value };
}
