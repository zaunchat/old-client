import { h } from 'preact';
import styles from '@/components/Application/styles/Sidebar/Channels.module.scss';
export function Category({ name }: { name: string }) {
  return <div className={styles.category}>{name}</div>;
}
