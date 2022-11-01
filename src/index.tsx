import { render, h } from 'preact';
import { App } from './containers/Router';

if (process.env.NODE_ENV === `development`) {
  import(`../tests/__mocks__/browserMocks.ts`).then(() => {
    render(<App />, document.getElementById(`app`)!);
  });
} else {
  render(<App />, document.getElementById(`app`)!);
}
