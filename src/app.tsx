import { h } from "preact";
import { Router, Route } from "preact-router";

import { Error, Application } from "./containers/pages";

import "./styles/index.scss";

export default function App() {
  return (
    <Router>
      <Route path="/app" component={Application} />
      <Route default component={Error} />
    </Router>
  );
}
