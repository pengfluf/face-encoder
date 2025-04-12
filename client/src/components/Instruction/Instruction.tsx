import { JSX, memo } from 'react';

import { maxFilesAmount, maxFileSizeMB, minFilesAmount } from '@constants';
import { imageExtensionsMessage } from '@constants/imageExtensions';

import { Wrapper } from './styled';

function InstructionComponent(): JSX.Element {
  return (
    <Wrapper>
      <p>
        Please select from {minFilesAmount} to {maxFilesAmount} images to
        encode in {imageExtensionsMessage}.
      </p>

      <p>Max. file size is {maxFileSizeMB} MB.</p>
    </Wrapper>
  );
}

export const Instruction = memo(InstructionComponent);
