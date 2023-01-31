import React from "react";
import styles from "./popupWrapper.module.css";

const PopupWrapper = ({ children }) => {
  return <div className={styles["popup-container"]}>{children}</div>;
};

export default PopupWrapper;
