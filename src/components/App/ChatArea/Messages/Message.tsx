import {h} from "preact";
import styles from "../../../../styles/components/Message.module.css";
import {Avatar} from "@mantine/core";

const Message =  (props : {icon: string; name: string; message: string; timestamp: string; type: string}) => {
    const {icon, name, message, timestamp, type} = props;
    const msg = () => {
        switch (type) {
            case "text":
                return <div className={styles.textMessage}>{message}</div>;
            default:
                return <div className={styles.textMessage}>{message}</div>;
        }
    }
    return (
      <div className={styles.MessageBox}>
          <Avatar
              size={"56px" as any}
              radius={"xl"}
              className={styles.MessageIcon}
              src={icon}
          >
              {name.toUpperCase()}
          </Avatar>
            <div className={styles.Message}>
                <div className={styles.MessageHeader}>
                    <div className={styles.MessageSender}>{name}</div>
                    <div className={styles.MessageTime}>{timestamp}</div>
                </div>
                {/* Type */}
                {msg()}
            </div>
      </div>
    );
}

export default Message;