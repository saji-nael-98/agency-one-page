import React from "react";
import Team from "../Teams/Team";
import Companies from "../compaines/Companies";
import ContactUs from "../ContactUs/ContactUs";
import { Services } from "../Services/Services";
import { Portfolio } from "../Portfolio/Portfolio";

function Main(props) {
  return (
    <main>
      <Services />
      <Portfolio />
      <Team/>
      <Companies />
      <ContactUs />
    </main>
  );
}

export default Main;
