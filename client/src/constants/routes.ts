import { redirect, RouteObject } from 'react-router';

import { App } from '@components';
import { Cache, Home } from '@pages';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        id: 'Home',
        index: true,
        Component: Home,
      },
      {
        id: 'Cache',
        path: '/cache',
        Component: Cache,
      },
    ],
  },
  {
    path: '*',
    loader: () => redirect('/'),
  },
];
