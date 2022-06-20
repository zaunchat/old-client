import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import LandingPage from "./pages/Landing";

const App: FunctionalComponent = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={LandingPage} />
      </Router>
    </div>
  );
};

export default App;
