import { h } from "preact";
import styles from "../styles/Sidebar/Chat.module.scss";
import ReactTextareaAutosize from "react-textarea-autosize";
import {
  ChatDocumentIcon,
  ChatVoiceMessageIcon,
} from "../../assets/Application/Chat";
import { useState } from "preact/hooks";
export function ChatSidebar() {
  const [arr, setArr] = useState<string[]>(["Content example"]);
  const [content, setContent] = useState("");
  return (
    <div className={styles.container}>
      <div class={styles.navbar}></div>
      <div class={styles.area}>
        <div class={styles.white_space}></div>
        {arr.map((t) => <div>{t}</div>)}
      </div>
      <div class={styles.input}>
        <button onClick={() => {
          setArr(ar => [...ar, content])
          setContent("");
        }}>example</button>
        <ReactTextareaAutosize
          placeholder="Type your message here..."
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          maxRows={10}
        />
        <div class={styles.buttons}>
          <div class={styles.wrapper}>
            <div>
              <ChatVoiceMessageIcon />
            </div>
            <div>
              <ChatDocumentIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
