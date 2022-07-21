import { h } from "preact";

import styles from '../styles/Application/Navbar.module.scss';

export function ServerNavbar() {
  return <div class={styles.server_navbar}>
    <div class={styles.title}>ItChat (Freedom Platform)</div>
  </div>;
}

export function ApplicationNavbar() {
  return <div class={styles.application_navbar}>test</div>;
}

export function MembersNavbar() {
  return <div class={styles.members_navbar}>test</div>;
}
