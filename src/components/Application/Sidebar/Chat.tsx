import { h } from "preact";
import styles from "../styles/Sidebar/Chat.module.scss";
import ReactTextareaAutosize from "react-textarea-autosize";
import {
  ChatDocumentIcon,
  ChatVoiceMessageIcon,
} from "../../assets/Application/Chat";
import { useState } from "preact/hooks";
import { TextChannelFilledIcon } from "../../assets/Application/Channels";
export function ChatSidebar() {
  const [arr, setArr] = useState<string[]>(["Content example", "test"]);
  const [content, setContent] = useState("");
  return (
    <div className={styles.container}>
      <div class={styles.navbar}>
        <div class={styles.left}>
          <TextChannelFilledIcon w={"20"} />
          <div class={styles.divider} />
          <div>Title</div>
        </div>
      </div>
      <div class={styles.area}>
        <div class={styles.white_space} />
        <div class={styles.messages}>
          {arr.map((t) => (
            <div class={styles.message}>
              <img src="https://cdn.discordapp.com/avatars/456091385066553355/cf62b15be122834319756e88c75ce3d8.webp?size=96" />
              <div class={styles.wrapper}>
                <div class={styles.username}>Mr.Kasper</div>
                <div class={styles.content}>{t}</div>
              </div>
            </div>
          ))}
          <div class={styles.divider}>
            <div>NEW</div>
            <span />
          </div>
          {arr.map((t) => (
            <div class={styles.message}>
              <img src="https://cdn.discordapp.com/avatars/456091385066553355/cf62b15be122834319756e88c75ce3d8.webp?size=96" />
              <div class={styles.wrapper}>
                <div class={styles.username}>Mr.Kasper</div>
                <div class={styles.content}>{t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class={styles.input}>
        <ReactTextareaAutosize
          placeholder="Type your message here..."
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          maxRows={10}
          onKeyPress={(e: {
            key: string;
            which: string;
            keyCode: number;
            shiftKey: any;
            preventDefault: any;
          }) => {
            if (e.key === "Enter" && !e.shiftKey) {
              // Don't generate a new line
              e.preventDefault();
              setArr((ar) => [...ar, content]);
              setContent("");
              // Do something else such as send the message to back-end
              // ...
            }
          }}
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
