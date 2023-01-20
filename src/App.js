import React, { useState } from "react";
// import "./App.css";
import Header from "./containers/homepage/a_header/Header.js";
import LoginPopup from "./components/loginpopup/LoginPopup";
import LoggedinPopup from "./components/loggedinpopup/LoggedinPopup";
import styles from "./App.module.css";
import LoginForm from "./components/loginform/LoginForm";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(true);
  const [showLoggedinPopup, setShowLoggedinPopup] = useState(false);
  const handleClick = () => {
    setShowLoginForm((show) => !show);
  };

  return (
    <div className={styles.fragmentContainer}>
      <Header />
      {/* {showLoginPopup &&
        setTimeout(() => {
          <LoginPopup onClickLogin={handleClick} />;
        }, 5000)} */}{" "}
      {/*even the syntax is correct ,its not working! */}
      {showLoginPopup && <LoginPopup onClickLogin={handleClick} />}
      {showLoginForm && (
        <LoginForm
          setShowLoginForm={setShowLoginForm}
          setShowLoginPopup={setShowLoginPopup}
          setShowLoggedinPopup={setShowLoggedinPopup}
        />
      )}
      {showLoggedinPopup && (
        <LoggedinPopup setShowLoggedinPopup={setShowLoggedinPopup} />
      )}
    </div>
  );
};

export default App;
