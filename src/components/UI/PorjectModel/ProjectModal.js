import React from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import styles from "./ProjectModal.module.css";

const Backdrop = (props) => (
  <div className={styles.backdrop} onClick={props.onConfirm} />
);
const Modal = (props) => (
  <div className={styles.modal}>
    <Button onClick={props.onConfirm} >close</Button>
    <header className={styles.header}>
    
      <h1>
        <strong>PROJECT NAME</strong>
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      
    </header>
    <div className={styles.content}>
      <img
        src={require(`../../../assests/images/projects/1.jpg`)}
        alt="project"
      />
      <p>
        Use this area to describe your project. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
        minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
        beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
      
      </p>
      <p>
        <strong>Client: </strong>
        {props.client}
      </p>
      <p>
        <strong>Category: </strong>
        {props.category}
      </p>
    </div>
  </div>
);
const ProjectModel = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Modal client={props.client} category={props.category} onConfirm={props.onConfirm} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default ProjectModel;
