import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useClient } from "../../hooks/Client";
import {
  ServerSidebar,
  ServersSidebar,
  ServerNavbar,
  ApplicationNavbar,
  MembersNavbar,
  MembersSidebar,
  App,
} from "../../components/Application";

import styles from "./styles/Application.module.scss";
import { Collection } from "@itchatapp/client/types/src/deps";
import { ClientUser, Server } from "@itchatapp/client";

export function Application() {
  const [servers, setServers] = useState<Collection<string, Server>>();
  const [user, setUser] = useState<ClientUser>()
  const client = useClient();

  function handleServers() {
    setServers(client.servers.cache);
  }
  useEffect(() => {
    client.login(localStorage.getItem("token")!);
    client.on('ready', () => {
      setUser(client.user!);
    })
    client.on("ready", handleServers);
    client.on("channelUpdate", handleServers);
    client.on("serverUpdate", handleServers);
  }, []);
  return (
    <div class={styles.container}>
      <div class={styles.navbar}>
        <div class={styles.servers_navbar}>
          <ServerNavbar />
        </div>
        <div class={styles.application_navbar}>
          <ApplicationNavbar />
        </div>
        <div class={styles.members_navbar}>
          <MembersNavbar />
        </div>
      </div>
      <div class={styles.servers_sidebar}>{servers && <ServersSidebar servers={servers} />}</div>
      <div class={styles.server_sidebar}>
        {user && <ServerSidebar user={user} />}
      </div>
      <div class={styles.application}>
        <App />
      </div>
      <div class={styles.members_sidebar}>
        <MembersSidebar />
      </div>
    </div>
  );
}
