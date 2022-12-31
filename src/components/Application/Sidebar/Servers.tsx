import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';
import styles from '../styles/Sidebar/Servers.module.scss';

function Server({ name, icon }: { name: string; icon: string }) {
  return (
    <div className={styles.server_container}>
      <img className={styles.icon} src={icon} />
      <div className={styles.title}>
        <div className={styles.name}>{name}</div>
        <div className={styles.users}>
          <div>
            <img
              src="https://cdn.discordapp.com/avatars/508449321176268801/e2d249a2ea1151fb05b54a377dce104c.webp?size=240"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/avatars/508449321176268801/e2d249a2ea1151fb05b54a377dce104c.webp?size=240"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServersSidebar() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={`${styles.container} ${collapse ? styles.collapsed : ``}`}>
      <div className={styles.wrapper}>
        <button
          onClick={() => setCollapse((c) => !c)}
          className={styles.collapse}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.40031 12.2947L9.40661 12.2888L9.41271 12.2827C9.77713 11.9183 9.77713 11.3217 9.41271 10.9573L5.60937 7.15394C5.52464 7.0692 5.52464 6.93079 5.60937 6.84605L9.41271 3.04272C9.77713 2.67829 9.77713 2.0817 9.41271 1.71728C9.04828 1.35285 8.45169 1.35285 8.08727 1.71728L4.28393 5.52061C3.47034 6.3342 3.47034 7.66579 4.28393 8.47938L8.08727 12.2827C8.27348 12.4689 8.5137 12.5575 8.74999 12.5575C9.00097 12.5575 9.2306 12.4531 9.40031 12.2947Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </button>
        <div className={styles.current}>
          <Server
            icon="https://avatars.githubusercontent.com/u/89282165?s=280&v=4"
            name="ITCHAT PLATFORM"
          />
          <div className={styles.divider}></div>
        </div>
        <div className={styles.input_wrapper}>
          <input
            ref={searchInputRef}
            placeholder="SERVERS SEARCH..."
            type="text"
          />
          <div
            onClick={() => {
              if (collapse) {
                setCollapse(false);
                searchInputRef.current?.focus();
              } else {
                searchInputRef.current?.focus();
              }
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5006 13.3763L10.6231 9.49816C11.2479 8.63945 11.5841 7.60454 11.5831 6.54253C11.5831 3.76285 9.32149 1.50128 6.5418 1.50128C3.76211 1.50128 1.50055 3.76285 1.50055 6.54253C1.50055 9.32222 3.76211 11.5838 6.5418 11.5838C7.60381 11.5848 8.63872 11.2487 9.49743 10.6238L13.3756 14.5013L14.5006 13.3763ZM6.5418 9.9916C5.85955 9.99166 5.19261 9.7894 4.62531 9.4104C4.05802 9.0314 3.61585 8.49269 3.35474 7.86238C3.09363 7.23208 3.02529 6.5385 3.15838 5.86936C3.29146 5.20021 3.61999 4.58557 4.10241 4.10314C4.58483 3.62072 5.19948 3.29219 5.86862 3.15911C6.53777 3.02602 7.23135 3.09436 7.86165 3.35547C8.49196 3.61659 9.03067 4.05875 9.40967 4.62604C9.78867 5.19334 9.99093 5.86028 9.99086 6.54253C9.98979 7.45695 9.62606 8.33361 8.97947 8.9802C8.33288 9.62679 7.45622 9.99052 6.5418 9.9916Z"
                fill="#777777"
              />
            </svg>
          </div>
        </div>
        <div className={styles.servers}>
          <Server
            name="Miecraft"
            icon="https://cdn.discordapp.com/attachments/1035544695205535795/1058478351846752336/f57264688f01a9597e7ddd5c9c716b8a.png"
          />
          <Server
            name="GTA V"
            icon="https://media.discordapp.net/attachments/845334392994136065/1058477876128796842/21515-256x256x32.png"
          />
          <Server
            name="ITCHAT PLATFORM"
            icon="https://avatars.githubusercontent.com/u/89282165?s=280&v=4"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.divider} />
          <div className={styles.down_bar}>
            <div className={styles.left}>
              <img src="https://cdn.discordapp.com/avatars/508449321176268801/e2d249a2ea1151fb05b54a377dce104c.webp?size=240" />
              <div className={styles.user}>
                <div className={styles.username}>Mr.Kasper</div>
                <div className={styles.status}>HELLO WORLD</div>
              </div>
            </div>
            <div className={styles.right}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
