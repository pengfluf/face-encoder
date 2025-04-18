import { JSX } from 'react';

import { FaceEncoding } from '@api/types';
import { EncodingsField, ImageOrPlaceholder } from '@components';
import { CachedSelectionItem } from '@customTypes';

import { Fields, Wrapper } from './styled';

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
      <ImageOrPlaceholder name={name} src={src} />

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
