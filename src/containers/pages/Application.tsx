import { h } from "preact";
import { useEffect } from "preact/hooks";
import { useClient } from "../../hooks/Client";
import { ServerSidebar, ServersSidebar, ServerNavbar, ApplicationNavbar, MembersNavbar, MembersSidebar, App } from "../../components/Application";

import styles from "./styles/Application.module.scss";

export function Application() {
  const client = useClient();
  useEffect(() => {
    client.login(localStorage.getItem("token")!);
  }, []) 
  return (
    <div class={styles.container}>
      <div class={styles.navbar}>
        <div class={styles.servers_navbar}><ServerNavbar /></div>
        <div class={styles.application_navbar}><ApplicationNavbar /></div>
        <div class={styles.members_navbar}><MembersNavbar /></div>
      </div>
      <div class={styles.servers_sidebar}><ServersSidebar /></div>
      <div class={styles.server_sidebar}><ServerSidebar /></div>
      <div class={styles.application}><App /></div>
      <div class={styles.members_sidebar}><MembersSidebar /></div>
    </div>
  );
}
