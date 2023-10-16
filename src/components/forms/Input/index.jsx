import { forwardRef } from "react";
import styles from "./styles.module.scss";

function Input({ error, label, id, ...rest }, ref) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
}

export default forwardRef(Input);
