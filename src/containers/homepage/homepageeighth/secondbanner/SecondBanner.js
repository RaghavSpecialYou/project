import React from "react";
import styles from "./secondbanner.module.css";

const SecondBanner = () => {
  return (
    //  eight section(second bannner)
    <div className={styles["secondBanner-container"]}>
      {/* eight section-- first part  */}
      <h1>For Christmas Eve</h1>
      {/* eight section-- second part  */}
      <div className={styles["secondBanner-image-container"]}>
        {/* eight section--second part--first part  */}
        <div className={styles["bestSellers-slide-left"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={styles["slide-left-icon"]}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {/* eight section--second part--second part  */}
        <div className={styles.photo2}></div>
        {/* eight section--second part--third part  */}
        <div className={styles["bestSellers-slide-right"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={styles["slide-right-icon"]}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      {/* eight section-- third part  */}
      <div className={styles.shapes}>
        <span className={`${styles.shape1} ${styles.shapeRec}`}></span>
        <span className={`${styles.shape2} ${styles.shapeCir}`}></span>
        <span className={`${styles.shape3} ${styles.shapeCir}`}></span>
        <span className={`${styles.shape4} ${styles.shapeCir}`}></span>
        <span className={`${styles.shape5} ${styles.shapeCir}`}></span>
      </div>
    </div>
  );
};

export default SecondBanner;
