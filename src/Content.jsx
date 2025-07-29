import React from "react";
import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.icons}></div>

      <div className={styles.store}>
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p className={styles.text}>
          YOUR FEET DESERVE THE BEST ANS WERE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className={styles.button}>
          <button className={styles.button1}>Shop Now</button>
          <button className={styles.category}>Category</button>
        </div>

        <p className={styles.text_1}>Also Available on</p>
        <div className={styles.app}>
          <div className={styles.apps}></div>
          <div className={styles.ap}></div>
        </div>
      </div>
    </div>
  );
}
