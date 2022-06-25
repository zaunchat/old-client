import { h } from "preact";
import { UserIcon } from "../../utils";
import styles from "../../../styles/App/MembersSidebar.module.css";
export const MembersSidebar = ({ roles }: { roles: any[] }) => {
  return (
    <div className={styles.membersSidebar}>
      <div class={styles.membersSidebarContainer}>
        {roles.map((role) => (
          <div className={styles.roleContainer}>
            <div className={styles.roleName}>{role.name}</div>
            <div className={styles.roleMembers}>
              {role.members.map((member: any) => (
                <div className={styles.roleMember}>
                  <UserIcon
                    name={member.name}
                    avatar={member.avatar}
                    status="online"
                  />
                  <div className={styles.roleMemberName}>{member.name}</div>
                  <div className={styles.roleMemberStatus}>online</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
