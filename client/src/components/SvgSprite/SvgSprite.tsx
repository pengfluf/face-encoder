import { JSX } from 'react';

import Checkmark from '@assets/svg/checkmark.svg?react';
import Copy from '@assets/svg/copy.svg?react';
import Cross from '@assets/svg/cross.svg?react';
import Logo from '@assets/svg/logo.svg?react';
import Monkey from '@assets/svg/monkey.svg?react';
import Spinner from '@assets/svg/spinner.svg?react';

export function SvgSprite(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <defs>
        <Checkmark />
        <Copy />
        <Cross />
        <Logo />
        <Monkey />
        <Spinner />
      </defs>
    </svg>
  );
}
