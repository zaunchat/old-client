import {h} from 'preact';
import styles from "../../styles/ServerSidebar.module.scss";
export default function Button({ icon, title }: { icon: any; title: string }) {
    return (
      <div class={styles.button}>
        <div class={styles.icon}>{icon}</div>
        <div class={styles.title}>{title}</div>
      </div>
    );
  }