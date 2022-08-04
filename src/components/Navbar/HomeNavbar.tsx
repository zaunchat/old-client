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
  return <div class={styles.MNav}>HomeNavbar</div>;
}

export function HomeRSBNavbar() {
  return <div class={styles.RNav}>HomeNavbar</div>;
}
