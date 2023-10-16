import styles from "./styles.module.scss";

const HeaderForm = ({ title, text }) => {
  return (
    <div className={styles.headerContainer}>
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default HeaderForm;
