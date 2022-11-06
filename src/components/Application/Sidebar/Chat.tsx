import styles from '../styles/Sidebar/Chat.module.scss';
import { useEffect, useRef, useState } from 'preact/hooks';
import { Area, Navbar, TextField } from './components/Chat';
import { h } from 'preact';
export function ChatSidebar() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [arr, setArr] = useState<string[]>([
    `asdasdasdsad\n\n\nsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsaasdasdadsadsa`,
    `Content exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent exampleContent example`,
    `test`,
  ]);
  const [content, setContent] = useState(``);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: `smooth` });
  }, [arr]);
  return (
    <div className={styles.container}>
      <Navbar />
      <Area arr={arr} bottomRef={bottomRef} />
      <TextField
        setContent={setContent}
        content={content}
        arr={arr}
        setArr={setArr}
      />
    </div>
  );
}
