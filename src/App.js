import React from "react";
// import "./App.css";
import Header, { LoginPopup } from "./containers/homepage/a_header/index.js";
import styles from "./App.module.css";
import Card from "./components/card/Card";

const App = () => {
  return (
    <div className={styles.fragmentContainer}>
      <Header />
      <LoginPopup />
      <Card />
    </div>
  );
};

export default App;
