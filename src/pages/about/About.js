import React from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.aboutLeft}>
          <span className={styles.about}>about me,</span>
          <p className={styles.aboutPara}>
            I'm a <span className={styles.red}>front-end web developer</span>
            <span className={styles.blue}>/designer</span> from Ukraine based in
            London, I love creating beatiful and functional{" "}
            <span className={styles.red}>websites</span>,
            <span className={styles.red}>applications</span>, and everything in
            between.
          </p>
          <p className={styles.aboutPara}>
            Well organised <span className={styles.blue}>person</span>, problem
            solver, <span className={styles.blue}>employee</span> with high
            attention to <span className={styles.underline}>detail</span>. Fan
            of <span className={styles.red}>esports</span>, csgo, spaceX,
            outdoor activities, <span className={styles.blue}>travelling</span>.
          </p>
          <p className={styles.aboutPara}>
            The main area of my expertise is
            <span className={styles.red}>
              {" "}
              front-end web development{" "}
            </span>and <span className={styles.blue}>web designing</span>. HTML,
            CCS, <span className={styles.red}>JavaScrpit</span>, preprocessors
            SCSS and Less, frameworks jquery, react and node.js. Also making{" "}
            <span className={styles.blue}>animations</span> and{" "}
            <span className={styles.blue}>illustations</span> for web.
          </p>
          <div className={styles.buttons}>
            <a href="#" className={styles.buttonsResume}>
              Resume
            </a>
            <span className={styles.buttonsContact}>
              or
              <Link to="/Contact" className={styles.red}>
                contact me
              </Link>
            </span>
          </div>
        </div>
        <div className={styles.aboutRight}>
          <img src="./images/about-profile.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
