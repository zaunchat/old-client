import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';
import {
  ServersArrowIcon,
  ServersSearchIcon,
} from '../../assets/Application/Servers';
import styles from '../styles/Sidebar/Servers.module.scss';
import {
  CurrentServer,
  Servers,
  SearchInput,
  UserDetails,
} from './components/Servers';

export function ServersSidebar() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={`${styles.container} ${collapse ? styles.collapsed : ``}`}>
      <div className={styles.wrapper}>
        <button
          onClick={() => setCollapse((c) => !c)}
          className={styles.collapse}
        >
          <ServersArrowIcon />
        </button>
        <CurrentServer />
        <SearchInput
          searchInputRef={searchInputRef}
          setCollapse={setCollapse}
          collapse={collapse}
        />
        <Servers />
        <UserDetails />
      </div>
    </div>
  );
}
