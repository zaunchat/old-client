import { ClientUser } from "@itchatapp/client";
import { Fragment } from "preact";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import styles from "./styles/ServerSidebar.module.scss";

import {
  DeffIcon,
  DisconnectCallIcon,
  DotsBlob,
  MuteIcon,
  SettingsIcon,
} from "./assets";
import { InternetBarsIcon } from "./assets/Status";

import { SdButton } from "./utils";
let max = 7;
let left = 4;

interface IBranch {
  id: string;
  name: string;
}

interface IChannelResolve {
  name: string;
  id: string;
  category: {
    id: string;
    name: string;
  };
  branches: IBranch[] | [];
}

type IChannel<S extends boolean = false> = S extends true
  ? Omit<IChannel, "category"> & Partial<Pick<IChannel, "category">>
  : IChannelResolve;

function User({ user }: { user: ClientUser }) {
  return (
    <div class={styles.user}>
      <div class={styles.user_container}>
        <div class={styles.avatar}>
          <img
            src="https://images-ext-1.discordapp.net/external/1b65hsb3rYWm7Gea8SgVC3jTgI7255Fy7UbXRbpVgPk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png"
            alt=""
          />
        </div>
        <div class={styles.name}>
          <div class={styles.username}>{user.username}</div>
          {/* TODO: ADD USER CLIENT STATUS */}
          <div class={styles.status}>Hello world!</div>
        </div>
        <div class={styles.buttons}>
          <SdButton icon={DeffIcon} />

          <SdButton icon={MuteIcon} />

          <SdButton icon={SettingsIcon} />
        </div>
      </div>
    </div>
  );
}

type TBranchIcon = "1" | "2" | "3";

function BranchIcon({ type, cont }: { type: TBranchIcon; cont: boolean }) {
  return (
    <div class={styles.icon}>
      {type == "1" && (
        <div class={styles.first}>
          <div />
          <div />
        </div>
      )}

      {cont && type == "1" && <div class={styles.continue} />}

      {type == "2" && <div class={styles.middle} />}

      {type == "3" && (
        <div class={styles.last}>
          <div />
          <div />
        </div>
      )}
    </div>
  );
}

function Branch({
  branch,
  type,
  cont,
}: {
  branch: IBranch;
  type: TBranchIcon;
  cont: boolean;
}) {
  return (
    <div class={`${styles.branch}`}>
      <BranchIcon type={type} cont={cont} />
      <div class={styles.name}>what is your name</div>
    </div>
  );
}

function Branches({ branches }: { branches: IBranch[] }) {
  return (
    <div className={styles.branches}>
      {branches.map((branch, i) => {
        const type = branches.length - 1 === i ? "3" : i === 0 ? "1" : "2";
        const cont = branches.length > 2;
        return <Branch branch={branch} type={type} cont={cont} />;
      })}
    </div>
  );
}

function Channel({ channel }: { channel: IChannel<true> }) {
  return (
    <div class={`${styles.channel}`}>
      {/* TODO: add coustom icon */}
      <div class={styles.icon}>#</div>
      <div class={styles.name}>{channel.name}</div>
    </div>
  );
}

function Channels({ channels }: { channels: IChannel[] | IChannel<true>[] }) {
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

function Category({
  channels,
  name,
}: {
  channels: IChannel<true>[];
  name: string;
}) {
  return (
    <div class={styles.category}>
      <div class={styles.title}>{name}</div>
      <Channels channels={channels} />
    </div>
  );
}

function reduceChannels(acc: any, channel: IChannel) {
  if (channel.category?.id) {
    if (!acc[channel.category.id]) {
      acc[channel.category.id] = {
        name: channel.category.name,
        channels: [],
        branches: [],
      };
    }
    acc[channel.category.id].channels.push(channel);
  } else {
    if (!acc["default"]) {
      acc["default"] = { name: "default", channels: [], branches: [] };
    }
    acc.default.channels.push(channel);
  }
  return acc;
}

function ChannelsAdapter({ channels }: { channels: IChannel[] }) {
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

export function ServerSidebar({ user }: { user: ClientUser }) {
  const [voice, setVoice] = useState(true);
  const [voiceUsers, setVoiceUsers] = useState(Array(max + 10).fill(0));
  return (
    <div class={styles.container}>
      <div class={styles.up_container}>
        <ChannelsAdapter
          channels={[
            ...Array(3).fill({
              name: "test3123",
              category: { id: "test", name: "WELCOME" },
              branches: [],
            }),
            ...Array(3).fill({ name: "test1232", category: null }),
          ]}
        />
      </div>
      <div class={styles.down_container}>
        {voice ? (
          <div class={styles.voice}>
            <div class={styles.channel}>
              <div class={styles.container}>
                <DotsBlob />
                <div class={styles.details}>
                  <div className={styles.title}>
                    <InternetBarsIcon />
                    <div class={styles.head}>
                      <span class={styles.span_server}>ITCHAT COMMUNITY</span>
                      <span class={styles.span_channel}>/Voiceroom</span>
                    </div>
                    <div class={styles.button}>
                      <SdButton icon={DisconnectCallIcon} />
                    </div>
                  </div>
                  <div className={styles.timer}>00:00:00</div>
                </div>
                <div class={styles.members}>
                  {voiceUsers.slice(0, max).map((user, i) => (
                    <img
                      style={{ position: "relative", left: `${-left * i}px` }}
                      src="https://images-ext-1.discordapp.net/external/1b65hsb3rYWm7Gea8SgVC3jTgI7255Fy7UbXRbpVgPk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png"
                      alt=""
                    />
                  ))}
                  {voiceUsers.slice(0, max).length < voiceUsers.length ? (
                    <div
                      style={{
                        position: "relative",
                        left: `${-left * voiceUsers.slice(0, max).length}px`,
                      }}
                    >
                      +{voiceUsers.length - voiceUsers.slice(0, max).length}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div class={styles.status}>VOICE CONNECTED</div>
          </div>
        ) : (
          ""
        )}
        <User user={user} />
      </div>
    </div>
  );
}
