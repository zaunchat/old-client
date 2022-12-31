import { h } from 'preact';
import styles from '../styles/Sidebar/Chat.module.scss';
import ReactTextareaAutosize from 'react-textarea-autosize';
import {
  ChatDocumentIcon,
  ChatVoiceMessageIcon,
} from '../../assets/Application/Chat';
import { useEffect, useRef, useState } from 'preact/hooks';
import { TextChannelFilledIcon } from '../../assets/Application/Channels';
export function ChatSidebar() {
  const bottomRef = useRef(null);
  const [arr, setArr] = useState<string[]>([
    `Hello everyone!`,
    `I can't wait!!`,
    `it's ITCHAT!!`,
  ]);
  const [content, setContent] = useState(``);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: `smooth` });
  }, [arr]);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <TextChannelFilledIcon w={`20`} />
          <div className={styles.divider} />
          <div>Title</div>
        </div>
      </div>
      <div className={styles.area}>
        <div className={styles.white_space} />
        <div className={styles.messages}>
          <div className={styles.divider}>
            <div>NEW</div>
            <span />
          </div>
          {arr.map((t, i) => (
            <div
              key={i}
              ref={i == arr.length - 1 ? bottomRef : undefined}
              className={styles.message}
            >
              <img src="https://cdn.discordapp.com/avatars/456091385066553355/cf62b15be122834319756e88c75ce3d8.webp?size=96" />
              <div className={styles.wrapper}>
                <div className={styles.username}>Mr.Kasper</div>
                <div className={styles.content}>{t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.input}>
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
            if (e.key === `Enter` && !e.shiftKey) {
              // Don't generate a new line
              e.preventDefault();
              console.log(arr);
              setArr((ar) => [...ar, content]);
              setContent(``);
              // Do something else such as send the message to back-end
              // ...
            }
          }}
        />
        <div className={styles.buttons}>
          <div className={styles.wrapper}>
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
