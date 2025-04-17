import { NavLink as RouterNavLink } from 'react-router';
import styled from 'styled-components';

import { buttonMixin } from '@components/styled/mixins';
import { colors } from '@constants/colors';
import { borderRadius } from '@constants/styles';

export const border = '1px solid black';

export const Wrapper = styled.nav`
  border: 2px solid ${colors.black20};

  border-top: none;

  border-bottom-right-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};
`;

export const NavLink = styled(RouterNavLink)`
  ${buttonMixin}

  justify-content: center;
  align-items: center;

  min-width: 100px;

  text-decoration: none;
  color: black;

  border: none;
  border-radius: 0;

  &.active {
    font-weight: 600;
    text-decoration: underline;
  }
`;
