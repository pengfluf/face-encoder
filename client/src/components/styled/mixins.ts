import { css } from 'styled-components';

import { colors } from '@constants/colors';
import {
  borderRadius,
  buttonPadding,
  transitionDuration,
} from '@constants/styles';

export const buttonMixin = css`
  display: inline-flex;

  padding: ${buttonPadding.md};

  border: 2px solid ${colors.black20};
  border-radius: ${borderRadius};

  background-color: ${colors.lightBeige};

  cursor: pointer;

  transition: ${transitionDuration.regular};

  line-height: 1;

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
