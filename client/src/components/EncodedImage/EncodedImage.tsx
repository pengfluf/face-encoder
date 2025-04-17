import { JSX } from 'react';

import { FaceEncoding } from '@api/types';
import { EncodingsField } from '@components';
import { CachedSelectionItem } from '@customTypes';

import { Fields, Image, Wrapper } from './styled';

interface Props {
  name: FaceEncoding['name'];
  src?: CachedSelectionItem['src'];
  encodings: FaceEncoding['encodings'];
}

export function EncodedImage({
  name,
  src,
  encodings,
}: Props): JSX.Element {
  return (
    <Wrapper>
      {src ? <Image alt={name} src={src} /> : <span>{name}</span>}

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
