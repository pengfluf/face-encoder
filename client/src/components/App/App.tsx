import { JSX } from 'react';
import { useImmerReducer } from 'use-immer';

import {
  Container,
  EncodedImages,
  FileSelectionErrors,
  Instruction,
  SvgIcon,
  SvgSprite,
  UploadForm,
} from '@components';
import { ErrorMessage, Gapper } from '@components/styled';
import { SvgIconId } from '@components/SvgIcon/types';
import { gap, iconSize } from '@constants/styles';
import { initialState, reducer } from '@store';

import { GlobalStyle } from './GlobalStyle';

export function App(): JSX.Element {
  const [
    { fileSelection, fileCache, isUploading, errorMessage, encodedImages },
    dispatch,
  ] = useImmerReducer(reducer, initialState);

  return (
    <>
      <SvgSprite />
      <GlobalStyle />
      <main>
        <Container>
          <Gapper $direction="column" $gap={gap.lg}>
            <Gapper $alignItems="center">
              <SvgIcon icon={SvgIconId.logo} size={iconSize.lg} />
              <h1>Face Encoder</h1>
            </Gapper>

            <Instruction />

            <Gapper $direction="column" $gap={gap.sm}>
              {fileSelection.status && <p>{fileSelection.status}</p>}

              <UploadForm
                isReadyToUpload={fileSelection.isReadyToUpload}
                fileCache={fileCache}
                isUploading={isUploading}
                dispatch={dispatch}
              />
            </Gapper>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            <FileSelectionErrors items={fileSelection.errors} />

            <EncodedImages items={encodedImages} fileCache={fileCache} />
          </Gapper>
        </Container>
      </main>
    </>
  );
}
