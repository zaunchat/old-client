import { h } from 'preact';
import '../styles/index.scss';
import { Outlet, Router, ReactLocation, Route } from '@tanstack/react-location';
import { Login, Application } from './pages';

const routes: Route[] = [
  {
    children: [
      { path: `/`, element: <Application /> },
      { path: `login`, element: <Login /> },
    ],
  },
];

export function App() {
  const location = new ReactLocation();
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  );
}
