import React from "react";
// import { useState } from "react";
import PopupWrapper from "../../../components/wrapper/PopupWrapper";
import styles from "./loggedinpopup.module.css";

const LoggedinPopup = ({ setShowLoggedinPopup, setShowLoginPopup }) => {
  // const [showMyOrders, setShowMyOrders] = useState(false);
  // const [showOrderHistory, setShowOrderHistory] = useState(false);
  return (
    <>
      <PopupWrapper>
        <div>Good Morning,Raghav Khandelwal</div>
        <div
          className={styles.myOrders}
          onClick={() => {
            // setShowMyOrders(true);
            // setShowLoggedinPopup(false);
          }}
        >
          My Orders
        </div>
        <div
          className={styles.orderHistory}
          onClick={() => {
            // setShowOrderHistory(true);
            // setShowLoggedinPopup(false);
          }}
        >
          Order History
        </div>
        <div
          className={styles.logout}
          onClick={() => {
            setShowLoggedinPopup(false);
            setShowLoginPopup(true);
          }}
        >
          Log Out
        </div>
      </PopupWrapper>
      {/* {showMyOrders && <MyOrders />} */}
      {/* {showOrderHistory && <OrderHistory />} */}
    </>
  );
};

export default LoggedinPopup;

// const MyOrders = () => {
//   return <div>My Orders </div>;
// };

// const OrderHistory = () => {
//   return <div>Order history</div>;
// };
