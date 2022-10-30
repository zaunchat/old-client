import { h } from "preact";
import styles from "../styles/Sidebar/Servers.module.scss";

function Server() {
  return (
    <div class={styles.server_container}>
      <img
        class={styles.icon}
        src="https://avatars.githubusercontent.com/u/89282165?s=280&v=4"
      />
      <div class={styles.title}>
        <div class={styles.name}>ITCHAT APPLICATION</div>
        <div class={styles.users}>
          <div>
            <img
              src="https://cdn.discordapp.com/avatars/897225796232548353/4df7b648d63de1a7ae69fd0a553baa40.webp?size=96"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/avatars/607169194257022996/88329aea0f9413c9171078711cc2eb21.webp?size=96"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServersSidebar() {
  return (
    <div className={styles.container}>
      <div class={styles.wrapper}>
        <div class={styles.current}>
          <Server />
          <div class={styles.divider}></div>
        </div>
        <div class={styles.input_wrapper}>
          <input placeholder="SERVERS SEARCH..." type="text" />
          <span></span>
        </div>
        <div class={styles.servers}>
          <Server />
          <Server />
          <Server />
          <Server />
          <Server />
        </div>
        <div class={styles.details}>
        <div class={styles.divider} />
          <div class={styles.down_bar}>
            <div class={styles.left}>
              <img src="https://cdn.discordapp.com/avatars/607169194257022996/88329aea0f9413c9171078711cc2eb21.webp?size=96" />
              <div class={styles.user}>
                <div class={styles.username}>Mr.Kasper</div>
                <div class={styles.status}>HELLO WORLD</div>
              </div>
            </div>
            <div class={styles.right}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
