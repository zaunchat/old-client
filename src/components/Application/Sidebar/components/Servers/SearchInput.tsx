import { h } from 'preact';
import { ServersSearchIcon } from '../../../../assets/Application/Servers';
import styles from '../../../styles/Sidebar/Servers.module.scss';
export function SearchInput({ searchInputRef, setCollapse, collapse }: any) {
  return (
    <div className={styles.input_wrapper}>
      <input ref={searchInputRef} placeholder="SERVERS SEARCH..." type="text" />
      <div
        onClick={() => {
          if (collapse) {
            setCollapse(false);
            searchInputRef.current?.focus();
          } else {
            searchInputRef.current?.focus();
          }
        }}
      >
        <ServersSearchIcon />
      </div>
    </div>
  );
}
