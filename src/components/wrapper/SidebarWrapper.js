import React from "react";
import styles from "./SidebarWrapper.module.css";

const SidebarWrapper = ({ children }) => {
  return <div className={styles.sidebarContainer}>{children}</div>;
};

export default SidebarWrapper;
