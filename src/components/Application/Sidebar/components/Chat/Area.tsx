import { h } from 'preact';
import styles from '../../../styles/Sidebar/Chat.module.scss';

function DividerMessage() {
  return (
    <div className={styles.divider}>
      <div>NEW</div>
      <span />
    </div>
  );
}

export function Area({ arr, bottomRef }: any) {
  return (
    <div className={styles.area}>
      <div className={styles.white_space} />
      <div className={styles.messages}>
        <DividerMessage />
        {arr.map((t: any, i: any) => (
          <div
            key={i}
            ref={i == arr.length - 1 ? bottomRef : undefined}
            className={styles.message}
          >
            <img src="https://cdn.discordapp.com/avatars/456091385066553355/cf62b15be122834319756e88c75ce3d8.webp?size=96" />
            <div className={styles.wrapper}>
              <div className={styles.username}>Mr.Kasper</div>
              <div className={styles.content}>{t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
