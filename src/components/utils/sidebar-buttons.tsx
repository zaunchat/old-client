import { h } from "preact";

import styles from "../styles/utils.module.scss";

export function SdButton({ icon: Icon }: { icon: () => h.JSX.Element }) {
  return <div class={styles.button}><Icon /></div>;
}
