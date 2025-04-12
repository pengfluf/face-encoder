import styled from 'styled-components';

import { gap } from '@constants/styles';

export const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${gap.md};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap.lg};
`;
