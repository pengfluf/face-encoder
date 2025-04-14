import { ChangeEventHandler, useCallback } from 'react';

import { emptyFilesSelection, maxFilesAmount } from '@constants';
import { updateFilesSelection } from '@store/actions';
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
        dispatch(updateFilesSelection(emptyFilesSelection));

        return;
      }

      const selectionStatus = getSelectionStatus({
        filesAmount: files.length,
      });

      if (files.length > maxFilesAmount) {
        dispatch(
          updateFilesSelection({
            ...emptyFilesSelection,
            status: selectionStatus,
          }),
        );

        return;
      }

      const { fileInfos, errors } = getValidationInfo({
        files,
      });

      dispatch(
        updateFilesSelection({
          status: selectionStatus,
          files: fileInfos,
          errors,
          isReadyToUpload: errors.length === 0,
        }),
      );
    },
    [dispatch],
  );
}
