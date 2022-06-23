import { h } from "preact";
import styles from "../../../styles/App/ServersSidebar.module.css";

export const Server = ({ active, icon }: { active: boolean, icon: string }) => {
  return (
    <div className={styles.icon}>
      <div className={styles.serverIcon}>
        <img
          className={styles.serverIconImg}
          src={icon}
          alt=""
        />
      </div>
    </div>
  );
};
