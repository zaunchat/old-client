import { Client } from "@itchatapp/client";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

// FOR DEVELOPMENT PURPOSES ONLY
const client = new Client(
  process.env.NODE_ENV === "development"
    ? {
        rest: { api: "https://api-dev.itchat.world" },
        ws: {
          url: "wss://api-dev.itchat.world/ws",
        },
      }
    : {}
);

client.on("ready", () => {
  console.log(`${client.user?.username} is ready!`);
});

export const ClientContext = createContext(client);
export const useClient = () => useContext(ClientContext);
