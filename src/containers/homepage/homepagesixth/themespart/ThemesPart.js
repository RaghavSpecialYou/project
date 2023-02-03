import React from "react";
import styles from "./themespart.module.css";

const ThemesPart = () => {
  return (
    //  sixth section(themes part)
    <div className={styles["themes-container"]}>
      <h1>Decorations For Kids</h1>
      <div className={styles["themes-images"]}>
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

        <div
          className={`${styles["themes-image1-container"]} ${styles["themes-image-container"]}`}
        >
          <div
            className={`${styles["themes-image1"]} ${styles["themes-image"]}`}
          ></div>
        </div>

        <div
          className={`${styles["themes-image2-container"]} ${styles["themes-image-container"]}`}
        >
          <div
            className={`${styles["themes-image2"]} ${styles["themes-image"]}`}
          ></div>
        </div>

        <div
          className={`${styles["themes-image3-container"]} ${styles["themes-image-container"]}`}
        >
          <div
            className={`${styles["themes-image3"]} ${styles["themes-image"]}`}
          ></div>
        </div>

        <div
          className={`${styles["themes-image4-container"]} ${styles["themes-image-container"]}`}
        >
          <div
            className={`${styles["themes-image4"]} ${styles["themes-image"]}`}
          ></div>
        </div>

        <div
          className={`${styles["themes-image5-container"]} ${styles["themes-image-container"]}`}
        >
          <div
            className={`${styles["themes-image5"]} ${styles["themes-image"]}`}
          ></div>
        </div>

        <div
          className={`${styles["themes-image6-container"]} ${styles["themes-image-container"]}`}
        >
          <div
            className={`${styles["themes-image6"]} ${styles["themes-image"]}`}
          ></div>
        </div>

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
    </div>
  );
};

export default ThemesPart;
