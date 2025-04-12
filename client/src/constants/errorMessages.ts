import { FileInvalidReason } from '@types';

export const reasonErrorMessageMap: Record<FileInvalidReason, string> = {
  [FileInvalidReason.incorrectFormat]: 'Incorrect format',
  [FileInvalidReason.tooLarge]: 'File is too large',
};
