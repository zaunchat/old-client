import { h } from "preact";
import { useState } from "preact/hooks";
import { Tooltip } from "../../utils";
import styles from "../../../styles/App/ServersSidebar.module.css";

export const Add = () => {
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
        <span style={{ fontWeight: "bold" }}>Add a Server</span>
      </Tooltip>
      <div
        ref={setReferenceElement! as any}
        onMouseEnter={() => setMounted(true)}
        onMouseLeave={() => setMounted(false)}
        className={styles.icon}
      >
        <div className={styles.addIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="#FC4754"
              stroke-opacity="0.51"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 12H12H19"
              stroke="#FC4754"
              stroke-opacity="0.51"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
