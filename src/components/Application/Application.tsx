import { h } from "preact";
import { useState } from "preact/hooks";
import ReactTextareaAutosize from "react-textarea-autosize";

import styles from "../styles/Application/Application.module.scss";
import { EmojiIcon, SendIcon, ShareFilesIcon } from "./assets";

export function App() {
  const [inputRef, setInputRef] = useState<HTMLAreaElement>();
  return (
    <div class={styles.container}>
      <div class={styles.area}></div>
      <div class={styles.box}>
        <div class={styles.container}>
          <ReactTextareaAutosize
            ref={setInputRef}
            placeholder="Type your message here..."
            maxRows={10}
            className={styles.textarea}
          />
          <div class={styles.icons}>
            <ShareFilesIcon />
            <EmojiIcon />
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
