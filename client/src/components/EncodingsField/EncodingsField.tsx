import { JSX, memo } from 'react';

import { CopyButton, Pre, Wrapper } from './styled';

interface Props {
  encodings: string;
}

export function EncodingsFieldComponent({
  encodings,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <CopyButton text={encodings} />
      <Pre>{encodings}</Pre>
    </Wrapper>
  );
}

export const EncodingsField = memo(EncodingsFieldComponent);
