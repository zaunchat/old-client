// TODO: Types
import { h } from 'preact';
import reduceChannels from './utils/ReduceChannels';
import styles from "../../styles/ServerSidebar.module.scss";
import Category from './Category';
export default function ChannelsAdapter({ channels }: { channels: any[] }) {
    const categories = channels.reduce(reduceChannels, {});
    console.log(categories);
    return (
      <div class={styles.container}>
        {Object.keys(categories).map((id) => {
          const category_channels = categories[id];
          return (
            id !== "default" && (
              <Category
                name={category_channels.name}
                channels={category_channels.channels}
              />
            )
          );
        })}
      </div>
    );
  }