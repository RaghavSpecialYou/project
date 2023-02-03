import React from "react";
import styles from "./ourproducts.module.css";

const OurProducts = () => {
  return (
    <>
      {/* products section (third section) */}
      <div className={styles["ourProducts-container"]}>
        <h1>Our Products</h1>
        <div className={styles["ourProducts-image-text-container"]}>
          <div className={styles["ourProducts-image-text-container1"]}>
            <div
              className={`${styles["ourProduct-image1"]} ${styles["ourProduct-image"]}`}
            ></div>
            <div className={styles["ourProducts-text1"]}>
              Decoration backdrops
            </div>
          </div>
          <div className={styles["ourProducts-image-text-container2"]}>
            <div
              className={`${styles["ourProduct-image2"]} ${styles["ourProduct-image"]}`}
            ></div>
            <div className={styles["ourProducts-text2"]}>
              Balloon backgrounds
            </div>
          </div>
          <div className={styles["ourProducts-image-text-container3"]}>
            <div
              className={`${styles["ourProduct-image3"]} ${styles["ourProduct-image"]}`}
            ></div>
            <div className={styles["ourProducts-text3"]}>
              Flowers and leaves
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default OurProducts;
