import { h } from "preact";
import styles from "../../../styles/App/MainSidebar.module.css";
import { MainServer } from "./Server";
import { User } from "./User";
export const MainSidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.mainSidebarContainer}>
        <MainServer banner="https://cdn.discordapp.com/attachments/880809693642125333/989589766859288666/unknown.png" name="ItChat" />
        <User name="Mr.Kasper" avatar="https://cdn.discordapp.com/avatars/845311131191214094/78db48f99ba4d8dbea0a5ce75ffd32d8.png?size=1024" status="online" />
      </div>
    </div>
  );
};
