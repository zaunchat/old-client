import { h } from "preact";
import "../styles/index.scss";
import styles from "./styles/Application.module.scss";
import { Outlet, Router, ReactLocation, Route } from "@tanstack/react-location";
import Application from "./Application";

const routes: Route[] = [
  {
    children: [
      { path: "/", element: <Application /> },
      { path: ":channelId/:serverId", element: <Application /> },
      { path: ":id", element: <Application /> },
    ],
  },
  {
    path: "friends",
    element: <Application />,
  },
];

export function App() {
  const location = new ReactLocation();
  return (
    <Router location={location} routes={routes}>
      <div class={styles.container}>
        <Outlet />
      </div>
    </Router>
  );
}
