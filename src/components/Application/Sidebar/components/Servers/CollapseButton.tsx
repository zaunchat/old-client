import { h } from 'preact';
import { ServersArrowIcon } from '@/components/assets/Application/Servers';
import styles from '@/components/Application/styles/Sidebar/Servers.module.scss';
export function CollapseButton({ setCollapse }: { setCollapse: any }) {
  return (
    <button
      onClick={() => setCollapse((c: boolean) => !c)}
      className={styles.collapse}
    >
      <ServersArrowIcon />
    </button>
  );
}
