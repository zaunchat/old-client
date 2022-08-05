import { Fragment } from "preact";
import { h } from "preact";
import { useState } from "preact/hooks";

import styles from "../styles/ServerSidebar.module.scss";

import User from "./User";
import Voice from "./Voice";
import { useClient } from "../../hooks/Client";
import ServerAdapter from "./Server/ServerAdapter";
import DMsAdapter from "./DMs/DmsAdapter";

import { ClientUser } from "@itchatapp/client";

export default function LeftSidebar({ user }: { user: ClientUser | null }) {
  const [voice, setVoice] = useState(true);
  const [voiceUsers, setVoiceUsers] = useState(Array(10).fill(0));
  const rs = location.pathname.split("/").filter(Boolean);
  const isHome = rs.length == 0;
  const isDM = rs.length == 1;
  const isServer = rs.length == 2;
  const isNonOfEm = !(isHome || isDM || isServer);
  return (
    <div class={styles.container}>
      <div class={styles.up_container}>
        {isServer && (
          <ServerAdapter
            channels={[
              ...Array(3).fill({
                name: "test3123",
                category: { id: "test", name: "WELCOME" },
                branches: [],
              }),
              ...Array(3).fill({ name: "test1232", category: null }),
            ]}
          />
        )}
        {(isHome || isDM) && <DMsAdapter dms={[]} />}
      </div>
      <div class={styles.down_container}>
        {user && (
          <>
            <Voice inVoice={voice} voiceUsers={voiceUsers} />
            <User />
          </>
        )}
      </div>
    </div>
  );
}
