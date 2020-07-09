import React from "react";
import { Link } from "react-router-dom";

// burger
import Burger from "./Burger";

// styles
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Burger />
    </nav>
  );
}

export default Navbar;
