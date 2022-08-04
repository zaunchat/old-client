import { h } from 'preact';
import { useState } from 'preact/hooks';
import { DisconnectCallIcon, DotsBlob, InternetBarsIcon } from '../assets';

import styles from "../styles/ServerSidebar.module.scss";
import { SdButton } from '../utils';

let max = 7;
let left = 4;
export default function Voice({ inVoice, voiceUsers }: { inVoice: boolean, voiceUsers: any[] }) {
    return (
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
    )
}