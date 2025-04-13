import styled, { CSSProperties } from 'styled-components';

import { colors } from '@constants/colors';
import { borderRadius } from '@constants/styles';

import { ButtonSize } from './types';

interface Props {
  size?: ButtonSize;
}

const padding: Record<ButtonSize, CSSProperties['padding']> = {
  [ButtonSize.xs]: '4px 8px',
  [ButtonSize.sm]: '8px 12px',
  [ButtonSize.md]: '12px 16px',
};

export const Button = styled.button<Props>`
  display: inline-flex;

  padding: ${({ size }) => padding[size ?? ButtonSize.md]};

  border: 2px solid ${colors.black20};
  border-radius: ${borderRadius};

  background-color: ${colors.lightBeige};

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: ${colors.orangeLighter};
  }

  &:active {
    background-color: ${colors.orangeDarker};
  }

  &:hover,
  &:active {
    border-color: transparent;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonAsInput = styled(Button).attrs({
  as: 'input',
})``;
