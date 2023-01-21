import styles from "./button.module.css";

const Button=({isActive,children, onClick})=>{
const chooseStyle =   isActive ? `${styles["loginform-input"]} ${styles["loginform-submit"]}` : styles.loginButton ;
return(
    <button className={chooseStyle} onClick={onClick}>
        {children}
    </button>
)
};

export default Button;

// { isActive ? className={styles.loginButton} : className={`${styles["loginform-input"]} ${styles["loginform-submit"]}`}}