import { Client } from '@itchatapp/client';
import { createContext } from 'preact';
import { useContext, useEffect } from 'preact/hooks';

// FOR DEVELOPMENT PURPOSES ONLY
const client = new Client(
  process.env.NODE_ENV === `development`
    ? {
        rest: {
          api: `https://8080-itchatapp-api-kvzoozzezf3.ws-eu59.gitpod.io`,
        },
        ws: {
          url: `wss://8080-itchatapp-api-kvzoozzezf3.ws-eu59.gitpod.io/ws`,
        },
      }
    : {},
);

client.on(`ready`, () => {
  console.log(`${client.user?.username} is ready!`);
});
console.log(`hello`);
export const ClientContext = createContext(client);
export const useClient = () => {
  return useContext(ClientContext);
};
