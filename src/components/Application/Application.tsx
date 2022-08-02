import { h } from "preact";
import { useState } from "preact/hooks";
import ReactTextareaAutosize from "react-textarea-autosize";

import styles from "../styles/Application/Application.module.scss";
import { EmojiIcon, SendIcon, ShareFilesIcon } from "./assets";
import {
  DogWelcomerVector,
  PartyWelcomeVecotr,
  WelcomeBlob,
} from "./assets/Welcomer";
import { Divider } from "./utils";

function Welcomer() {
  return (
    <div class={styles.welcomer}>
      <div class={styles.header}>
        <div class={styles.party_vector}>
          <PartyWelcomeVecotr />
        </div>
        <div class={styles.welcome}>WELCOME TO</div>
        <div class={styles.name}>SPOTIFY LISTS</div>
        <div class={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis
          leo proin turpis eu hac. Torto
        </div>
      </div>
      <div class={styles.dog_vector}>
        <DogWelcomerVector />
      </div>
      <div class={styles.welcome_blob}>
        <WelcomeBlob />
      </div>
    </div>
  );
}

interface IMessage {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
}

function Message({ message }: { message: IMessage }) {
  return (
    <div class={styles.message}>
      <div class={styles.first_wrapper}>
        <img src={message.author.avatar} alt="" />
      </div>
      <div class={styles.second_wrapper}>
        <div class={styles.name}>{message.author.name}</div>
        <div class={styles.content}>{message.content}</div>
      </div>
    </div>
  );
}

interface IMultiMessage {
  author: {
    name: string;
    avatar: string;
  };
  contents: string[];
}

function MultiMessage({
  message,
}: {
  message: IMultiMessage
}) {
  return (
    <div class={styles.message}>
      <div class={styles.first_wrapper}>
        <img src={message.author.avatar} alt="" />
      </div>
      <div class={styles.second_wrapper}>
        <div class={styles.name}>{message.author.name}</div>
        {message.contents.map((content, i) => (
          <div class={`${styles.content} ${i !== message.contents.length-1 ? styles.multi : ""}`}>{content}</div>
        ))}
      </div>
    </div>
  );
}

export function App() {
  const [inputRef, setInputRef] = useState<HTMLAreaElement>();
  return (
    <div class={styles.container}>
      <div class={styles.area}>
        <div class={styles.messages}>
          <Welcomer />
          <Divider />
          <Message
            message={{
              author: {
                avatar:
                  "https://cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png?size=1024",
                name: "Mr.Kasper",
              },
              content:
                "Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you?",
            }}
          />
          <MultiMessage
            message={{
              author: {
                avatar:
                  "https://cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png?size=1024",
                name: "Mr.Kasper",
              },
              contents: ["test", "test2"],
            }}
          />
        </div>
      </div>
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
