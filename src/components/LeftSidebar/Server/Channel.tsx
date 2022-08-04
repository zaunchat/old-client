// TODO: Types
import { h } from 'preact';
import styles from "../../styles/ServerSidebar.module.scss";
export default function Channel({ channel }: { channel: any }) {
    return (
      <div class={`${styles.channel}`}>
        {/* TODO: add coustom icon */}
        <div class={styles.icon}>#</div>
        <div class={styles.name}>{channel.name}</div>
      </div>
    );
  }