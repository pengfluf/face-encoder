import styled from 'styled-components';

import { breakpoints } from '@constants/breakpoints';
import { borderRadius, gap } from '@constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${gap.md};

  @media (min-width: ${breakpoints.sm}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const Image = styled.img`
  max-width: 100%;

  border-radius: ${borderRadius};
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${gap.md};
`;
