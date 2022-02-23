import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import { motion } from "framer-motion";
const NavBar = () => (
  <div className={styles.NavBar}>
    <div class="container-fluid">
      <div>
        <div className={styles.content}>
          <div className={styles.front}>
            <p className={styles.aligned1}>HTML5</p>
          </div>
          <div className={styles.back}>
            <p className={styles.aligned2}>CSS3</p>
          </div>
          <div className={styles.left}>
            <p className={styles.aligned3}>UI</p>
          </div>
          <div className={styles.right}>
            <p className={styles.aligned4}>UX</p>
          </div>
          <div className={styles.top}>
            <p className={styles.aligned5}>React</p>
          </div>
          <div className={styles.bottom}>
            <p className={styles.aligned6}>Angular</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
