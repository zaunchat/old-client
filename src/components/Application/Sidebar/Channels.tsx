import { h } from 'preact';
import {
  TextChannelOutlinedIcon,
  TextChannelFilledIcon,
} from '../../assets/Application/Channels/Text';
import styles from '../styles/Sidebar/Channels.module.scss';
function Channel({
  name,
  notification = false,
  active,
}: {
  name: string;
  notification?: boolean;
  active?: boolean;
}) {
  return (
    <div className={styles.container}>
      <div className={`${styles.channel} ${active ? styles.active : ``}`}>
        {active ? <TextChannelFilledIcon /> : <TextChannelOutlinedIcon />}

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
        <div className={styles.category}>GENERAL</div>
        <Channel name="Welcome" notification />
        <Channel name="Memes" active />
        <Channel name="Games" notification />
      </div>
    </div>
  );
}
