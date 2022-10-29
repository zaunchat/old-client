import { h } from "preact";
import {
  TextChannelOutlinedIcon,
  TextChannelFilledIcon,
} from "../../assets/Application/Channels/Text";
import styles from "../styles/Sidebar/Channels.module.scss";
export function ChannelsSidebar() {
  return (
    <div className={styles.container}>
      <div class={styles.banner}>
        <div class={styles.title}>ITCHAT PLATFORM</div>
        <img
          class={styles.image}
          src="https://cdn.discordapp.com/attachments/880809693642125333/1035503338453729280/unknown.png"
        />
      </div>
      <div class={styles.wrapper}>
        <div class={styles.category}>MINECRAFT</div>
        <div class={styles.container}>
          <div class={styles.channel}>
            <TextChannelOutlinedIcon />
            <div className={styles.title}>CODES</div>
            {/* <div className={styles.notification}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
