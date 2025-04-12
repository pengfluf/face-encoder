import { ChangeEventHandler, useCallback } from 'react';

import { maxFilesAmount, maxFileSizeBytes } from '@constants';
import { reasonErrorMessageMap } from '@constants/errorMessages';
import { imageExtensions } from '@constants/imageExtensions';
import * as actions from '@store/actions';
import { AppDispatch } from '@store/types';
import {
  Entries,
  FileInfo,
  FileInvalidReason,
  FilesSelection,
} from '@types';
import { getFileExtension, getFormattedFileSize } from '@utils';
interface Payload {
  dispatch: AppDispatch;
}

export function useOnFilesSelection({
  dispatch,
}: Payload): ChangeEventHandler<HTMLInputElement> {
  return useCallback(
    (event) => {
      console.log(event.target.files);

      const { files } = event.target;

      console.log(files);

      if (!files || !files.length) return;

      if (files.length > maxFilesAmount) {
        dispatch(
          actions.updateErrorMessage(
            `Selected ${files.length} files, the maximum is ${maxFilesAmount}.`,
          ),
        );

        return;
      }

      const fileInfos: FilesSelection['files'] = [];
      const validationErrorsMap = (
        Object.keys(FileInvalidReason) as Array<FileInvalidReason>
      ).reduce(
        (acc, key) => ({ ...acc, [key]: [] }),
        {} as Record<FileInvalidReason, FileInfo[]>,
      );

      for (const file of files) {
        console.log(file);

        const fileInfo: FileInfo = {
          name: file.name,
          sizeFormatted: getFormattedFileSize(file.size),
        };

        fileInfos.push(fileInfo);

        if (file.size > maxFileSizeBytes) {
          validationErrorsMap.tooLarge.push(fileInfo);
        }

        const fileExtension = getFileExtension(file.name);

        if (!imageExtensions.has(fileExtension)) {
          validationErrorsMap.incorrectFormat.push(fileInfo);
        }
      }

      const validationErrors = (
        Object.entries(validationErrorsMap) as Entries<
          typeof validationErrorsMap
        >
      ).reduce((acc, [reason, fileInfos]) => {
        if (fileInfos.length) {
          acc.push({
            reason,
            reasonMessage: reasonErrorMessageMap[reason],
            files: fileInfos,
          });
        }

        return acc;
      }, [] as FilesSelection['validationErrors']);

      dispatch(
        actions.updateFilesSelection({
          files: fileInfos,
          validationErrors,
          isReadyToUpload: validationErrors.length === 0,
        }),
      );
    },
    [dispatch],
  );
}
