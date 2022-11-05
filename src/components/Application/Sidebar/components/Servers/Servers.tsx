import { h } from 'preact';
import styles from '../../../styles/Sidebar/Servers.module.scss';
import { Server } from '.';
export function Servers() {
  return (
    <div className={styles.servers}>
      <Server />
      <Server />
      <Server />
      <Server />
      <Server />
    </div>
  );
}
