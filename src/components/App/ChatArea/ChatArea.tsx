import { h } from "preact";
import { ChatBox } from "./ChatBox";
import styles from "../../../styles/App/ChatArea.module.css";
export const ChatArea = () => {
  return (
    <div className={styles.chatArea}>
      <ChatBox />
    </div>
  );
};
