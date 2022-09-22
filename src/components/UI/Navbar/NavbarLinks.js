import React from "react";
import styles from "./NavbarLinks.module.css";
import ScrollspyNav from "react-scrollspy-nav";

function NavbarLinks(props) {
  return (
    <div
      className={`${styles["navbar__links"]} ${
        !props.open ? styles["navbar__close"] : ""
      }`}
    >
      <ScrollspyNav
        scrollTargetIds={["Services_services__5V0Y2","Portfolio_portfolio__VdM9N", "Teams_team__4HC-0", "ContactUs_contact-us__KOFKz"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#Services_services__5V0Y2">Services</a>
          </li>
          <li>
            <a href="#Portfolio_portfolio__VdM9N">Portfolio</a>
          </li>
          <li>
            <a href="#Teams_team__4HC-0">Team</a>
          </li>
          <li>
            <a href="#ContactUs_contact-us__KOFKz">Contact</a>
          </li>
        </ul>
      </ScrollspyNav>
    </div>
  );
}

export default NavbarLinks;
