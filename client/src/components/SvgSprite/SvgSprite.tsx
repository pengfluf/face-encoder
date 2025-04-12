import { JSX } from 'react';

import Logo from '@assets/svg/logo.svg?react';

export function SvgSprite(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <defs>
        <Logo />
      </defs>
    </svg>
  );
}
