import { ChangeEventHandler } from 'react';

import { emptyFilesSelection, maxFilesAmount } from '@constants';
import { FileSelectionInfo } from '@customTypes';
import * as actions from '@store/actions';
import { AppDispatch } from '@store/types';

import { getSelectionStatus } from './getSelectionStatus';
import { getValidationInfo } from './getValidationInfo';

function revokeObjectUrls(
  prevFiles: FileSelectionInfo['files'],
): Promise<void> {
  return new Promise((resolve) => {
    prevFiles.forEach(({ src }) => {
      URL.revokeObjectURL(src);
    });

    resolve();
  });
}

interface Payload {
  prevFiles: FileSelectionInfo['files'];
  dispatch: AppDispatch;
}

export function useOnFilesSelection({
  prevFiles,
  dispatch,
}: Payload): ChangeEventHandler<HTMLInputElement> {
  return (event) => {
    void revokeObjectUrls(prevFiles);

    const { files } = event.target;

    if (!files || !files.length) {
      dispatch(actions.updateFilesSelection(emptyFilesSelection));

      return;
    }

    const selectionStatus = getSelectionStatus({
      filesAmount: files.length,
    });

    if (files.length > maxFilesAmount) {
      dispatch(
        actions.updateFilesSelection({
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
      actions.updateFilesSelection({
        status: selectionStatus,
        files: fileInfos,
        errors,
        isReadyToUpload: errors.length === 0,
      }),
    );
  };
}
