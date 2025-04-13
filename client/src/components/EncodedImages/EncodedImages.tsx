import { JSX } from 'react';

import { EncodedImage } from '@components';
import { Gapper } from '@components/styled';
import { gap } from '@constants/styles';
import { EncodedImageInfo, FileCache } from '@customTypes';

interface Props {
  items: EncodedImageInfo[];
  fileCache: FileCache;
}

export function EncodedImages({
  items,
  fileCache,
}: Props): JSX.Element | null {
  if (!items.length) return null;

  return (
    <Gapper $direction="column" $gap={gap.xxl}>
      {items.map(({ name, encodings }) => {
        const { src } = fileCache[name];

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
