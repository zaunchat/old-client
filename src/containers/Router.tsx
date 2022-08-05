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
  Outlet,
  Router,
  ReactLocation,
  useMatch
} from "@tanstack/react-location";
import { Fragment } from "preact";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";

const useReactPath = () => {
  const [path, setPath] = useState(window.location.pathname);
  const listenToPopstate = () => {
    const winPath = window.location.pathname;
    setPath(winPath);
  };
  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  return path;
};

function Main() {
  const { pathname } = useMatch()
  const rs = pathname.split("/").filter(Boolean);
  const [isHome, setIsHome] = useState(rs.length == 0);
  const [isDM, setIsDM] = useState(rs.length == 1);
  const [isServer, setIsServer] = useState(rs.length == 2);
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

export function App() {
  const [servers, setServers] = useState<Collection<string, Server>>();
  const [user, setUser] = useState<ClientUser>();
  const client = useClient();

  function handleServers() {
    console.log('test')
    setServers(client.servers.cache);
  }
  useEffect(() => {
    client.login("VASFYE-cLR4FBSFWcoKObGpDni8BCIYxajBGFH7OuP_p8EtKhdMLbWOcZ4FWwnpD");
    client.on("ready", () => {
      setUser(client.user!);
    });
    client.on("ready", handleServers);
    client.on("channelUpdate", handleServers);
    client.on("serverCreate", handleServers);
    client.on("serverDelete", handleServers);
  }, []);
  const location = new ReactLocation();

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
{user ? (
        <div class={styles.container}>
        <div class={styles.servers_sidebar}>
          {<ServersSidebar servers={servers!} />}
        </div>
        <Outlet />
      </div>
) : (
  <div class={styles.container}>
        <div class={styles.servers_sidebar}>
          {<ServersSidebar servers={servers!} />}
        </div>
        <Outlet />
      </div>
)}
    </Router>
  );
}
