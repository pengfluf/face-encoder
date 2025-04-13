import { maxFileSizeBytes } from '@constants';
import { reasonErrorMessageMap } from '@constants/errorMessages';
import { imageExtensions } from '@constants/imageExtensions';
import {
  Entries,
  FileErrorReason,
  FileInfo,
  FileSelectionInfo,
} from '@customTypes';
import { getFileExtension, getFormattedFileSize } from '@utils';

interface Payload {
  files: FileList;
}

interface Result {
  fileInfos: FileSelectionInfo['files'];
  errors: FileSelectionInfo['errors'];
}

export function getValidationInfo({ files }: Payload): Result {
  const fileNames = new Set<string>();

  const fileInfos: FileSelectionInfo['files'] = [];

  const errorsMap = (
    Object.keys(FileErrorReason) as Array<FileErrorReason>
  ).reduce(
    (acc, key) => ({ ...acc, [key]: [] }),
    {} as Record<FileErrorReason, FileInfo[]>,
  );

  for (const file of files) {
    const { name, size } = file;

    const fileInfo: FileInfo = {
      name,
      sizeFormatted: getFormattedFileSize(size),
      src: URL.createObjectURL(file),
    };

    fileInfos.push(fileInfo);

    if (size > maxFileSizeBytes) {
      errorsMap.tooLarge.push(fileInfo);
    }

    const fileExtension = getFileExtension(name);

    if (!imageExtensions.has(fileExtension)) {
      errorsMap.incorrectFormat.push(fileInfo);
    }

    if (fileNames.has(name)) {
      errorsMap.duplicateName.push(fileInfo);
    }

    fileNames.add(name);
  }

  const errors = (
    Object.entries(errorsMap) as Entries<typeof errorsMap>
  ).reduce((acc, [reason, fileInfos]) => {
    if (fileInfos.length) {
      acc.push({
        reason,
        reasonMessage: reasonErrorMessageMap[reason],
        files: fileInfos,
      });
    }

    return acc;
  }, [] as FileSelectionInfo['errors']);

  return { fileInfos, errors };
}
