import React from "react";
import Grid from "../UI/Grid/Grid";
import Project from "./Project";
const Projects = () => {
  return (
    <Grid>
      <Project order={1} title={"Threads"}  category={"Illustration"} />
      <Project order={2} title={"Explore"}  category={"Graphic Design"} />
      <Project order={3} title={"Finish"}  category={"Identity"} />
      <Project order={4} title={"Lines"}  category={"Branding"} />
      <Project order={5} title={"Southwest"}  category={"Website Design"} />
      <Project order={6} title={"Window"}  category={"Photography"} />
    </Grid>
  );
};
export default Projects;
