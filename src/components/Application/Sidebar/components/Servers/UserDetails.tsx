import { h } from 'preact';
import styles from '../../../styles/Sidebar/Servers.module.scss';
export function UserDetails() {
  return (
    <div className={styles.details}>
      <div className={styles.divider} />
      <div className={styles.down_bar}>
        <div className={styles.left}>
          <img src="https://cdn.discordapp.com/avatars/607169194257022996/88329aea0f9413c9171078711cc2eb21.webp?size=96" />
          <div className={styles.user}>
            <div className={styles.username}>Mr.Kasper</div>
            <div className={styles.status}>HELLO WORLD</div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
