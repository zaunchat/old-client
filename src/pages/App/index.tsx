import { h } from "preact";
import { useState } from "preact/hooks";
import {
  ChatArea,
  MainSidebar,
  MembersSidebar,
  ServersSidebar,
} from "../../components/App";
import { ChannelBar } from "../../components/App/ChannelBar";
import styles from "../../styles/App/index.module.css";
export const AppPage = () => {
  const [roles, setRoles] = useState([
    {
      name: "Founder",
      color: "red",
      members: [
        { name: "NeverMind", avatar: "" },
        { name: "NeverMind", avatar: "" },
        { name: "NeverMind", avatar: "" },
      ],
    },

    {
      name: "Admins",
      color: "blue",
      members: [
        { name: "NeverMind", avatar: "" },
        { name: "NeverMind", avatar: "" },
        { name: "NeverMind", avatar: "" },
      ],
    },
  ]);

  return (
    <div className={styles.app}>
      <div className={styles.appLeft}>
        <ServersSidebar />
        <MainSidebar />
      </div>
      <div className={styles.appRight}>
        <ChannelBar name="welcome" />
        <div className={styles.appChat}>
          <ChatArea />
          <MembersSidebar roles={roles} />
        </div>
      </div>
    </div>
  );
};
