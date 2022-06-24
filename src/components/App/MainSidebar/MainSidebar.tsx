import { h } from "preact";
import styles from "../../../styles/App/MainSidebar.module.css";
import { MainServer } from "./Server";
export const MainSidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.mainSidebarContainer}>
        <MainServer banner="https://cdn.discordapp.com/attachments/880809693642125333/989589766859288666/unknown.png" name="ItChat" />
      </div>
    </div>
  );
};
