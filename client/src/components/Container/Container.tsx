import { JSX, ReactNode } from 'react';

import { Content, Wrapper } from './styled';

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props): JSX.Element {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
