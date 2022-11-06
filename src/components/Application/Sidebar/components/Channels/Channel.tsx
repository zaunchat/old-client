import { h } from 'preact';
import {
  TextChannelFilledIcon,
  TextChannelOutlinedIcon,
} from '@/components/assets/Application/Channels';
import styles from '@/components/Application/styles/Sidebar/Channels.module.scss';

export function Channel({
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
