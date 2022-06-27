import { h } from 'preact';
import { ChatInput } from './ChatInput';
import styles from "../../../../styles/App/ChatArea.module.css";
import Message from "../Messages/Message";

export const ChatBox = () => {
    return (
        <div className={styles.chatBox}>
            <div className={styles.messagesContainer}>
                <Message icon={""} name={"Snowy"} message={"Test"} timestamp={"Today at 4:43 PM"} type={"text"}/>
                <Message icon={""} name={"Snowy"} message={"Test 1"} timestamp={"Today at 4:43 PM"} type={"text"}/>
                <Message icon={""} name={"Snowy"} message={"Test 2"} timestamp={"Today at 4:43 PM"} type={"text"}/>
             </div>
            <ChatInput />
        </div>
    );
};