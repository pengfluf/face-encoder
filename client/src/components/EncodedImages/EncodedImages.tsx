import { JSX } from 'react';

import { CachedFaceEncoding, FaceEncoding } from '@api/types';
import { EncodedImage } from '@components';
import { Gapper } from '@components/styled';
import { gap } from '@constants/styles';
import { CachedFileSelection } from '@customTypes';

interface Props {
  items: FaceEncoding[] | CachedFaceEncoding[];
  cachedFileSelection: CachedFileSelection;
}

export function EncodedImages({
  items,
  cachedFileSelection,
}: Props): JSX.Element | null {
  if (!items.length) return null;

  return (
    <Gapper $direction="column" $gap={gap.xxl}>
      {items.map(({ name, encodings }) => {
        const { src } = cachedFileSelection[name] ?? {};

        return (
          <EncodedImage
            key={name}
            name={name}
            src={src}
            encodings={encodings}
          />
        );
      })}
    </Gapper>
  );
}
