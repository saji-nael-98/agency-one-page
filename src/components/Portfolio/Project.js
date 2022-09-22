import React, { ReactDOM, useState } from "react";
import GridItem from "../UI/Grid/GridItem";
import ProjectModel from "../UI/PorjectModel/ProjectModal";
import styles from "./Project.module.css";
const Project = (props) => {
  const [show, setShow] = useState(null);
  const showHandler = () => {
    setShow(false);
  };
  return (
    <React.Fragment>
      {show && <ProjectModel onConfirm={showHandler} order={props.order} client={props.title} category={props.category}/>}

      <GridItem className={styles["project"]}>
        <div
          className={styles["project__img"]}
          onClick={() => {
            setShow(true);
          }}
        >
          <div className={styles["project__img-hover"]}>
            <span>+</span>
          </div>
          <img
            src={require(`../../assests/images/projects/${props.order}.jpg`)}
            alt="project"
          />
        </div>
        <div className={styles["project__details"]}>
          <h4>{props.title}</h4>
          <p>{props.category}</p>
        </div>
      </GridItem>
    </React.Fragment>
  );
};
export default Project;
