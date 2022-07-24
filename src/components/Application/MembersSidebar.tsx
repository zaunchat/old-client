import { h } from "preact";
import { useState } from "preact/hooks";
import styles from "../styles/Application/MembersSidebar.module.scss";

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
function Category({ category }: { category: ICategory }) {
  return (
    <div class={styles.category}>
      <div class={styles.title}>{category.name}</div>
      <Members members={category.members} />
    </div>
  );
}
export function MembersSidebar() {
  const [categories, setCategories] = useState<ICategory[]>(
    Array(2).fill({
      name: "Members",
      members: Array(10).fill({
        username: "Mr.Kasper",
        status: "Active now",
        avatar: "https://images-ext-2.discordapp.net/external/IHYqSv1JWvKfRoo6etajisbHqZXS2ortFa70RqNZT04/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png",
      }),
    })
  );
  return (
    <div class={styles.container}>
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
}
