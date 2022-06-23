import { h } from "preact";
import styles from "../../../styles/App/ServersSidebar.module.css";

export const Add = () => {
  return (
    <div className={styles.icon}>
      <div className={styles.addIcon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19"
            stroke="#FC4754"
            stroke-opacity="0.51"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 12H12H19"
            stroke="#FC4754"
            stroke-opacity="0.51"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
