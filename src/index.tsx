import { render, h } from "preact";
import { App } from "./containers/Router";

if (process.env.NODE_ENV === "development") {
  // ahhhhh this is soo good, it has been a long time from using ts-ignore lol
  //@ts-ignore
  import("../tests/__mocks__/browserMocks.ts").then(() => {
    render(<App />, document.getElementById("app")!);
  });
} else {
  render(<App />, document.getElementById("app")!);
}
