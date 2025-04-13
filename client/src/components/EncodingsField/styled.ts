import styled from 'styled-components';

import { CopyButton as SharedCopyButton } from '@components/CopyButton';
import { borderRadius } from '@constants/styles';

export const Wrapper = styled.div`
  position: relative;
`;

export const CopyButton = styled(SharedCopyButton)`
  position: absolute;
  top: -8px;
  left: -8px;
`;

export const Pre = styled.pre`
  max-height: 300px;

  padding: 16px;
  margin: 0;

  white-space: normal;
  overflow-y: scroll;

  border-radius: ${borderRadius};

  outline: 1px solid black;
`;
