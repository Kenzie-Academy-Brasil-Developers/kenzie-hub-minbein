import styles from "./styles.module.scss";

const Button = ({ style, text, ...rest }) => {
  const buttonStyles =
    style === "pink"
      ? styles.pink
      : style === "defaultpink"
      ? styles.defaultpink
      : style === "biggrey"
      ? styles.biggrey
      : style === "icon"
      ? styles.icon
      : styles.default;

  return (
    <>
      <button className={buttonStyles} {...rest}>
        {text}
      </button>
    </>
  );
};

export default Button;
