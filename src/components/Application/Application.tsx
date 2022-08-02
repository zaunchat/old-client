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

export function App() {
  const [inputRef, setInputRef] = useState<HTMLAreaElement>();
  return (
    <div class={styles.container}>
      <div class={styles.area}>
        <div class={styles.messages}>
          <Welcomer />
          <Divider />
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
