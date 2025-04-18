import styled from 'styled-components';

import { breakpoints } from '@constants/breakpoints';
import { gap } from '@constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${gap.md};

  @media (min-width: ${breakpoints.sm}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${gap.md};
`;
