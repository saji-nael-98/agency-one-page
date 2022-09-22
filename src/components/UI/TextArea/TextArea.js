import React from "react";
import FormControl from "../FormContorl/FormControl";
import styles from "./Textarea.module.css";
const TextArea = (props) => {
  return (
    <FormControl>
      <label className={styles["label"]}>{props.label}</label>
      <textarea
        className={styles["textarea"]}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      ></textarea>
      {props.error && <div className={styles["error"]}>{props.error}</div>}
    </FormControl>
  );
};
export default TextArea;
