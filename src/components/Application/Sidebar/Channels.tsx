import { h } from 'preact';
import styles from '@/components/Application/styles/Sidebar/Channels.module.scss';
import { Channel, Category, Banner } from './components/Channels';

export function ChannelsSidebar() {
  return (
    <div className={styles.container}>
      <Banner
        url={`https://cdn.discordapp.com/attachments/880809693642125333/1035503338453729280/unknown.png`}
        title="ITCHAT APPLICATION"
      />
      <div className={styles.wrapper}>
        <Category name="WELCOME" />
        <Channel name="Welcome" notification />
        <Channel name="Overview" />
        <Channel name="Memes" active />
        <Channel name="Games" notification />
      </div>
    </div>
  );
}
