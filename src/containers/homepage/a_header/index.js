import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* header navbar section(first section-first part)   */}
      <div className={styles.navbar}>
        <span className={styles["company-logo"]}>Special You</span>
        <div className={styles.searchbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`${styles.searchIcon} ${styles["navbar-icons"]}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span>Search any items</span>
        </div>
        <div className={styles["navbar-shape-container"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`${styles.heartIcon} ${styles["navbar-icons"]}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`${styles.cartIcon} ${styles["navbar-icons"]}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`${styles.userIcon} ${styles["navbar-icons"]}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>

      {/* header categories section(first section-second part)   */}
      <div className={styles.categories}>
        <span className={styles.span}>Birthday Themes</span>
        <span className={styles.span}>Wedding Themes</span>
        <span className={styles.span}>Occasion Themes</span>
        <span className={styles.span}>Personalised Balloons</span>
      </div>
    </header>
  );
};

export const LoginPopup = () => {
  return (
    <div className={styles["popup-container"]}>
      <div className={styles["user-photo-container"]}>
        <img
          src="images/userImage.jpg"
          alt="userIcon"
          className={styles["user-photo"]}
        />
      </div>
      <div className={styles.loginText}>
        Login to see your order history details
      </div>
      <button className={styles.loginButton}>Login</button>
    </div>
  );
};

export default Header;
