import { FormEventHandler } from 'react';

import { postFaceEncodings } from '@api';
import { CachedFileSelection } from '@customTypes';
import {
  startUploading,
  updateEncodings,
  updateErrorMessage,
  updateIsUploading,
} from '@store/actions';
import { AppDispatch } from '@store/types';
import { getErrorMessage } from '@utils';

function revokeObjectUrls(
  cachedFileSelection: CachedFileSelection,
): Promise<void> {
  return new Promise((resolve) => {
    Object.values(cachedFileSelection).forEach(({ src }) => {
      URL.revokeObjectURL(src);
    });

    resolve();
  });
}

interface Payload {
  isReadyToUpload: boolean;
  cachedFileSelection: CachedFileSelection;
  dispatch: AppDispatch;
}

export function useOnSubmit({
  isReadyToUpload,
  cachedFileSelection,
  dispatch,
}: Payload): FormEventHandler<HTMLFormElement> {
  return async (event) => {
    try {
      event.preventDefault();

      if (!isReadyToUpload) return;

      dispatch(startUploading());
      void revokeObjectUrls(cachedFileSelection);

      const response = await postFaceEncodings(
        new FormData(event.currentTarget),
      );

      dispatch(updateEncodings(response));
    } catch (error) {
      const errorMessage = getErrorMessage(error);

      dispatch(updateErrorMessage(errorMessage));
    } finally {
      dispatch(updateIsUploading(false));
    }
  };
}
