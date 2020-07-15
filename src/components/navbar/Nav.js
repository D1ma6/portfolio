import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

// styles
import styles from "./Navbar.module.css";

const StyledNav = styled.nav`
  @media only screen and (max-width: 890px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;

function Nav({ open }) {
  return (
    <StyledNav open={open} className={styles.navbarContainer}>
      <Link className={styles.navbarLinks} to="/">
        me
      </Link>
      <Link className={styles.navbarLinks} to="/About">
        about me
      </Link>
      <Link className={styles.navbarLinks} to="/Work">
        my work
      </Link>
      <Link className={styles.navbarLinks} to="/Contact">
        contact me
      </Link>
      <a
        href="https://drive.google.com/file/d/1MA_0sY1b7D6nuMd8UtxSZ-iZzhvwDRpp/view?usp=sharing"
        className={styles.navbarLinksResume}
      >
        resume
      </a>
    </StyledNav>
  );
}

Nav.propTypes = {};

export default Nav;
