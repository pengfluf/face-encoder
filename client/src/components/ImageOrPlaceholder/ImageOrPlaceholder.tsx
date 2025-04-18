import { JSX, memo } from 'react';

import { SvgIcon } from '@components/SvgIcon';
import { SvgIconId } from '@components/SvgIcon/types';
import { iconSize } from '@constants/styles';

import { IconAndLabel, Image, Label, Placeholder } from './styled';

interface Props {
  name: string;
  src?: string;
}

function ImageOrPlaceholderComponent({ name, src }: Props): JSX.Element {
  if (src) {
    return <Image alt={name} src={src} />;
  }

  return (
    <Placeholder>
      <IconAndLabel>
        <SvgIcon icon={SvgIconId.monkey} size={iconSize.xl} />
        <Label>{name}</Label>
      </IconAndLabel>
    </Placeholder>
  );
}

export const ImageOrPlaceholder = memo(ImageOrPlaceholderComponent);
