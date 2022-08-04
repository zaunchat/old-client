import { Fragment } from "preact";
import { h } from "preact";
import styles from "../../styles/ServerSidebar.module.scss";
import Branches from "./Branches";
import Channel from "./Channel";
// TODO: Types
export default function Channels({ channels }: { channels: any[] }) {
  return (
    <Fragment>
      {channels.map((channel) => {
        return (
          <Fragment>
            <Channel channel={channel} />
            <Branches branches={channel.branches} />
          </Fragment>
        );
      })}
    </Fragment>
  );
}
