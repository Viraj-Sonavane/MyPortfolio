import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const About = () => (
  <motion.div
    initial={{ x: 1000 }}
    animate={{
      x: 0,
      transition: {
        duration: 1,
        type: "tween",
        damping: 3,
        ease: "easeOut"
      },
    }}
    className={styles.About}
    id="about"
  >
    <br />
    <div class="container-fluid" style={{ width: "95%" }}>
      <br />
      <br />
      <h1 className={styles.header}>About Me</h1>
      <div class="card-group" style={{ backgroundColor: "transparent" }}>
        <div
          class="card"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <h2 className={styles.data}>
            A small gallery of recent projects chosen by me. I've done them all
            together with amazing people from companies around the globe. It's
            only a drop in the ocean compared to the entire list. A small
            gallery of recent projects chosen by me. I've done them all together
            with amazing people from companies around the globe. It's only a
            drop in the ocean compared to the entire list.
          </h2>
          <div class="row" style={{ marginLeft: "0px",marginTop:"30px",marginBottom:"50px" }}>
            <NavLink to="/Resume">
              <motion.button
                className={styles.lbutton}
                whileHover={{ scale: 1.1 }}
              >
                View Resume
              </motion.button>
            </NavLink>
          </div>
          <br/>
        </div>
        <div
          class="card"
          style={{ backgroundColor: "transparent", border: "none",marginTop:"0px" }}
        >
          <div className={styles.content}>
            <div className={styles.front}>
              <p className={styles.aligned1}>HTML5</p>
              <p className={styles.aligned1s}>CSS3</p>
            </div>
            <div className={styles.back}>
              <p className={styles.aligned2}>React</p>
              <p className={styles.aligned2s}>Angular</p>
            </div>
            <div className={styles.left}>
              <p className={styles.aligned3}>JavaScript</p>
              <p className={styles.aligned3s}>TypeScript</p>
            </div>
            <div className={styles.right}>
              <p className={styles.aligned4}>UI</p>
              <p className={styles.aligned4s}>UX</p>
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
      <br />
    </div>
  </motion.div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
