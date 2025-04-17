import { ChangeEventHandler, useCallback } from 'react';

import { emptyFileSelection, maxFilesAmount } from '@constants';
import { updateFileSelection } from '@store/actions';
import { AppDispatch } from '@store/types';

import { getSelectionStatus } from './getSelectionStatus';
import { getValidationInfo } from './getValidationInfo';

interface Payload {
  dispatch: AppDispatch;
}

export function useOnFilesSelection({
  dispatch,
}: Payload): ChangeEventHandler<HTMLInputElement> {
  return useCallback(
    (event) => {
      const { files } = event.target;

      if (!files || !files.length) {
        dispatch(updateFileSelection(emptyFileSelection));

        return;
      }

      const selectionStatus = getSelectionStatus({
        filesAmount: files.length,
      });

      if (files.length > maxFilesAmount) {
        dispatch(
          updateFileSelection({
            ...emptyFileSelection,
            status: selectionStatus,
          }),
        );

        return;
      }

      const { selectedFiles, errors } = getValidationInfo({
        files,
      });

      dispatch(
        updateFileSelection({
          status: selectionStatus,
          files: selectedFiles,
          errors,
          isReadyToUpload: errors.length === 0,
        }),
      );
    },
    [dispatch],
  );
}
