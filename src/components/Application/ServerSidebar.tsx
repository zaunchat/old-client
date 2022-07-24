import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import styles from "../styles/Application/ServerSidebar.module.scss";
let max = 7;
let left = 4;

function BgBlob() {
  return (
    <svg
    class={styles.bgBlob}
      width="94"
      height="62"
      viewBox="0 0 94 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="80.936"
        cy="57.5822"
        r="3.25176"
        transform="rotate(-165 80.936 57.5822)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="86.8272"
        cy="35.5955"
        r="3.25176"
        transform="rotate(-165 86.8272 35.5955)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="36.9625"
        cy="45.7996"
        r="3.25176"
        transform="rotate(-165 36.9625 45.7996)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="42.854"
        cy="23.8129"
        r="3.25176"
        transform="rotate(-165 42.854 23.8129)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="83.8816"
        cy="46.5889"
        r="3.25176"
        transform="rotate(-165 83.8816 46.5889)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="89.773"
        cy="24.6022"
        r="3.25176"
        transform="rotate(-165 89.773 24.6022)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="39.9083"
        cy="34.8063"
        r="3.25176"
        transform="rotate(-165 39.9083 34.8063)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="45.7995"
        cy="12.8196"
        r="3.25176"
        transform="rotate(-165 45.7995 12.8196)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="69.9426"
        cy="54.6366"
        r="3.25176"
        transform="rotate(-165 69.9426 54.6366)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="75.834"
        cy="32.6499"
        r="3.25176"
        transform="rotate(-165 75.834 32.6499)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="25.9692"
        cy="42.8539"
        r="3.25176"
        transform="rotate(-165 25.9692 42.8539)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="31.8606"
        cy="20.8673"
        r="3.25176"
        transform="rotate(-165 31.8606 20.8673)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="72.8883"
        cy="43.6432"
        r="3.25176"
        transform="rotate(-165 72.8883 43.6432)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="78.7796"
        cy="21.6565"
        r="3.25176"
        transform="rotate(-165 78.7796 21.6565)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="28.9149"
        cy="31.8606"
        r="3.25176"
        transform="rotate(-165 28.9149 31.8606)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="34.8063"
        cy="9.8739"
        r="3.25176"
        transform="rotate(-165 34.8063 9.8739)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="58.9493"
        cy="51.6909"
        r="3.25176"
        transform="rotate(-165 58.9493 51.6909)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="64.8406"
        cy="29.7042"
        r="3.25176"
        transform="rotate(-165 64.8406 29.7042)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="14.9759"
        cy="39.9083"
        r="3.25176"
        transform="rotate(-165 14.9759 39.9083)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="20.8672"
        cy="17.9216"
        r="3.25176"
        transform="rotate(-165 20.8672 17.9216)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="61.895"
        cy="40.6976"
        r="3.25176"
        transform="rotate(-165 61.895 40.6976)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="67.7862"
        cy="18.7109"
        r="3.25176"
        transform="rotate(-165 67.7862 18.7109)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="17.9215"
        cy="28.9149"
        r="3.25176"
        transform="rotate(-165 17.9215 28.9149)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="23.8128"
        cy="6.92824"
        r="3.25176"
        transform="rotate(-165 23.8128 6.92824)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="47.9559"
        cy="48.7453"
        r="3.25176"
        transform="rotate(-165 47.9559 48.7453)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="53.8473"
        cy="26.7586"
        r="3.25176"
        transform="rotate(-165 53.8473 26.7586)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="3.98252"
        cy="36.9626"
        r="3.25176"
        transform="rotate(-165 3.98252 36.9626)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="9.87388"
        cy="14.9759"
        r="3.25176"
        transform="rotate(-165 9.87388 14.9759)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="50.9016"
        cy="37.7519"
        r="3.25176"
        transform="rotate(-165 50.9016 37.7519)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="56.7929"
        cy="15.7652"
        r="3.25176"
        transform="rotate(-165 56.7929 15.7652)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="6.9282"
        cy="25.9693"
        r="3.25176"
        transform="rotate(-165 6.9282 25.9693)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="12.8194"
        cy="3.98258"
        r="3.25176"
        transform="rotate(-165 12.8194 3.98258)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
    </svg>
  );
}

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
                <BgBlob />
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
