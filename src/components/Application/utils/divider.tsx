import { h } from "preact";

import styles from '../../styles/Application/utils.module.scss'

export function Divider({ title }: { title?: string }) {
  return (
    <div class={styles.divider}>
        <div class={styles.first} />
        {title && (<div class={styles.title}>{title}</div>)}
        <div class={styles.second} />
    </div>
  )
}
