import { h } from "preact";
import { AddIcon } from "./AddIcon";
import styles from "../../../../styles/App/ChatArea.module.css";
import "../../../../styles/App/ChatArea.module.css";
import TextareaAutosize from "react-textarea-autosize";
import { GifIcon } from "./GifIcon";
import { EmojiIcon } from "./EmojiIcon";
import { VoiceIcon } from "./VoiceIcon";

export const ChatInput = () => {
  return (
    <div className={styles.chatInputContainer}>
      <div className={styles.chatInput}>
        <div className={styles.leftIcon}>
          <AddIcon />
        </div>
        <TextareaAutosize placeholder="Type your message here..." maxRows={10} className={styles.textArea} />
        <div className={styles.rightIcons}>
          <GifIcon />
          <EmojiIcon />
          <VoiceIcon />
        </div>
      </div>
    </div>
  );
};
