import { h } from "preact";

import styles from "../styles/Application/ServersSidebar.module.scss";
import { HomeIcon } from "./assets";

function Home() {
  return (
    <div class={styles.home}>
      <HomeIcon />
    </div>
  );
}

function Server() {
  return (
    <div class={styles.server}>
      <img
        src="https://images-ext-1.discordapp.net/external/1b65hsb3rYWm7Gea8SgVC3jTgI7255Fy7UbXRbpVgPk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png"
        alt=""
      />
    </div>
  );
}

function Divider() {
  return <div class={styles.divider}></div>;
}

export function ServersSidebar() {
  return (
    <div class={styles.container}>
      <Home />
      <Divider />
      <Server />
    </div>
  );
}
