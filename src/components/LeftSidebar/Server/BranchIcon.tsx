// TODO: Types
import { h } from 'preact';
import styles from "../../styles/ServerSidebar.module.scss";
export default function BranchIcon({ type, cont }: { type: any; cont: boolean }) {
    return (
      <div class={styles.icon}>
        {type == "1" && (
          <div class={styles.first}>
            <div />
            <div />
          </div>
        )}
  
        {cont && type == "1" && <div class={styles.continue} />}
  
        {type == "2" && <div class={styles.middle} />}
  
        {type == "3" && (
          <div class={styles.last}>
            <div />
            <div />
          </div>
        )}
      </div>
    );
  }