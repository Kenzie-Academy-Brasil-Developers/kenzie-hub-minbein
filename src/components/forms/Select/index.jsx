import { forwardRef } from "react";
import styles from "./styles.module.scss";

const Select = forwardRef(({ label, error, name, options, register, defaultValue }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <select ref={ref} {...register(name)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});

export default Select;
