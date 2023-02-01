import React, { useState } from "react";
import styles from "./homepagefirst.module.css";

import Header from "./header/Header";
import LoginPopup from "./loginpopup/LoginPopup";
import LoggedinPopup from "./loggedinpopup/LoggedinPopup";
import LoginForm from "./loginform/LoginForm";
import MyOrders from "./myorders/MyOrders";
import OrderHistory from "./orderhistory/OrderHistory";
import MyCart from "./mycart/MyCart";
import WishList from "./wishlist/WishList";

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
      <Header
        setShowMyCart={setShowMyCart}
        setShowWishList={setShowWishList}
        setShowLoggedinPopup={setShowLoggedinPopup}
        setShowLoginPopup={setShowLoginPopup}
        setShowLoginForm={setShowLoginForm}
      />

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
          setShowOrderHistory={setShowOrderHistory}
          setShowMyOrders={setShowMyOrders}
        />
      )}
      {showMyOrders && <MyOrders setShowMyOrders={setShowMyOrders} />}
      {showOrderHistory && (
        <OrderHistory setShowOrderHistory={setShowOrderHistory} />
      )}
      {showMyCart && <MyCart setShowMyCart={setShowMyCart} />}
      {showWishList && <WishList setShowWishList={setShowWishList} />}
    </div>
  );
};

export default HomePage;
