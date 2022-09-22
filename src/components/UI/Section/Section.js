import React from "react";
import styles from "./Section.module.css";
function Section(props) {
  return (
    <section
      id={props.id}
      className={`${styles["page-section"]} ${props.className}`}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.children}
      <div className={styles["page-section__extra-details"]}>
        <p>{props.extraDetails}</p>
      </div>
    </section>
  );
}

export default Section;
