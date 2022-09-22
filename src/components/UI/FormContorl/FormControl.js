import React from "react";
import styles from "./FormControl.module.css";
const FormControl = (props) => {
  const className = `${styles["form-control"]} ${
    styles[props.className] || " "
  }}`;

  return <div className={className}>{props.children}</div>;
};
export default FormControl;
