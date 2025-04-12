import { JSX } from 'react';
import { useImmerReducer } from 'use-immer';

import {
  Container,
  Instruction,
  SvgIcon,
  SvgSprite,
  UploadForm,
} from '@components';
import { iconSize } from '@constants/styles';
import { initialState, reducer } from '@store';
import { getSingularOrPlural } from '@utils';

import { GlobalStyle } from './GlobalStyle';
import { ContentWrapper, LogoAndTitle } from './styled';

export function App(): JSX.Element {
  const [{ filesSelection, errorMessage }, dispatch] = useImmerReducer(
    reducer,
    initialState,
  );

  return (
    <>
      <SvgSprite />
      <GlobalStyle />
      <main>
        <Container>
          <ContentWrapper>
            <LogoAndTitle>
              <SvgIcon icon="logo" size={iconSize.md} />
              <h1>Face Encoder</h1>
            </LogoAndTitle>

            <Instruction />

            <UploadForm
              filesSelection={filesSelection}
              dispatch={dispatch}
            />

            {errorMessage && <p>{errorMessage}</p>}

            {!!filesSelection.files.length && (
              <p>
                Selected {filesSelection.files.length}{' '}
                {getSingularOrPlural({
                  elementsAmount: filesSelection.files.length,
                  singularWord: 'file',
                })}
                .
              </p>
            )}

            {!!filesSelection.validationErrors.length &&
              filesSelection.validationErrors.map(
                ({ reason, reasonMessage, files }) => {
                  return (
                    <div key={reason}>
                      <p>{reasonMessage}:</p>
                      <ul>
                        {files.map(({ name, sizeFormatted }) => {
                          return (
                            <li key={name}>
                              {name} ({sizeFormatted})
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                },
              )}
          </ContentWrapper>
        </Container>
      </main>
    </>
  );
}
