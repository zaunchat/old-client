import { h } from 'preact';
import styles from '../../../styles/Sidebar/Servers.module.scss';

export function Server() {
  return (
    <div className={styles.server_container}>
      <img
        className={styles.icon}
        src="https://avatars.githubusercontent.com/u/89282165?s=280&v=4"
      />
      <div className={styles.title}>
        <div className={styles.name}>ITCHAT APPLICATION</div>
        <div className={styles.users}>
          <div>
            <img
              src="https://cdn.discordapp.com/avatars/897225796232548353/4df7b648d63de1a7ae69fd0a553baa40.webp?size=96"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/avatars/607169194257022996/88329aea0f9413c9171078711cc2eb21.webp?size=96"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
