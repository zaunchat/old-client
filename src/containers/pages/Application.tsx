import { h } from "preact";
import { ServerSidebar, ServersSidebar, ServerNavbar, ApplicationNavbar, MembersNavbar } from "../../components/Application";

import styles from "./styles/Application.module.scss";

export function Application() {
  return (
    <div class={styles.container}>
      <div class={styles.navbar}>
        <div class={styles.servers_navbar}><ServerNavbar /></div>
        <div class={styles.application_navbar}><ApplicationNavbar /></div>
        <div class={styles.members_navbar}><MembersNavbar /></div>
      </div>
      <div class={styles.servers_sidebar}><ServersSidebar /></div>
      <div class={styles.server_sidebar}><ServerSidebar /></div>
      <div class={styles.application}></div>
      <div class={styles.members_sidebar}></div>
    </div>
  );
}
