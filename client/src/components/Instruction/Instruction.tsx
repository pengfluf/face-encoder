import { JSX, memo } from 'react';

import { Gapper } from '@components/styled';
import { maxFilesAmount, maxFileSizeMB, minFilesAmount } from '@constants';
import { imageExtensionsMessage } from '@constants/imageExtensions';

function InstructionComponent(): JSX.Element {
  return (
    <Gapper $direction="column">
      <p>
        Select from {minFilesAmount} to {maxFilesAmount} images to encode
        in {imageExtensionsMessage}.
      </p>

      <p>Max. file size is {maxFileSizeMB} MB.</p>
    </Gapper>
  );
}

export const Instruction = memo(InstructionComponent);
