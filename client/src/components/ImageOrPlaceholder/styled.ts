import styled from 'styled-components';

import { colors } from '@constants/colors';
import { borderRadius } from '@constants/styles';

export const Image = styled.img`
  max-width: 100%;

  border-radius: ${borderRadius};
`;

export const Placeholder = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const IconAndLabel = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Label = styled.span`
  position: absolute;
  top: calc(100% - 20px);

  padding: 2px 4px;

  border: 1px solid ${colors.black20};
  border-radius: ${borderRadius};

  background-color: white;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
`;
