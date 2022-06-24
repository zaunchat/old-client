import { FunctionalComponent, h } from "preact";
import { RoutesComponent } from "./Routes";
import { MantineProvider } from "@mantine/core";
const App: FunctionalComponent = () => {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <RoutesComponent />
    </MantineProvider>
  );
};

export default App;
