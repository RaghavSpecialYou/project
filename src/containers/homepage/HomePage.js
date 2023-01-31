import React, { useState } from "react";
import styles from "./homePage.module.css";

import Header from "./header/Header.js";
import LoginPopup from "./loginpopup/LoginPopup";
import LoggedinPopup from "./loggedinpopup/LoggedinPopup";
import LoginForm from "./loginform/LoginForm";

const HomePage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(true);
  const [showLoggedinPopup, setShowLoggedinPopup] = useState(false);

  const handleClick = () => {
    // setShowLoginForm((show) => !show);
    setShowLoginPopup(false);
    setShowLoginForm(true);
  };
  const processData = (receiveData) => {
    console.log(receiveData);
    // const arrayData = [receiveData, ...array];
    // console.log(arrayData);
  };

  return (
    <div className={styles.fragmentContainer}>
      <Header />

      {showLoginPopup && <LoginPopup onClickLogin={handleClick} />}
      {showLoginForm && (
        <LoginForm
          setShowLoginForm={setShowLoginForm}
          setShowLoginPopup={setShowLoginPopup}
          setShowLoggedinPopup={setShowLoggedinPopup}
          onProcessData={processData}
        />
      )}
      {showLoggedinPopup && (
        <LoggedinPopup
          setShowLoggedinPopup={setShowLoggedinPopup}
          setShowLoginPopup={setShowLoginPopup}
        />
      )}
    </div>
  );
};

export default HomePage;
