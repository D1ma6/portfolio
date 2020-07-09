import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import styles from "./App.module.css";
import "./App.module.css";

// components
import Navbar from "./components/navbar/Navbar";
import LeftNav from "./components/leftNav/LeftNav";
import RightNav from "./components/rightNav/RightNav";

// pages
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <LeftNav />
        <Navbar />

        <RightNav />
        <div className={styles.gridLines}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.gridLines}></div>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
