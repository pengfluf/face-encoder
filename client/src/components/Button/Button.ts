import styled from 'styled-components';

import { colors } from '@constants/colors';
import { borderRadius } from '@constants/styles';

export const Button = styled.button`
  display: inline-flex;

  padding: 12px 16px;

  border: 2px solid ${colors.black20};
  border-radius: ${borderRadius};

  background-color: transparent;

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
