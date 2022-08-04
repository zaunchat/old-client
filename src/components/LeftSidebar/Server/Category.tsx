import { h } from "preact";
// TODO: Types
import styles from "../../styles/ServerSidebar.module.scss";
import Channels from "./Channels";
export default function Category({
  channels,
  name,
}: {
  channels: any[];
  name: string;
}) {
  return (
    <div class={styles.category}>
      <div class={styles.title}>{name}</div>
      <Channels channels={channels} />
    </div>
  );
}
