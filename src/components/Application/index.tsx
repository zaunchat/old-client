import { h } from "preact";
import { useState } from "preact/hooks";
import ReactTextareaAutosize from "react-textarea-autosize";

import styles from "../styles/Application.module.scss";
import { EmojiIcon, SendIcon, ShareFilesIcon } from "../assets";
import { Divider } from "../utils";
import { useMatch } from "@tanstack/react-location";
import HomeAdapter from "./HomeAdapter";
import ChatAdapter from "./ChatAdapter";

export function MApplication() {
  const { pathname } = useMatch();
  const rs = pathname.split("/").filter(Boolean);
  const isHome = rs.length == 0;
  const isDM = rs.length == 1;
  const isServer = rs.length == 2;
  return (
    <div class={styles.container}>
      {isHome && <HomeAdapter />}
      {(isServer || isDM) && <ChatAdapter />}
    </div>
  );
}
