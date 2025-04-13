import { FileErrorReason } from '@customTypes';

export const reasonErrorMessageMap: Record<FileErrorReason, string> = {
  [FileErrorReason.incorrectFormat]: 'Incorrect format',
  [FileErrorReason.tooLarge]: 'File is too large',
  [FileErrorReason.duplicateName]: 'Duplicate names (should be unique)',
};
