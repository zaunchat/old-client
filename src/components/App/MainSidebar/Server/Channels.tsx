import { Avatar } from "@mantine/core";
import { h } from "preact";
import styles from "../../../../styles/App/MainSidebar.module.css";
import { CategoryIcon, CreateIcon } from "./Category";
import { TextIcon } from "./Text";
import { VoiceIcon } from "./Voice";

export const Channels = ({ categories }: { categories: any }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category: any) => (
        <div style={{ marginBottom: "29px" }}>
          <div className={styles.category}>
            <div className={styles.categoryIcon}>
              <CategoryIcon />
            </div>
            <div className={styles.categoryName}>
              {category.name.toUpperCase()}
            </div>
            <div className={styles.createIcon}>
              <CreateIcon />
            </div>
          </div>
          {category.channels.map((channel: any) => (
            <div>
              {channel.type == "text" ? (
                <div className={styles.textChannelContainer}>
                  <div
                    className={`${styles.textChannel} ${
                      channel.active ? styles.activeChannel : ""
                    } `}
                  >
                    <div className={styles.textIcon}>
                      <TextIcon />
                    </div>
                    <div className={styles.textName}>{channel.name}</div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className={styles.voiceChannelContainer}>
                    <div className={styles.voiceChannel}>
                      <div className={styles.voiceIcon}>
                        <VoiceIcon />
                      </div>
                      <div className={styles.voiceName}>{channel.name}</div>
                    </div>
                  </div>

                  <div className={styles.voiceMembers}>
                    {channel.members.map((member: any) => (
                      <div className={styles.voiceMemberContainer}>
                        <div className={styles.voiceMember}>
                          <Avatar
                            size={"32px" as any}
                            radius={"xl"}
                            className={styles.voiceMemberIcon}
                            src={member.icon}
                          >
                            {member.name[0].toUpperCase()}
                          </Avatar>
                          <div className={styles.voiceMemberName}>
                            {member.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
