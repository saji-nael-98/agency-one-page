import React from "react";
import styles from "./Input.module.css";
import FormControl from "../FormContorl/FormControl";

const Input = (props) => {
  return (
    <FormControl>
      <label className={styles["label"]}>{props.label}</label>
      <input
        value={props.value || ""}
        type={props.type || "text"}
        className={styles["input"]}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
      {props.error && <div className={styles["error"]}>{props.error}</div>}
    </FormControl>
  );
};
export default Input;
