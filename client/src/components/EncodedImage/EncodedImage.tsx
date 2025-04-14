import { JSX } from 'react';

import { EncodingsField } from '@components';
import { CachedFile } from '@customTypes';
import { FaceEncoding } from '@customTypes/api';

import { Fields, Image, Wrapper } from './styled';

interface Props {
  name: FaceEncoding['name'];
  src: CachedFile['src'];
  encodings: FaceEncoding['encodings'];
}

export function EncodedImage({
  name,
  src,
  encodings,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <Image alt={name} src={src} />

      <Fields>
        {encodings.map((group, index) => {
          return (
            <EncodingsField
              key={`${name}-${index}-${group[0]}`}
              encodings={group.join(', ')}
            />
          );
        })}
      </Fields>
    </Wrapper>
  );
}
