import React from "react";
import { Link } from "react-router-dom";

import Letter from "../../components/Letters";

// styles
import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <span className={styles.hello}>
          <Letter letter="h" />
          <Letter letter="e" />
          <Letter letter="l" />
          <Letter letter="l" />
          <Letter letter="o" />
          <Letter letter="," />
        </span>
        <h1 className={styles.title}>
          <span className={styles.space}>
            <Letter letter="M" />
            <Letter letter="y" />
          </span>
          <span className={styles.space}>
            <Letter letter="n" />
            <Letter letter="a" />
            <Letter letter="m" />
            <Letter letter="e" />
          </span>
          <Letter letter="i" />
          <Letter letter="s" />

          <span className={styles.titleName}>
            <span className={styles.space}>
              <Letter letter="D" />
              <Letter letter="m" />
              <Letter letter="y" />
              <Letter letter="t" />
              <Letter letter="r" />
              <Letter letter="o" />
            </span>
            <Letter letter="B" />
            <Letter letter="u" />
            <Letter letter="l" />
            <Letter letter="a" />
          </span>
        </h1>
        <h1 className={styles.title}>
          <span className={styles.space}>
            <Letter letter="I" />
          </span>
          <span className={styles.space}>
            <Letter letter="t" />
            <Letter letter="u" />
            <Letter letter="r" />
            <Letter letter="n" />
          </span>
          <span className={styles.space}>
            <span className={styles.titleCoffee}>
              <Letter letter="c" />
              <Letter letter="o" />
              <Letter letter="f" />
              <Letter letter="f" />
              <Letter letter="e" />
              <Letter letter="e" />
            </span>
          </span>
          <span className={styles.space}>
            <Letter letter="i" />
            <Letter letter="n" />
            <Letter letter="t" />
            <Letter letter="o" />
          </span>
          <span className={styles.space}>
            <Letter letter="c" />
            <Letter letter="o" />
            <Letter letter="d" />
            <Letter letter="e" />
          </span>
        </h1>
        <p className={styles.para}>
          I'm a <span className={styles.paraRed}>front-end web developer</span>
          <span className={styles.paraBlue}>/designer</span> from Ukraine based
          in London, I love creating beatiful and functional{" "}
          <span className={styles.paraRed}>websites</span>,{" "}
          <span className={styles.paraRed}>applications</span>, and everything
          in between.
        </p>
        <Link to="/Contact" className={styles.btn}>
          Get in touch
        </Link>
      </div>
    </section>
  );
}

export default Intro;
