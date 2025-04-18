import { CSSProperties } from 'styled-components';

import { ButtonSize } from '@customTypes';

export const container = {
  maxWidth: '1050px',
};

export const gap = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '36px',
  xxl: '48px',
};

export const iconSize = {
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '48px',
  xl: '64px',
};

export const screenPadding = gap.lg;
export const borderRadius = '4px';

export const transitionDuration = {
  regular: '0.3s',
};

export const buttonPadding: Record<ButtonSize, CSSProperties['padding']> =
  {
    [ButtonSize.xs]: '4px 8px',
    [ButtonSize.sm]: '8px 12px',
    [ButtonSize.md]: '12px 16px',
  };
