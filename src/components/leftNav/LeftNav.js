import React from "react";
import { Link } from "react-router-dom";
import styles from "./LeftNav.module.css";

function LeftNav() {
  return (
    <div className={styles.leftNav}>
      <Link to="/" className={styles.logo}>
        dim <span>a.</span>
      </Link>
      <a
        href="mailto:dmytro.bula21@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.email}
      >
        dmytro.bula21@gmail.com
      </a>
    </div>
  );
}

export default LeftNav;
