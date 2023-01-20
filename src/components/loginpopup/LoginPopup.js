import Wrapper from "../wrapper/Wrapper";
import styles from "./loginpopup.module.css";

const LoginPopup = ({ onClickLogin }) => {
  return (
    // <div className={styles["popup-container"]}>
    <Wrapper>
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
      <button className={styles.loginButton} onClick={onClickLogin}>
        Login
      </button>
    </Wrapper>
    // </div>
  );
};

export default LoginPopup;
