import { h } from 'preact';
import styles from '@/components/Application/styles/Sidebar/Channels.module.scss';
export function Banner({ url, title }: { title: string; url: string }) {
  return (
    <div className={styles.banner}>
      <div className={styles.shadowing} />
      <div className={styles.title}>{title}</div>
      <img className={styles.image} src={url} />
    </div>
  );
}
