import { JSX, memo } from 'react';

import { capitalize } from '@utils';

import { Wrapper } from './styled';

interface Props {
  icon: string;
  size?: string;
}

function SvgIconComponent({ icon, size }: Props): JSX.Element {
  return (
    <Wrapper $size={size} aria-label={capitalize(icon)}>
      <use href={`#${icon}`} />
    </Wrapper>
  );
}

export const SvgIcon = memo(SvgIconComponent);
