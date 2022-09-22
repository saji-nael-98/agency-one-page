import React from "react";
import Grid from "../UI/Grid/Grid";
import Section from "../UI/Section/Section";
import { Service } from "./Service";
import styles from "./Services.module.css";
import { FiShoppingCart, FiMonitor, FiLock } from "react-icons/fi";

export const Services = (props) => {
  return (
    <Section
      id={styles["services"]}
      title="SERVICES"
      description={"Lorem ipsum dolor sit amet consectetur."}
    >
      <Grid>
        <Service
          icon={<FiShoppingCart />}
          title={"E-Commerce"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          }
        />
        <Service
          icon={<FiMonitor />}
          title={"Responsive Design"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          }
        />
        <Service
          icon={<FiLock />}
          title={"Web Security"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          }
        />
      </Grid>
    </Section>
  );
};
