import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from '../styles/Sidebar/Servers.module.scss';

function Server() {
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

export function ServersSidebar() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={`${styles.container} ${collapse ? styles.collapsed : ``}`}>
      <div className={styles.wrapper}>
        <button
          onClick={() => setCollapse((c) => !c)}
          className={styles.collapse}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.40031 12.2947L9.40661 12.2888L9.41271 12.2827C9.77713 11.9183 9.77713 11.3217 9.41271 10.9573L5.60937 7.15394C5.52464 7.0692 5.52464 6.93079 5.60937 6.84605L9.41271 3.04272C9.77713 2.67829 9.77713 2.0817 9.41271 1.71728C9.04828 1.35285 8.45169 1.35285 8.08727 1.71728L4.28393 5.52061C3.47034 6.3342 3.47034 7.66579 4.28393 8.47938L8.08727 12.2827C8.27348 12.4689 8.5137 12.5575 8.74999 12.5575C9.00097 12.5575 9.2306 12.4531 9.40031 12.2947Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </button>
        <div className={styles.current}>
          <Server />
          <div className={styles.divider}></div>
        </div>
        <div className={styles.input_wrapper}>
          <input placeholder="SERVERS SEARCH..." type="text" />
          <span></span>
        </div>
        <div className={styles.servers}>
          <Server />
          <Server />
          <Server />
          <Server />
          <Server />
        </div>
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
      </div>
    </div>
  );
}
