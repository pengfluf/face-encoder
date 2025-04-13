import { JSX } from 'react';

import { FileErrorReason, FileSelectionErrorInfo } from '@customTypes';

interface Props {
  reason: FileSelectionErrorInfo['reason'];
  reasonMessage: FileSelectionErrorInfo['reasonMessage'];
  files: FileSelectionErrorInfo['files'];
}

export function FileSelectionError({
  reason,
  reasonMessage,
  files,
}: Props): JSX.Element | null {
  const isWithSize = reason === FileErrorReason.tooLarge;

  return (
    <div key={reason}>
      <p>{reasonMessage}:</p>
      <ul>
        {files.map(({ name, sizeFormatted }) => {
          return (
            <li key={name}>
              {name}
              {isWithSize && ` (${sizeFormatted})`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
