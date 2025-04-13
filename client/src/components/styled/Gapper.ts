import styled, { CSSProperties } from 'styled-components';

import { gap as gapConstant } from '@constants/styles';
import { ValueOf } from '@customTypes';

interface Props {
  $direction?: CSSProperties['flexDirection'];
  $justifyContent?: CSSProperties['justifyContent'];
  $alignItems?: CSSProperties['alignItems'];
  $gap?: ValueOf<typeof gapConstant>;
}

export const Gapper = styled.div<Props>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};

  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};

  gap: ${({ $gap }) => $gap ?? gapConstant.md};
`;
