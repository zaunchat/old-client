import { h } from "preact";
import styles from "../../styles/ServerSidebar.module.scss";
import Divider from "../Divider";
import { Buttons } from "./Buttons";
import { Convas } from "./Convas";
export default function DMsAdapter({ dms }: { dms: any[] }) {
  return (
    <div class={`${styles.container} ${styles.dms}`}>
      <Buttons />
      <Divider />
      <Convas />
    </div>
  );
}
