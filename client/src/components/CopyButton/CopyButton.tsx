import { JSX, MouseEventHandler, useCallback, useState } from 'react';

import { Button, SvgIcon } from '@components';
import { SvgIconId } from '@components/SvgIcon/types';
import { iconSize } from '@constants/styles';
import { ButtonSize } from '@customTypes';

interface Props {
  className?: string;
  text: string;
}

const { copy, checkmark, cross } = SvgIconId;

export function CopyButton({ className, text }: Props): JSX.Element {
  const [icon, setIcon] = useState<SvgIconId>(copy);

  const onClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(async () => {
      try {
        await navigator.clipboard.writeText(text);

        setIcon(checkmark);
      } catch (error) {
        setIcon(cross);
      } finally {
        setTimeout(() => {
          setIcon(copy);
        }, 1000);
      }
    }, [text]);

  return (
    <Button className={className} size={ButtonSize.xs} onClick={onClick}>
      <SvgIcon icon={icon} size={iconSize.xs} />
    </Button>
  );
}
