import { Avatar } from "@mantine/core";
import { h } from "preact";
import styles from "../../../styles/App/ServersSidebar.module.css";
export const Home = ({ active }: { active: boolean }) => {
  return (
    <Avatar className={styles.icon}>
      <svg
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0ZM27.5 12.6724L40.9277 23.1091V42.3276H31.6894V30.726H23.3106V42.3276H14.0723V23.1091L27.5 12.6724Z"
          fill="#FC4754"
        />
      </svg>
    </Avatar>
  );
};