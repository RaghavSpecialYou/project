import React, { useState } from "react";
import styles from "./banner.module.css";
import bannerList from "./data";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);
  function handleClick() {
    setIndex(index + 1);
  }
  let banner = bannerList[index];
  return (
    <>
      {/* Banner section (second section) */}
      <div className={styles.bannerParent}>
        {/* <div className={styles.photo}></div> */}
        <img src={banner.image} alt={banner.alt} className={styles.photo} />
        <div className={styles.shapes}>
          <span
            className={`${styles.shape1} ${styles.shapeRec}`}
            // style={{ background: banner.color }}
          ></span>
          <span
            className={`${styles.shape2} ${styles.shapeCir}`}
            // style={{ background: banner.color }}
          ></span>
          <span
            className={`${styles.shape3} ${styles.shapeCir}`}
            // style={{ background: banner.color }}
          ></span>
          <span
            className={`${styles.shape4} ${styles.shapeCir}`}
            // style={{ background: banner.color }}
          ></span>
          <span
            className={`${styles.shape5} ${styles.shapeCir}`}
            // style={{ background: banner.color }}
          ></span>
        </div>
        <button onClick={handleClick}>next</button>
      </div>
    </>
  );
};

export default Banner;
