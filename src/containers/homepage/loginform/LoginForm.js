import React, { useState } from "react";
import styles from "./loginform.module.css";
import Button from "../../../components/Button/Button";

const LoginForm = ({
  setShowLoginForm,
  setShowLoginPopup,
  setShowLoggedinPopup,
  onProcessData,
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

    setName("");
    setNumber("");
    setShowLoginForm(false);
    setShowLoginPopup(false);
    setShowLoggedinPopup(true);
    onProcessData(data);
  };
  return (
    <div className={styles.card}>
      <div className={styles["loginform-header"]}>
        <h2>Login</h2>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowLoginForm(false);
            setShowLoginPopup(true);
          }}
        >
          close
        </div>
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

        <Button isActive={true}>Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
