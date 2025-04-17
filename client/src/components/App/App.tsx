import { JSX, useMemo } from 'react';
import { Outlet } from 'react-router';
import { useImmerReducer } from 'use-immer';

import { Container, Navigation, SvgIcon, SvgSprite } from '@components';
import { ErrorMessage, Gapper } from '@components/styled';
import { SvgIconId } from '@components/SvgIcon/types';
import { gap, iconSize } from '@constants/styles';
import { AppOutletContext } from '@customTypes';
import { initialState, reducer } from '@store';

import { GlobalStyle } from './GlobalStyle';

export function App(): JSX.Element {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const { errorMessage } = state;

  const outletContext: AppOutletContext = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch],
  );

  return (
    <>
      <SvgSprite />
      <GlobalStyle />

      <header>
        <Navigation />
      </header>

      <main>
        <Container>
          <Gapper $direction="column" $gap={gap.lg}>
            <Gapper $alignItems="center">
              <SvgIcon icon={SvgIconId.logo} size={iconSize.lg} />
              <h1>Face Encoder</h1>
            </Gapper>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            <Outlet context={outletContext} />
          </Gapper>
        </Container>
      </main>
    </>
  );
}
