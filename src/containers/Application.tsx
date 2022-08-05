import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import {
  ServerMSBNavbar,
  ServerRSBNavbar,
  ServerLSBNavbar,
  HomeLSBNavbar,
  HomeMSBNavbar,
  HomeRSBNavbar,
  DmMSBNavbar,
  DmRSBNavbar,
  ServersSidebar,
} from "../components";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import { useMatch } from "@tanstack/react-location";
import styles from "./styles/Application.module.scss";
import { useClient } from "../hooks/Client";

export default function Application() {
  const client = useClient();
  const [user, setUser] = useState(client.user);
  const { pathname } = useMatch();
  const rs = pathname.split("/").filter(Boolean);
  const isHome = rs.length == 0;
  const isDM = rs.length == 1;
  const isServer = rs.length == 2;
  useEffect(() => {
    client.login(
      "p5D1YMEkR8M_t-q0Tca2JE6CNwTTnY6L9pGr99T8wd38ZpS5hTlphb6SBQa_uENs"
    );
    client.on("ready", () => {
      setUser(client.user);
    });
    function handleServers() {
      console.log(client.servers.cache);
    }
    client.on("ready", handleServers);
    client.on("serverCreate", handleServers);
    client.on("serverDelete", handleServers);
  }, []);
  return (
    <Fragment>
      <div class={styles.servers_sidebar}>
        <ServersSidebar />
      </div>
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
      <LeftSidebar user={user} />
      </div>
      <div class={styles.application}>{/* <Application /> */}</div>
      <div class={styles.right_sidebar}>{/* <LeftSidebar /> */}</div>
    </Fragment>
  );
}
