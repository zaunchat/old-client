import { h } from 'preact';
import {
  TextChannelOutlinedIcon,
  TextChannelFilledIcon,
} from '../../assets/Application/Channels/Text';
import styles from '../styles/Sidebar/Channels.module.scss';
export function ChannelsSidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.title}>ITCHAT PLATFORM</div>
        <img
          className={styles.image}
          src="https://cdn.discordapp.com/attachments/880809693642125333/1035503338453729280/unknown.png"
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.category}>MINECRAFT</div>
        <div className={styles.container}>
          <div className={styles.channel}>
            <TextChannelOutlinedIcon />
            <div className={styles.title}>CODES</div>
            {/* <div className={styles.notification}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
