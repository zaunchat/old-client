import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import { AppPage, LandingPage } from "./pages";

const App: FunctionalComponent = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={LandingPage} />
        <Route path="/" component={AppPage} />
      </Router>
    </div>
  );
};

export default App;
