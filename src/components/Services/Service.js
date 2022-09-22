import React from "react";
import GridItem from "../UI/Grid/GridItem";
import styles from './Service.module.css';
export const Service = (props) => {
  return <GridItem className={styles.service}>
      <span className={styles.icon}>{props.icon}</span>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
  </GridItem>;
};
