import "./Navbar.css";
import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [open, setOpen] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setNavbarActive(false);
    } else setNavbarActive(true);
  });
  return (
    <nav className={`${navbarActive ? "navbar active" : "navbar"}`}>
      <NavbarBrand setOpen={setOpen} />
      <NavbarLinks open={open}/>
    </nav>
  );
};
export default Navbar;
