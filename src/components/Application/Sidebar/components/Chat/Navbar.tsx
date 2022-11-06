import { h } from 'preact';
import { TextChannelFilledIcon } from '../../../../../components/assets/Application/Channels';
import styles from '@/components/Application/styles/Sidebar/Chat.module.scss';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <TextChannelFilledIcon w={`20`} />
        <div className={styles.divider} />
        <div>Title</div>
      </div>
    </div>
  );
}
