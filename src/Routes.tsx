import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import { AppPage, ErrorPage, LandingPage } from "./pages";
export const routes = [
  { path: "/", component: LandingPage },
  { path: "/app", component: AppPage },
];
export const RoutesComponent: FunctionalComponent = () => {
  return (
    <Router>
      {routes.map((route) => (
        <Route path={route.path} component={route.component} />
      ))}
      <Route default component={ErrorPage} />
    </Router>
  );
};
