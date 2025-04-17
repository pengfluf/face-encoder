import styled from 'styled-components';

import { buttonMixin } from '@components/styled/mixins';
import { buttonPadding } from '@constants/styles';
import { ButtonSize } from '@customTypes';

interface Props {
  size?: ButtonSize;
}

export const Button = styled.button<Props>`
  ${buttonMixin}

  padding: ${({ size }) => buttonPadding[size ?? ButtonSize.md]};
`;

export const ButtonAsInput = styled(Button).attrs({
  as: 'input',
})``;
