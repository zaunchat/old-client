import { h } from "preact";
import styles from "../../../styles/App/ChannelBar.module.css";
import { Search, Settings } from "tabler-icons-react";
import { Input } from "@mantine/core";

export const ChannelBar = ({ name }: { name: string }) => {
  return (
    <div className={styles.channelBar}>
      <div className={styles.channelBarContainer}>
        <div className={styles.barLeft}>
          <div className={styles.hash}>#</div>
          <div className={styles.divider} />
          <div className={styles.name}>{name}</div>
        </div>

        <div className={styles.barRight}>
          <div className={styles.settings}>
            <Settings size={32} color={"rgba(255, 255, 255, 0.5)"} />
          </div>
          <Input
              className={styles.searchInput}
              size="lg"
              variant="unstyled"
              icon={<Search size={22} />}
              placeholder="Search"
          />
        </div>

      </div>
    </div>
  );
};
