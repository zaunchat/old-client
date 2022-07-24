import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import styles from "../styles/Application/ServerSidebar.module.scss";
let max = 7;
let left = 4;


function StatusBar() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.16686 0C9.89614 0 10.504 0.605279 10.504 1.35677V9.64323C10.504 10.3946 9.89614 11 9.16686 11C8.43758 11 7.84998 10.3947 7.84998 9.64323V1.35677C7.84998 0.605403 8.43746 0 9.16686 0Z"
        fill="#D1D1D3"
        fill-opacity="0.8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.04574 2.89425C5.81766 2.89425 6.46101 3.49373 6.46101 4.23802V9.65436C6.46101 10.3985 5.81766 10.9981 5.04574 10.9981C4.29521 10.9981 3.65186 10.3987 3.65186 9.65436V4.23802C3.65186 3.49385 4.29521 2.89425 5.04574 2.89425Z"
        fill="#FFF500"
        fill-opacity="0.8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.26412 4.9202C1.96418 4.9202 2.52824 5.53834 2.52824 6.25945V9.65887C2.52824 10.4005 1.96429 10.9981 1.26412 10.9981C0.56406 10.9981 0 10.4007 0 9.65887V6.25945C0 5.53834 0.563944 4.9202 1.26412 4.9202Z"
        fill="#FFF500"
        fill-opacity="0.8"
      />
    </svg>
  );
}

function User() {
  return (
    <div class={styles.user}>
      <div class={styles.user_container}>
        <div class={styles.avatar}>
          <img
            src="https://cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png?size=1024"
            alt=""
          />
        </div>
        <div class={styles.name}>
          <div class={styles.username}>Mr.Kasper</div>
          <div class={styles.status}>Hello world!</div>
        </div>
      </div>
    </div>
  );
}

export function ServerSidebar() {
  const [voice, setVoice] = useState(true);
  const [voiceUsers, setVoiceUsers] = useState(Array(max + 10).fill(0));
  return (
    <div class={styles.container}>
      <div class={styles.up_container}></div>
      <div class={styles.down_container}>
        {voice ? (
          <div class={styles.voice}>
            <div class={styles.channel}>
              <div class={styles.container}>
                <div class={styles.details}>
                  <div className={styles.title}>
                    <StatusBar />
                    <span class={styles.span_server}>ITCHAT COMMUNITY</span>
                    <span class={styles.span_channel}>/Voiceroom</span>
                  </div>
                  <div className={styles.timer}>00:00:00:00</div>
                </div>
                <div class={styles.members}>
                  {voiceUsers.slice(0, max).map((user, i) => (
                    <img
                      style={{ position: "relative", left: `${-left * i}px` }}
                      src="https://images-ext-2.discordapp.net/external/IHYqSv1JWvKfRoo6etajisbHqZXS2ortFa70RqNZT04/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png"
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
        <User />
      </div>
    </div>
  );
}
