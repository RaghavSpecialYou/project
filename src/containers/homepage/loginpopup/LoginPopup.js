import PopupWrapper from "../../../components/wrapper/PopupWrapper";
import styles from "./loginpopup.module.css";
import Button from "../../../components/Button/Button";

const LoginPopup = ({ onClickLogin }) => {
  return (
    <PopupWrapper>
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

      <Button isActive={false} onClick={onClickLogin}>
        Login
      </Button>
    </PopupWrapper>
  );
};

export default LoginPopup;
