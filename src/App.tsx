import { FunctionalComponent, h } from "preact";
import { RoutesComponent } from "./Routes";
import { MantineProvider } from "@mantine/core";
const App: FunctionalComponent = () => {
  return (
    <MantineProvider theme={{ colorScheme: "dark", fontFamily: "Poppins" }}>
      <RoutesComponent />
    </MantineProvider>
  );
};

export default App;
