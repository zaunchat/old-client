import { h } from "preact";
import styles from "../../styles/ServerSidebar.module.scss";
import { Conva } from "./Conva";
export function Convas({ dms }: { dms: any[] }) {
  return (
    <div class={styles.convas}>
      <div class={styles.title}>PINNED DMs</div>
      <Conva />
      <Conva />
      <Conva />
    </div>
  );
}
