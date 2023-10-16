import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

const Header = ({ children }) => {
  return (
    <>
      <header
        className={
          children ? styles.headerContainer : styles.headerWithoutButtons
        }
      >
        <img src={logo} alt="Logo Kenzie Hub" />
        {children}
      </header>
    </>
  );
};

export default Header;
