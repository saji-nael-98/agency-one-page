import React from "react";
import Section from "../UI/Section/Section";
import styles from "./Teams.module.css";
import TeamMember from "./TeamMember";
import img1 from "../../assests/images/1.jpg";
import img2 from "../../assests/images/2.jpg";
import img3 from "../../assests/images/3.jpg";
import Grid from "../UI/Grid/Grid";

function Teams(props) {
  return (
    <Section
      id={"team"}
      title={"our amazing team"}
      description={"Lorem ipsum dolor sit amet consectetur."}
      extraDetails={
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde."
      }
    >
      <Grid>
        <TeamMember
          name={"Parveen Anand"}
          role={"lead designer"}
          image={img1}
        />
        <TeamMember
          name={"Diana Petersen"}
          role={"lead Marketer"}
          image={img2}
        />
        <TeamMember
          name={"Parveen Developer"}
          role={"lead designer"}
          image={img3}
        />
      </Grid>
    </Section>
  );
}

export default Teams;
