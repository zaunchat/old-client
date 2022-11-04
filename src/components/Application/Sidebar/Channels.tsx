import { h } from 'preact';
import {
  TextChannelOutlinedIcon,
  TextChannelFilledIcon,
} from '../../assets/Application/Channels/Text';
import styles from '../styles/Sidebar/Channels.module.scss';
function Channel({
  name,
  notification = false,
}: {
  name: string;
  notification?: boolean;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.channel}>
        <TextChannelOutlinedIcon />
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          {notification && <div className={styles.notification} />}
        </div>
      </div>
    </div>
  );
}
export function ChannelsSidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.shadowing} />
        <div className={styles.title}>ITCHAT PLATFORM</div>
        <img
          className={styles.image}
          src="https://cdn.discordapp.com/attachments/880809693642125333/1035503338453729280/unknown.png"
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.category}>MINECRAFT</div>
        <Channel name="Welcome" notification />
        <Channel name="Memes" />
        <Channel name="Games" notification />
      </div>
    </div>
  );
}
