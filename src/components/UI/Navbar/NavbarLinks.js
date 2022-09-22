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
        scrollTargetIds={["services", "team", "contact"]}
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
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </ScrollspyNav>
    </div>
  );
}

export default NavbarLinks;
