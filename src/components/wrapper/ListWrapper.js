import React from "react";
import styles from "./listwrapper.module.css";

const ListWrapper = ({ children }) => {
  return <div className={styles.listContainer}>{children}</div>;
};

export default ListWrapper;
