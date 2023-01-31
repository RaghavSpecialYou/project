import React, { useState } from "react";
import styles from "./homePage.module.css";

import Header from "./header/Header.js";
import LoginPopup from "./loginpopup/LoginPopup";
import LoggedinPopup from "./loggedinpopup/LoggedinPopup";
import LoginForm from "./loginform/LoginForm";
import MyOrders from "./myOrders/MyOrders";
import OrderHistory from "./orderHistory/OrderHistory";
import MyCart from "./myCart/MyCart";
import WishList from "./wishList/WishList";

const HomePage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(true);
  const [showLoggedinPopup, setShowLoggedinPopup] = useState(false);
  const [showMyOrders, setShowMyOrders] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [showMyCart, setShowMyCart] = useState(false);
  const [showWishList, setShowWishList] = useState(false);

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
      <Header setShowMyCart={setShowMyCart} setShowWishlist={setShowWishList} />

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
      {showMyOrders && <MyOrders />}
      {showOrderHistory && <OrderHistory />}
      {showMyCart && <MyCart />}
      {showWishList && <WishList />}
    </div>
  );
};

export default HomePage;
