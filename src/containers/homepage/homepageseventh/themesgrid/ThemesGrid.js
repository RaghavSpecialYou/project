import React from "react";
import styles from "./themesgrid.module.css";

const ThemesGrid = () => {
  return (
    //  seventh container(themes grid)
    <div className={styles["themesGrid-container"]}>
      <div className={styles["themesGrid-container-images"]}>
        <div
          className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image1"]}`}
        ></div>
        <div
          className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image2"]}`}
        ></div>
        <div
          className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image3"]}`}
        ></div>
        <div
          className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image4"]}`}
        ></div>
        <div
          className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image5"]}`}
        ></div>
        <div
          className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image6"]}`}
        ></div>
        <button>View All</button>
      </div>
    </div>
  );
};

export default ThemesGrid;
