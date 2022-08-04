import { h } from "preact";

import styles from '../styles/DefaultNavbar.module.scss';

export function ServerLSBNavbar() {
  return <div class={styles.server_navbar}>
    <div class={styles.title}>ItChat (Freedom Platform)</div>
  </div>;
}

export function ServerMSBNavbar() {
  return <div class={styles.application_navbar}>
    <div class={styles.type_tag}>#</div>
    <div class={styles.divider} />
    <div class={styles.title}>What is your name!</div>
  </div>;
}

export function ServerRSBNavbar() {
  return <div class={styles.members_navbar}>test</div>;
}
