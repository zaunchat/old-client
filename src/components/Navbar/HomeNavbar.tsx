import { h } from "preact";

import styles from "../styles/HomeNavbar.module.scss";

export function HomeLSBNavbar() {
  return (
    <div class={styles.LNav}>
      <button>Find your conva</button>
    </div>
  );
}

export function HomeMSBNavbar() {
  return <div class={styles.MNav}>
    <div class={styles.tag}>&</div>
    <div class={styles.divider} />
    <div class={styles.title}>FRIENDS</div>
  </div>;
}

export function HomeRSBNavbar() {
  // TODO: add last messages
  return <div class={styles.RNav}></div>;
}
