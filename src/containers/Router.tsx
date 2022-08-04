import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useClient } from "../hooks/Client";
import {
  ServersSidebar,
  ServerMSBNavbar,
  ServerRSBNavbar,
  ServerLSBNavbar,
  HomeLSBNavbar,
  HomeMSBNavbar,
  HomeRSBNavbar,
  DmMSBNavbar,
  DmRSBNavbar,
} from "../components";
import "../styles/index.scss";
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
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";

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
    const rs = location.pathname.split("/").filter(Boolean);
    const isHome = rs.length == 0;
    const isDM = rs.length == 1;
    const isServer = rs.length == 2;
    const isNonOfEm = !(isHome || isDM || isServer);
    return (
      <Fragment>
        <div class={styles.navbar}>
          <div class={styles.left_navbar}>
            {(isHome || isDM) && <HomeLSBNavbar />}
            {isServer && <ServerLSBNavbar />}
          </div>
          <div class={styles.mid_navbar}>
            {isHome && <HomeMSBNavbar />}
            {isDM && <DmMSBNavbar />}
            {isServer && <ServerMSBNavbar />}
          </div>
          <div class={styles.right_navbar}>
            {isServer && <ServerRSBNavbar />}
            {isHome && <HomeRSBNavbar />}
            {isDM && <DmRSBNavbar />}
          </div>
        </div>
        <div class={styles.left_sidebar}>
          <LeftSidebar />
        </div>
        <div class={styles.application}>{/* <Application /> */}</div>
        <div class={styles.right_sidebar}>{/* <LeftSidebar /> */}</div>
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
