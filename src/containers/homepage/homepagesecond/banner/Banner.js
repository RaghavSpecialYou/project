import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <>
      {/* Banner section (second section) */}
      <div className={styles.bannerParent}>
        <div className={styles.photo}></div>
        <div className={styles.shapes}>
          <span className={`${styles.shape1} ${styles.shapeRec}`}></span>
          <span className={`${styles.shape2} ${styles.shapeCir}`}></span>
          <span className={`${styles.shape3} ${styles.shapeCir}`}></span>
          <span className={`${styles.shape4} ${styles.shapeCir}`}></span>
          <span className={`${styles.shape5} ${styles.shapeCir}`}></span>
        </div>
      </div>
    </>
  );
};

export default Banner;
