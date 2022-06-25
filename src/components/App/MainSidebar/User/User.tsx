import { h } from "preact";
import { UserIcon } from "../../../utils";
import styles from "../../../../styles/App/MainSidebar.module.css";
type TStatus = "online";
export const User = ({
  name,
  avatar,
  status,
}: {
  name: string;
  avatar: string;
  status: TStatus;
}) => {
  return (
    <div className={styles.user}>
      <div className={styles.userIconContainer}>
        <UserIcon avatar={avatar} name={name} status={status} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.username}>{name}</div>
        <div className={styles.status}>{status}</div>
      </div>
    </div>
  );
};
