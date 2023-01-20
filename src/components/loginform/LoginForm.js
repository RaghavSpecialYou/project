import React, { useState } from "react";
import styles from "./loginform.module.css";

const LoginForm = ({
  setShowLoginForm,
  setShowLoginPopup,
  setShowLoggedinPopup,
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = [e.target[0].value, e.target[1].value];
    console.log(loginData);
    const data = loginData[1]
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase();
    console.log(data);
    // const [stateData, setStateData] = useState(data); // this cannot be called inside this function
    setName("");
    setNumber("");
    setShowLoginForm(false);
    setShowLoginPopup(false);
    setShowLoggedinPopup(true);
    // const createUserName = () => {
    //   loginData[1].split(' ').map((name) => name[0]);
    // };
  };
  return (
    <div className={styles.card}>
      <div className={styles["loginform-header"]}>
        <h2>Login</h2>
        <div>close</div>
      </div>
      <form className={styles["loginform-main"]} onSubmit={handleSubmit}>
        <div className={styles["loginform-input-container"]}>
          <div>phone number</div>
          <input
            type="number"
            className={styles["loginform-input"]}
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <div className={styles["loginform-input-container"]}>
          <div>Name</div>
          <input
            type="text"
            className={styles["loginform-input"]}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button
          className={`${styles["loginform-input"]} ${styles["loginform-submit"]}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
