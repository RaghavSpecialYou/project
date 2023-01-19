import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <div>Login</div>
        <div>close</div>
      </div>
      <div>
        <div>
          <div>phone number</div>
          <input type="number" />
        </div>
        <div>
          <div>Name</div>
          <input type="text" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Card;
