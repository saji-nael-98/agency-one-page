import React from "react";
import styles from "./NavbarBrand.module.css";
function NavbarBrand(props) {
  const closeNavbarHandler = () => {
    props.setOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className={styles["navbar__brand"]}>
      <div className={styles["navbar__logo"]} >
        <span>Logo</span>
      </div>
      <div className={styles["navbar__close"]}>
        <button onClick={closeNavbarHandler}>
          <div className={styles["cake"]}></div>
          <div className={styles["cake"]}></div>
          <div className={styles["cake"]}></div>
        </button>
      </div>
    </div>
  );
}

export default NavbarBrand;
