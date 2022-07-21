import { h } from "preact";

import styles from "./styles/Application.module.scss";

export function Application() {
  return (
    <div class={styles.container}>
      <div class={styles.navbar}>
        <div class={styles.servers_navbar}></div>
        <div class={styles.application_navbar}></div>
        <div class={styles.members_navbar}></div>
      </div>
      <div class={styles.servers_sidebar}></div>
      <div class={styles.server_sidebar}></div>
      <div class={styles.application}></div>
      <div class={styles.members_sidebar}></div>
    </div>
  );
}
