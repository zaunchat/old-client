import { h } from 'preact';
import { Server } from '.';
import styles from '@/components/Application/styles/Sidebar/Servers.module.scss';
export function CurrentServer() {
  return (
    <div className={styles.current}>
      <Server />
      <div className={styles.divider}></div>
    </div>
  );
}
