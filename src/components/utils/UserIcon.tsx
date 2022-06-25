import { Avatar } from "@mantine/core";
import { h } from "preact";
import styles from "../../styles/utils.module.css";
type TStatus = "online";
export const UserIcon = ({
  name,
  avatar,
  status,
}: {
  name: string;
  avatar: string;
  status: TStatus;
}) => {
  return (
    <div className={styles.userIcon}>
      <Avatar src={avatar} radius="xl" size={56}>
        {name[0]}
      </Avatar>
      <div
        className={styles.statusIcon}
        style={{ backgroundColor: status == "online" ? "#3BA55D" : "" }}
      />
    </div>
  );
};
