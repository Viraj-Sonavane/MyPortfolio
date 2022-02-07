import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <div className={styles.NavBar}>
    <nav class="navbar sticky-top">
      <div class={styles.containerfluid}>
        <a class={styles.navbar} href="#">
          Home
        </a>
        <a class={styles.navbar} href="#">
          MySkills
        </a>
        <a class={styles.navbar} href="#">
          Work
        </a>
        <a class={styles.navbar} href="#">
          About
        </a>
        <a class={styles.navbar} href="#">
          Contact
        </a>
      </div>
    </nav>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
