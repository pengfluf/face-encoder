import { JSX } from 'react';

import { FileSelectionError } from '@components';
import { ErrorMessage, Gapper } from '@components/styled';
import { FileSelectionInfo } from '@customTypes';

interface Props {
  items: FileSelectionInfo['errors'];
}

export function FileSelectionErrors({ items }: Props): JSX.Element | null {
  if (!items.length) return null;

  return (
    <Gapper $direction="column">
      <ErrorMessage>
        Files cannot be uploaded because of the following errors.
      </ErrorMessage>

      <div>
        {items.map(({ reason, reasonMessage, files }) => {
          return (
            <FileSelectionError
              key={reason}
              reason={reason}
              reasonMessage={reasonMessage}
              files={files}
            />
          );
        })}
      </div>
    </Gapper>
  );
}
