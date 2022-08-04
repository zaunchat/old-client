import { h } from "preact";
import styles from "../../styles/ServerSidebar.module.scss";
export function Conva() {
  return (
    <div class={styles.conva}>
      <img
        class={styles.icon}
        src="https://cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png?size=1024"
        alt=""
      />
      <div class={styles.title}>@Mr.Kasper</div>
    </div>
  );
}
