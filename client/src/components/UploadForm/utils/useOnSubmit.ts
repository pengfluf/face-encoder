import { FormEventHandler, useCallback } from 'react';

import { API_ROUTES } from '@constants/api';
import {
  PostFaceEncodingsResponse,
  PostFaceMessageResponse,
} from '@customTypes/api';
import * as actions from '@store/actions';
import { AppDispatch } from '@store/types';
import { getErrorMessage } from '@utils';

interface Payload {
  isReadyToUpload: boolean;
  dispatch: AppDispatch;
}

export function useOnSubmit({
  isReadyToUpload,
  dispatch,
}: Payload): FormEventHandler<HTMLFormElement> {
  return useCallback(
    async (event) => {
      try {
        event.preventDefault();

        if (!isReadyToUpload) return;

        dispatch(actions.updateIsUploading(true));
        dispatch(actions.updateEncodedImages([]));
        dispatch(actions.updateFileCache());

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

        dispatch(actions.updateEncodedImages(parsedResponse));
      } catch (error) {
        const errorMessage = getErrorMessage(error);

        dispatch(actions.updateErrorMessage(errorMessage));
      } finally {
        dispatch(actions.updateIsUploading(false));
      }
    },
    [isReadyToUpload, dispatch],
  );
}
