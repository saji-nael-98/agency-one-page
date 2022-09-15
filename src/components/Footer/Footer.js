import React from "react";
import styles from "./Footer.module.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import LinkButton from "../UI/LinkButton/LinkButton";

function Footer(props) {
  //todo: implement footer section
  return (
    <footer style={styles.footer}>
      <div className={styles.box}>
        <p>Copyright &copy; Agency</p>
      </div>
      <section id={styles["agency-links"]} className={`${styles.box}`}>
        <LinkButton>
          <span>{<AiFillFacebook />}</span>
        </LinkButton>
        <LinkButton>
          <span>{<AiFillLinkedin />}</span>
        </LinkButton>
        <LinkButton>
          <span>{<AiFillTwitterCircle />}</span>
        </LinkButton>
      </section>
      <section className={styles.box}>
        <a href="#" >
          <span>Privacy Policy</span>
        </a>
        <a href="#" >
          <span> Terms of Use</span>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
