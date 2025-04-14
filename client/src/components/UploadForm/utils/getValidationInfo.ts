import { maxFileSizeBytes } from '@constants';
import { reasonErrorMessageMap } from '@constants/errorMessages';
import { imageExtensions } from '@constants/imageExtensions';
import {
  Entries,
  FileErrorReason,
  FileSelectionInfo,
  SelectedFile,
} from '@customTypes';
import { getFileExtension, getFormattedFileSize } from '@utils';

interface Payload {
  files: FileList;
}

interface Result {
  selectedFiles: FileSelectionInfo['files'];
  errors: FileSelectionInfo['errors'];
}

export function getValidationInfo({ files }: Payload): Result {
  const fileNames = new Set<string>();

  const selectedFiles: FileSelectionInfo['files'] = [];

  const errorsMap = (
    Object.keys(FileErrorReason) as Array<FileErrorReason>
  ).reduce(
    (acc, key) => ({ ...acc, [key]: [] }),
    {} as Record<FileErrorReason, SelectedFile[]>,
  );

  for (const file of files) {
    const { name, size } = file;

    const selectedFile: SelectedFile = {
      name,
      sizeFormatted: getFormattedFileSize(size),
      file,
    };

    selectedFiles.push(selectedFile);

    if (size > maxFileSizeBytes) {
      errorsMap.tooLarge.push(selectedFile);
    }

    const fileExtension = getFileExtension(name);

    if (!imageExtensions.has(fileExtension)) {
      errorsMap.incorrectFormat.push(selectedFile);
    }

    if (fileNames.has(name)) {
      errorsMap.duplicateName.push(selectedFile);
    }

    fileNames.add(name);
  }

  const errors = (
    Object.entries(errorsMap) as Entries<typeof errorsMap>
  ).reduce((acc, [reason, selectedFiles]) => {
    if (selectedFiles.length) {
      acc.push({
        reason,
        reasonMessage: reasonErrorMessageMap[reason],
        files: selectedFiles,
      });
    }

    return acc;
  }, [] as FileSelectionInfo['errors']);

  return { selectedFiles, errors };
}
