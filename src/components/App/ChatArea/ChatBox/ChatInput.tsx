import { h } from "preact";
import { AddIcon } from "./AddIcon";
import styles from "../../../../styles/App/ChatArea.module.css";
import TextareaAutosize from "react-textarea-autosize";
import { GifIcon } from "./GifIcon";
import { EmojiIcon } from "./EmojiIcon";
import { VoiceIcon } from "./VoiceIcon";
import { FilesBox } from "../FilesBox";
import { useEffect, useState } from "preact/hooks";
import { createStyles } from "@mantine/core";

export const ChatInput = () => {
  const [files, setFiles] = useState([{ title: "Avatar.png", id: "1" }]);
  const useStyles = createStyles((theme) => {
    return {
      inputRadius: {
        borderRadius: files.length > 0 ? "0 0 10px 10px" : "10px",
      },
    };
  });
  const [inputRef, setInputRef] = useState<HTMLAreaElement>();
  const { classes } = useStyles();
  useEffect(() => {
    if (inputRef) {
      if (files.length > 0) {
        inputRef.style.borderTopLeftRadius = "0px !important";
        inputRef.style.borderTopRightRadius = "0px !important";
      }
    }
  }, [files, inputRef]);
  return (
    <div className={styles.chatInputContainer}>
      <div className={styles.chatInputBox}>
        <FilesBox files={files} setFiles={setFiles} />
        <div className={`${classes.inputRadius} ${styles.chatInput}`}>
          <div className={styles.leftIcon}>
            <AddIcon />
          </div>
          <TextareaAutosize
            ref={setInputRef}
            placeholder="Type your message here..."
            maxRows={10}
            className={styles.textArea}
          />
          <div className={styles.rightIcons}>
            <GifIcon />
            <EmojiIcon />
            <VoiceIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
