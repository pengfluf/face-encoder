import { FormEventHandler } from 'react';

import { API_ROUTES } from '@constants/api';
import { FileCache } from '@customTypes';
import {
  PostFaceEncodingsResponse,
  PostFaceMessageResponse,
} from '@customTypes/api';
import {
  startUploading,
  updateEncodedImages,
  updateErrorMessage,
  updateIsUploading,
} from '@store/actions';
import { AppDispatch } from '@store/types';
import { getErrorMessage } from '@utils';

function revokeObjectUrls(fileCache: FileCache): Promise<void> {
  return new Promise((resolve) => {
    Object.values(fileCache).forEach(({ src }) => {
      URL.revokeObjectURL(src);
    });

    resolve();
  });
}

interface Payload {
  isReadyToUpload: boolean;
  fileCache: FileCache;
  dispatch: AppDispatch;
}

export function useOnSubmit({
  isReadyToUpload,
  fileCache,
  dispatch,
}: Payload): FormEventHandler<HTMLFormElement> {
  return async (event) => {
    try {
      event.preventDefault();

      if (!isReadyToUpload) return;

      dispatch(startUploading());
      void revokeObjectUrls(fileCache);

      const method = 'POST';
      const response = await fetch(API_ROUTES.postFaceEncodings, {
        method,
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        const parsedResponse =
          (await response.json()) as PostFaceMessageResponse;

        throw new Error(
          parsedResponse.message ??
            `Unhandled ${method} ${API_ROUTES.postFaceEncodings} error of ${response.status} status.`,
        );
      }

      const parsedResponse =
        (await response.json()) as PostFaceEncodingsResponse;

      dispatch(updateEncodedImages(parsedResponse));
    } catch (error) {
      const errorMessage = getErrorMessage(error);

      dispatch(updateErrorMessage(errorMessage));
    } finally {
      dispatch(updateIsUploading(false));
    }
  };
}
