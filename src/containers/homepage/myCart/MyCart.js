import React from "react";
// import styles from "./myCart.module.css";
import "./myCart.css";
import SidebarWrapper from "../../../components/wrapper/SidebarWrapper";

const MyCart = () => {
  return (
    <SidebarWrapper>
      {/* first section(header part)  */}
      <div className="myCart-header">
        <div className="myCart-header-text">My Cart (1)</div>
        <div className="myCart-header-close-button-container">
          <div className="myCart-header-close-button">+</div>
        </div>
      </div>

      {/* second section(my cart items already added)  */}
      <div className="myCart-items">
        {/* first part  */}
        <div className="myCart-items-photo"></div>
        {/* second part  */}
        <div className="myCart-items-description">
          {/* second part--first part  */}
          <div className="myCart-items-description-textRate-container">
            <div className="myCart-items-description-text">
              Happy birthday decorations for girls and boys
            </div>
            <div className="myCart-items-description-rate">₹399</div>
          </div>
          {/* second part--second part  */}
          <div className="myCart-items-description-incrementDecrement">
            <div className="myCart-items-description-decrement-container">
              <div className="myCart-items-description-decrement">-</div>
            </div>
            <div className="myCart-items-description-quantity-container">
              <div className="myCart-items-description-quantity">1</div>
            </div>
            <div className="myCart-items-description-increment-container">
              <div className="myCart-items-description-increment">+</div>
            </div>
          </div>
        </div>
        {/* third part  */}
        <div className="myCart-items-close-button-container">
          <div className="myCart-items-close-button">+</div>
        </div>
      </div>

      {/* third section(applying coupon code)  */}
      <div className="myCart-couponCode">
        <div className="myCart-couponCode-upper">Apply Coupon Code</div>
        <div className="myCart-couponCode-middle">
          <input type="text" placeholder="Enter coupon code" />
          <button>Apply</button>
        </div>
        <div className="myCart-couponCode-lower">Coupon applied!</div>
      </div>

      {/* fourth section(product-addons)  */}
      <div className="myCart-productAddons">
        {/* first part  */}
        <h1>Product Add-ons</h1>
        {/* second part  */}
        <div className="myCart-productAddons-remaining">
          {/* second part--first part  */}
          <div className="myCart-productAddons-product myCart-productAddons-product1">
            {/* second part--first part--first part  */}
            <div className="myCart-productAddons-imageText-container">
              <div className="myCart-productAddons-image myCart-productAddons-image1"></div>
              <div className="myCart-productAddons-text">Balloon Pump</div>
              <div className="myCart-productAddons-rate">rs 499</div>
            </div>
            {/* second part--first part--second part  */}
            <div className="myCart-productAddons-button-container">
              <button>Add</button>
            </div>
          </div>
          <div className="myCart-productAddons-product myCart-productAddons-product2">
            {/* second part--first part--first part  */}
            <div className="myCart-productAddons-imageText-container">
              <div className="myCart-productAddons-image myCart-productAddons-image2"></div>
              <div className="myCart-productAddons-text">Balloon Pump</div>
              <div className="myCart-productAddons-rate">rs 499</div>
            </div>
            {/* second part--first part--second part  */}
            <div className="myCart-productAddons-button-container">
              <button>Add</button>
            </div>
          </div>
          <div className="myCart-productAddons-product myCart-productAddons-product3">
            {/* second part--first part--first part  */}
            <div className="myCart-productAddons-imageText-container">
              <div className="myCart-productAddons-image myCart-productAddons-image3"></div>
              <div className="myCart-productAddons-text">Balloon Pump</div>
              <div className="myCart-productAddons-rate">rs 499</div>
            </div>
            {/* second part--first part--second part  */}
            <div className="myCart-productAddons-button-container">
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>

      {/* fifth section(blank space)  */}
      <div className="myCart-blankSpace">&nbsp;</div>

      {/* sixth section(coupon applied)  */}

      <div className="myCart-couponApplied">
        <div className="myCart-couponApplied-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="myCart-couponApplied-checkBadge"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </div>
        <div className="myCart-couponApplied-text">
          Coupon applied, You saved ₹200
        </div>
      </div>

      {/* seventh section(proceed to checkout)   */}
      <div className="proceedCheckout">
        <div className="proceedCheckout-left">
          <div>Total Value</div>
          <div className="proceedCheckout-bold">
            ₹199 <span>₹399</span>
          </div>
        </div>
        <button className="proceedCheckout-right">Proceed to Checkout</button>
      </div>
    </SidebarWrapper>
  );
};

export default MyCart;
