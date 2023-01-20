import Wrapper from "../wrapper/Wrapper";
import styles from "./loggedinpopup.module.css";

const LoggedinPopup = ({ setShowLoggedinPopup }) => {
  return (
    <Wrapper>
      <div>Good Morning,Raghav Khandelwal</div>
      <div>My Orders</div>
      <div>Order History</div>
      <div
        className={styles.logout}
        onClick={() => setShowLoggedinPopup(false)}
      >
        Log Out
      </div>
    </Wrapper>
  );
};
export default LoggedinPopup;
