import React from "react";
import "./orderhistory.css";
import SidebarWrapper from "../../../../components/wrapper/SidebarWrapper";

const OrderHistory = ({ setShowOrderHistory }) => {
  return (
    <SidebarWrapper>
      {/* this is first header part */}
      <div className="orderHistory-header">
        <div className="orderHistory-header-text">Order History</div>
        <div className="orderHistory-header-close-button-container">
          <div
            className="orderHistory-header-close-button"
            onClick={() => {
              setShowOrderHistory(false);
            }}
            style={{ cursor: "pointer" }}
          >
            +
          </div>
        </div>
      </div>

      {/* this is second section(Time Estimate of Product) */}
      <div className="orderHistory-couponApplied">
        <div className="orderHistory-couponApplied-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="orderHistory-couponApplied-checkBadge"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </div>
        <div className="orderHistory-couponApplied-text">
          Will be delivered on 26Dec,2022
        </div>
      </div>

      {/* this is third section (items are present) */}
      <div className="orderHistory-items">
        {/* first part  */}
        <div className="orderHistory-items-photo"></div>
        {/* second part  */}
        <div className="orderHistory-items-description">
          {/* second part--first part  */}
          <div className="orderHistory-items-description-textRate-container">
            <div className="orderHistory-items-description-text">
              Happy birthday decorations for girls and boys
            </div>
            <div className="orderHistory-items-description-rate">₹399</div>
          </div>
          {/* second part--second part  */}
          <div className="orderHistory-items-description-incrementDecrement">
            {/* nothing is present (increment,decrement and plus sign removed) */}
          </div>
        </div>
        {/* third part  */}
        {/* nothing is present (close button removed) */}
      </div>
    </SidebarWrapper>
  );
};

export default OrderHistory;
