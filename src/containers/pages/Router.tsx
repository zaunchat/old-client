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
  Application,
} from "../../components";
import "../../styles/index.scss";
import styles from "./styles/Application.module.scss";
import { Collection } from "@itchatapp/client/types/src/deps";
import { ClientUser, Server } from "@itchatapp/client";
import {
  Link,
  Outlet,
  ReactLocation,
  Router,
  useLocation,
} from "@tanstack/react-location";
import { Fragment } from "preact";

export function App() {
  const [servers, setServers] = useState<Collection<string, Server>>();
  const [user, setUser] = useState<ClientUser>();
  const client = useClient();

  function handleServers() {
    setServers(client.servers.cache);
  }
  useEffect(() => {
    client.login(localStorage.getItem("token")!);
    client.on("ready", () => {
      setUser(client.user!);
    });
    client.on("ready", handleServers);
    client.on("channelUpdate", handleServers);
    client.on("serverUpdate", handleServers);
  }, []);
  const location = new ReactLocation();

  function Main() {
    const location = useLocation().history.location;
    const idk = location.pathname.split("/").filter(Boolean);
    const isHome = idk.length == 0;
    const isDM = idk.length == 1;
    const isServer = idk.length == 2;
    const isNonOfEm = !(isHome || isDM || isServer);
    return (
      <Fragment>
        <div class={styles.navbar}>
          <div class={styles.servers_navbar}>
            {isHome && <ServerNavbar />}
            <ServerNavbar />
          </div>
          <div class={styles.application_navbar}>
            <ApplicationNavbar />
          </div>
          <div class={styles.members_navbar}>
            <MembersNavbar />
          </div>
        </div>
        <div class={styles.server_sidebar}>
          {user && <ServerSidebar user={user} />}
        </div>
        <div class={styles.application}>
          <Application />
        </div>
        <div class={styles.members_sidebar}>
          <MembersSidebar />
        </div>
      </Fragment>
    );
  }

  return (
    <Router
      location={location}
      routes={[
        {
          children: [
            { path: "/", element: <Main /> },
            { path: ":channelId/:serverId", element: <Main /> },
            { path: ":id", element: <Main /> },
          ],
        },
        {
          path: "friends",
          element: <Main />,
        },
      ]}
    >
      <div class={styles.container}>
        <div class={styles.servers_sidebar}>
          {<ServersSidebar servers={servers!} />}
        </div>
        <Outlet />
      </div>
    </Router>
  );
}
