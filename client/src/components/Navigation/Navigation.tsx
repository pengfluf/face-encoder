import { JSX } from 'react';

import { Container } from '@components/Container';
import { routes } from '@constants/routes';

import { NavLink, Wrapper } from './styled';

export function Navigation(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        {routes[0].children?.map(({ id, path }) => {
          if (path === '*') return null;

          return (
            <NavLink key={id} to={path ?? '/'} viewTransition>
              {id}
            </NavLink>
          );
        })}
      </Wrapper>
    </Container>
  );
}
