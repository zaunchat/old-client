import { h } from "preact";
import {
  ChatArea,
  MainSidebar,
  MembersSidebar,
  ServersSidebar,
} from "../../components/App";
import { ChannelBar } from "../../components/App/ChannelBar";
import styles from "../../styles/App/index.module.css";
export const AppPage = () => {
  return (
    <div className={styles.app}>
      <ServersSidebar />
      <MainSidebar />
      <ChannelBar name="welcome" />
      <ChatArea />
      <MembersSidebar />
    </div>
  );
};
