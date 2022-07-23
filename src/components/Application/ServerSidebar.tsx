import { h } from "preact";

import styles from "../styles/Application/ServerSidebar.module.scss";

function User() {
  return (
    <div class={styles.user}>
      <div class={styles.user_container}>
        <div class={styles.avatar}>
          <img
            src="https://cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png?size=1024"
            alt=""
          />
        </div>
        <div class={styles.name}>
          <div class={styles.username}>Mr.Kasper</div>
          <div class={styles.status}>Hello world!</div>
        </div>
      </div>
    </div>
  );
}

export function ServerSidebar() {
  return (
    <div class={styles.container}>
      <div class={styles.up_container}>
      </div>
      <div class={styles.down_container}>
        <User />
      </div>
    </div>
  );
}
