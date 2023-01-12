import React from "react";
import styles from "./Text.module.css";

const Text = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Learn to code by watching others</div>
      <div className={styles.body}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </div>
    </div>
  );
};

export default Text;
