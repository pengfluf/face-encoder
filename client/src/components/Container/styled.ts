import styled from 'styled-components';

import { container, screenPadding } from '@constants/styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-inline: ${screenPadding};
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${container.maxWidth};
`;
