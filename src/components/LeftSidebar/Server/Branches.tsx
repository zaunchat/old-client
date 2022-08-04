// TODO: Types
import { h } from 'preact';
import styles from "../../styles/ServerSidebar.module.scss";
import Branch from './Branch';
export default function Branches({ branches }: { branches: any[] }) {
    return (
      <div className={styles.branches}>
        {branches.map((branch, i) => {
          const type = branches.length - 1 === i ? "3" : i === 0 ? "1" : "2";
          const cont = branches.length > 2;
          return <Branch branch={branch} type={type} cont={cont} />;
        })}
      </div>
    );
  }