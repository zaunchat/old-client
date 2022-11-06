import { h } from 'preact';
import ReactTextareaAutosize from 'react-textarea-autosize';
import {
  ChatDocumentIcon,
  ChatVoiceMessageIcon,
} from '@/components/assets/Application/Chat';
import styles from '@/components/Application/styles/Sidebar/Chat.module.scss';

export function TextField({ content, setContent, arr, setArr }: any) {
  return (
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
            setArr((ar: any) => [...ar, content]);
            setContent(``);
            // Do something else such as send the message to back-end
            // ...
          }
        }}
      />
      <div className={styles.buttons}>
        <div className={styles.wrapper}>
          <div>
            <ChatDocumentIcon />
          </div>
          <div>
            <ChatVoiceMessageIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
