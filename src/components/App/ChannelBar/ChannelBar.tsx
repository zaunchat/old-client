import { h } from 'preact';
import styles from '../../../styles/App/ChannelBar.module.css'
export const ChannelBar = ({ name }: {name: string}) => {
    return (
        <div className={styles.channelBar}>
            <div className={styles.channelBarContainer}>
                <div className={styles.hash}>#</div>
                <div className={styles.divider} />
                <div className={styles.name}>{name}</div>
            </div>
        </div>
    );
};