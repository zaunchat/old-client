// TODO: Types
import { h } from 'preact';
import styles from "../../styles/ServerSidebar.module.scss";
import BranchIcon from './BranchIcon';
export default function Branch({
    branch,
    type,
    cont,
  }: {
    branch: any;
    type: any;
    cont: boolean;
  }) {
    return (
      <div class={`${styles.branch}`}>
        <BranchIcon type={type} cont={cont} />
        <div class={styles.name}>what is your name</div>
      </div>
    );
  }