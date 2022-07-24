import { h } from "preact";
import styles from "../styles/Application/MembersSidebar.module.scss";

function Member() {
  return (
    <div class={styles.member}>
      <img
        src="https://images-ext-2.discordapp.net/external/IHYqSv1JWvKfRoo6etajisbHqZXS2ortFa70RqNZT04/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png"
        alt=""
      />
      <div class={styles.user}>
        <div class={styles.username}>Test</div>
        <div class={styles.status}>
          <div class={styles.icon} />
          <div class={styles.type}>Active now</div>
        </div>
      </div>
    </div>
  );
}
function Members() {
  return (
    <div class={styles.members}>
      <Member />
      <Member />
      <Member />
    </div>
  );
}
function Category() {
  return (
    <div class={styles.category}>
      <div class={styles.title}>Members</div>
      <Members />
    </div>
  );
}
export function MembersSidebar() {
  return (
    <div class={styles.container}>
      <Category />
      <Category />
    </div>
  );
}
