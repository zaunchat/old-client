import { h } from "preact";
import { useState } from "preact/hooks";

import styles from "./styles/MembersSidebar.module.scss";

import { InviteAddIcon, InvitePersonIcon } from './assets'

interface IMember {
  username: string;
  status: string;
  avatar: string;
}

interface ICategory {
  name: string;
  members: IMember[];
}

function Member({ member }: { member: IMember }) {
  return (
    <div class={styles.member}>
      <img src={member.avatar} alt="" />
      <div class={styles.user}>
        <div class={styles.username}>{member.username}</div>
        <div class={styles.status}>
          <div class={styles.icon} />
          <div class={styles.type}>{member.status}</div>
        </div>
      </div>
    </div>
  );
}
function Members({ members }: { members: IMember[] }) {
  return (
    <div class={styles.members}>
      {members.map((member) => (
        <Member member={member} />
      ))}
    </div>
  );
}

function InviteButton() {
  return <div class={styles.wrapper}>
    <div class={styles.invite}>
    <div class={styles.left_icon}><InvitePersonIcon /></div>
    <div class={styles.title}>Invite People!</div>
    <div class={styles.right_icon}><InviteAddIcon /></div>
    </div>
  </div>;
}

function Category({ category }: { category: ICategory }) {
  return (
    <div class={styles.category}>
      <div class={styles.title}>{category.name}</div>
      <Members members={category.members} />
    </div>
  );
}
export function RSidebar() {
  const [categories, setCategories] = useState<ICategory[]>(
    Array(2).fill({
      name: "Members",
      members: Array(10).fill({
        username: "Mr.Kasper",
        status: "Active now",
        avatar:
          "https://images-ext-1.discordapp.net/external/1b65hsb3rYWm7Gea8SgVC3jTgI7255Fy7UbXRbpVgPk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png",
      }),
    })
  );
  return (
      <div class={styles.container}>
      <InviteButton />
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </div>
  );
}
