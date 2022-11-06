import { h } from 'preact';
import styles from '@/containers/styles/Application.module.scss';
import {
  ChatSidebar,
  ServersSidebar,
  ChannelsSidebar,
} from '@/components/Application';
export function Application() {
  return (
    <div className={styles.container}>
      <ServersSidebar />
      <ChannelsSidebar />
      <ChatSidebar />
    </div>
  );
}
