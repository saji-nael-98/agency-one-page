import Section from "../UI/Section/Section";
import Projects from "./Projects";
import styles from "./Portfolio.module.css";
export const Portfolio = (props) => {
  return (
    <Section
      id={styles.portfolio}
      title="Portfolio"
      description="Lorem ipsum dolor sit amet consectetur."
    >
      <Projects />
    </Section>
  );
};
