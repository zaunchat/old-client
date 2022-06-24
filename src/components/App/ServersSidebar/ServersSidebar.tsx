import { Center, Paper, Popper, useMantineTheme } from "@mantine/core";
import { h } from "preact";
import { useState } from "preact/hooks";
import styles from "../../../styles/App/ServersSidebar.module.css";
import { Add } from "./Add";
import { Divider } from "./Divider";
import { Home } from "./Home";
import { Search } from "./Search";
import { Server } from "./Server";
export const ServersSidebar = () => {
  return (
    <div className={styles.serversSidebar}>
      <div className={styles.serversSidebarContainer}>
        <Home active={false} />
        <Divider />
        <Server
          name="Itchat"
          icon="https://cdn.discordapp.com/avatars/845311131191214094/78db48f99ba4d8dbea0a5ce75ffd32d8.png?size=1024"
          active={false}
        />
        <Search />
        <Add />
      </div>
    </div>
  );
};
