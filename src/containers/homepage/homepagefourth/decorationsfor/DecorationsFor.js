import React from "react";
import styles from "./decorationsfor.module.css";

const DecorationsFor = () => {
  return (
    //  Decorations For(fourth section)
    <div className={styles["decorationsFor-container"]}>
      <h1>Decorations For</h1>
      <div className={styles["decorationsFor-container-images"]}>
        <div className={`${styles["decorationsFor-container-image"]} ${styles["decorationsFor-container-image1"]}`}></div>
        <div className={`${styles["decorationsFor-container-image"]} ${styles["decorationsFor-container-image2"]}`}></div>
        <div className={`${styles["decorationsFor-container-image"]} ${styles["decorationsFor-container-image3"]}`}></div>
        <div className={`${styles["decorationsFor-container-image"]} ${styles["decorationsFor-container-image4"]}`}></div>
        <div className={`${styles["decorationsFor-container-image"]} ${styles["decorationsFor-container-image5"]}`}></div>
        <div className={`${styles["decorationsFor-container-image"]} ${styles["decorationsFor-container-image6"]}`}></div>
        <button>View All</button>
      </div>
    </div>
  );
};

export default DecorationsFor;
