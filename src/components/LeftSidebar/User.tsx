import { h } from 'preact';
import { useClient } from '../../hooks/Client';
import { DeffIcon, MuteIcon, SettingsIcon } from '../assets';
import styles from "../styles/ServerSidebar.module.scss";
import { SdButton } from '../utils';

export default function User() {
  const user = useClient().user!
    return user && (
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