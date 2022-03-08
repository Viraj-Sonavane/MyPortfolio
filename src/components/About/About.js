import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className={styles.About}
    id="about"
  >
    <div class="container-fluid" style={{ width: "95%" }}>
      <br />
      <br />
      <h1 className={styles.header}>About Me</h1>
      <br/>
      <div class="card-group" style={{ backgroundColor: "transparent" }}>
        <div
          class="card"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <h2 className={styles.data}>
            Hey!! My name is Viraj and I enjoy creating a web application with
            interactive UI. I have completed my Masters in Computer Science from
            California State University in December 2021. My interest in web
            applications started while creating websites for university
            coursework. I like to create web applications with engaging UI and
            experiment with new frameworks and platforms to keep myself updated
            with new technologies.{" "}
          </h2>
          <br />
          <h2 className={styles.data}>
            Here are few technologies I have been working recently:
          </h2>

          <div style={{ color: "aqua", fontSize: "1.5vw" }}>
            <BiRightArrow style={{ color: "red" }} /> ReactJS
          </div>
          <div style={{ color: "aqua", fontSize: "1.5vw" }}>
            <BiRightArrow style={{ color: "red" }} /> Angular
          </div>
          <div style={{ color: "aqua", fontSize: "1.5vw" }}>
            <BiRightArrow style={{ color: "red" }} /> JavaScript
          </div>
          <div style={{ color: "aqua", fontSize: "1.5vw" }}>
            <BiRightArrow style={{ color: "red" }} /> TypeScript
          </div>
          <div style={{ color: "aqua", fontSize: "1.5vw" }}>
            <BiRightArrow style={{ color: "red" }} /> FramerMotion
          </div>
          <div style={{ color: "aqua", fontSize: "1.5vw" }}>
            <BiRightArrow style={{ color: "red" }} /> HTML5
          </div>
          <div style={{ color: "aqua", fontSize: "1.5vw" }}>
            <BiRightArrow style={{ color: "red" }} /> CSS3
          </div>

          <div
            class="row"
            style={{
              marginLeft: "0px",
              marginTop: "3vw",
            }}
          >
            <NavLink to="/Resume">
              <motion.button
                className={styles.lbutton}
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: 360 }}
                transition={{
                  type: "spring",
                  damping: 3,
                  duration: 4,
                }}
              >
                View Resume
              </motion.button>
            </NavLink>
          </div>
          <br />
        </div>
        <div
          class="card"
          style={{
            backgroundColor: "transparent",
            border: "none",
            marginTop: "0px",
          }}
        >
          <motion.div
           drag
           whileHover={{ scale: 1.1 }}
           dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          >
          <div className={styles.content}>
            <div className={styles.front}>
              <p className={styles.aligned1}>HTML5</p>
              <p className={styles.aligned1}>CSS3</p>
              <p className={styles.aligned1}>Boostrap</p>
              <p className={styles.aligned1}>Foundation</p>
              <p className={styles.aligned1}>Material-UI</p>
            </div>
            <div className={styles.back}>
              <p className={styles.aligned2}>Django</p>
              <p className={styles.aligned2}>Angular</p>
              <p className={styles.aligned2}>React</p>
              <p className={styles.aligned2}>TypeScript</p>
              <p className={styles.aligned2}>JavaScript</p>
            </div>
            <div className={styles.left}>
              <p className={styles.aligned3}>JSON</p>
              <p className={styles.aligned3}>ES6</p>
              <p className={styles.aligned3}>AWS</p>
              <p className={styles.aligned3}>GCP</p>
              <p className={styles.aligned3}>Git</p>
            </div>
            <div className={styles.right}>
              <p className={styles.aligned4}>C++</p>
              <p className={styles.aligned4}>MySQL</p>
              <p className={styles.aligned4}>SQL</p>
              <p className={styles.aligned4}>Python</p>
              <p className={styles.aligned4}>JAVA</p>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
      <br />
    </div>
  </motion.div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
