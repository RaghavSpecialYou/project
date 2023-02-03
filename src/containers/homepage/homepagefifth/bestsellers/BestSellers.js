import React from "react";
import styles from "./bestsellers.module.css";

const BestSellers = () => {
  return (
    //  fifth section(best sellers)
    <div className={styles["bestSellers-container"]}>
      {/* fifth section--first part(heading)  */}
      <h1>Best Sellers</h1>
      {/* fifth section--second part(images,text and slider button)  */}
      <div className={styles["bestSellers-image-text-container"]}>
        {/* fifth section--second part--first part(slider button and its container)  */}
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
        {/* fifth section--second part--second part(image and text) */}
        <div className={styles["bestSellers-image-text-container1"]}>
          {/* fifth section--second part--second part--first part(image and inside wishlist icon)  */}
          <div
            className={`${styles["bestSellers-image1"]} ${styles["bestSellers-image"]}`}
          >
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles["svgContainer-heart"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
          {/* fifth section--second part--second part--second part(text and inside text)  */}
          <div
            className={`${styles["bestSellers-text1"]} ${styles["bestSellers-text"]}`}
          >
            <div className={styles["bestSellers-productName"]}>
              happy birthday decorations
            </div>
            <div>
              <span className={styles["bestSellers-productRate"]}>₹399</span>
              <span className={styles["bestSellers-productMrp"]}>₹500</span>
              <span className={styles["bestSellers-productDiscount"]}>
                10% off
              </span>
            </div>
          </div>
        </div>
        {/* fifth section-second part-third part(image and text)  */}
        <div className={styles["bestSellers-image-text-container2"]}>
          {/* fifth section--second part--third part--first part(image and inside wishlist icon)  */}
          <div
            className={`${styles["bestSellers-image2"]} ${styles["bestSellers-image"]}`}
          >
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles["svgContainer-heart"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
          {/* fifth section--second part--third part--second part(text and inside text) */}
          <div
            className={`${styles["bestSellers-text2"]} ${styles["bestSellers-text"]}`}
          >
            <div className={styles["bestSellers-productName"]}>
              happy birthday decorations
            </div>
            <div>
              <span className={styles["bestSellers-productRate"]}>₹399</span>
              <span className={styles["bestSellers-productMrp"]}>₹500</span>
              <span className={styles["bestSellers-productDiscount"]}>
                10% off
              </span>
            </div>
          </div>
        </div>
        <div className={styles["bestSellers-image-text-container3"]}>
          <div
            className={`${styles["bestSellers-image3"]} ${styles["bestSellers-image"]}`}
          >
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles["svgContainer-heart"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
          <div
            className={`${styles["bestSellers-text3"]} ${styles["bestSellers-text"]}`}
          >
            <div className={styles["bestSellers-productName"]}>
              happy birthday decorations
            </div>
            <div>
              <span className={styles["bestSellers-productRate"]}>₹399</span>
              <span className={styles["bestSellers-productMrp"]}>₹500</span>
              <span className={styles["bestSellers-productDiscount"]}>
                10% off
              </span>
            </div>
          </div>
        </div>
        <div className="bestSellers-image-text-container4">
          <div
            className={`${styles["bestSellers-image4"]} ${styles["bestSellers-image"]}`}
          >
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles["svgContainer-heart"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
          <div
            className={`${styles["bestSellers-text4"]} ${styles["bestSellers-text"]}`}
          >
            <div className={styles["bestSellers-productName"]}>
              happy birthday decorations
            </div>
            <div>
              <span className={styles["bestSellers-productRate"]}>₹399</span>
              <span className={styles["bestSellers-productMrp"]}>₹500</span>
              <span className={styles["bestSellers-productDiscount"]}>
                10% off
              </span>
            </div>
          </div>
        </div>
        <div className={styles["bestSellers-slide-right"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={["slide-right-icon"]}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      {/* fifth section--third part(below shapes)  */}
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

export default BestSellers;
