import { h } from "preact";
import { useState } from "preact/hooks";
import { Tooltip } from "../../utils";
import styles from "../../../styles/App/ServersSidebar.module.css";
export const Search = () => {
  const [referenceElement, setReferenceElement] = useState();
  const [mounted, setMounted] = useState(false);
  return (
    <div>
      <Tooltip
        referenceElement={referenceElement! as any}
        mounted={mounted}
        position="right"
        placement="center"
        arrowSize={5}
        withArrow
        transition="slide-left"
        transitionDuration={400}
      >
        <span style={{ fontWeight: "bold" }}>Explore ItChat</span>
      </Tooltip>
      <div
        ref={setReferenceElement! as any}
        onMouseEnter={() => setMounted(true)}
        onMouseLeave={() => setMounted(false)}
        className={styles.icon}
      >
        <div className={styles.searchIcon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282ZM14.2939 12.5786L14.1667 13.75L13.0703 12.2699C14.191 10.9663 14.8656 9.27387 14.8656 7.43282C14.8656 3.32762 11.538 0 7.43282 0C3.32762 0 0 3.32762 0 7.43282C0 11.538 3.32762 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L13.75 14.1667L12.5786 14.2939L18.2962 20L20 18.2962L14.5861 12.8714L14.2939 12.5786Z"
              fill="#FC4754"
              fill-opacity="0.51"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
