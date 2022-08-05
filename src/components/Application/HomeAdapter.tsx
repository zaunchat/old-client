import {h} from 'preact';
import styles from "../styles/Application.module.scss";
import { SdButton } from '../utils'

function TestIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" rx="7.43034" fill="#15151C"/>
  <rect x="0.371517" y="0.371517" width="23.257" height="23.257" rx="7.05882" stroke="black" stroke-opacity="0.3" stroke-width="0.743034"/>
  </svg>
  )
}

function FriendsLis({ title, friends }:{ title: string, friends: any }) {
  return (
    <div class={styles.friends}>
      <div class={styles.title}>
        <h2>{title}</h2>
        <div class={styles.line}></div>
      </div>
      { friends.map((friend:any) => (
        <div class={styles.friend}>
          <div class={styles.leftSide}>
            <img src={friend.avatar} />
            <h5>@{friend.username}</h5>
          </div>
          <div class={styles.rightSide}>
            <SdButton icon={TestIcon} />
            <SdButton icon={TestIcon}/>
          </div>
        </div>
      )) }
    </div>
  )
}

export default function HomeAdapter() {
    let friends = [
      {
        username: 'just a test',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      },
      {
        username: 'just a test',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      },
      {
        username: 'just a test',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      }
    ]
    return (
        <div class={styles.friends_container}>
          <FriendsLis title="CLOSE FRIENDS" friends={friends} />
        </div>
    )
}