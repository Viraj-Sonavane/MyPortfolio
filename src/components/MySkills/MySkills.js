import React from "react";
import PropTypes from "prop-types";
import styles from "./MySkills.module.css";
import { motion } from "framer-motion";

const styless = {
  backgroundColor: 'transparent'
};

const MySkills = (props) => {
  return (
    <div className={styles.MySkills}>
      <br/>
      <div class="container-fluid">
        <br />
        <br />
        <h1>My Skills</h1>
        <div class="card-group" style={{ backgroundColor: 'transparent' }}>
          <div class="card" style={{ backgroundColor: 'transparent', border: 'none'}} >
            <h2 className={styles.data}>
              A small gallery of recent projects chosen by me. I've done them
              all together with amazing people from companies around the globe.
              It's only a drop in the ocean compared to the entire list. A small
              gallery of recent projects chosen by me. I've done them all
              together with amazing people from companies around the globe. It's
              only a drop in the ocean compared to the entire list.
            </h2>
          </div>
          <div class="card" style={{ backgroundColor: 'transparent', border: 'none', marginTop:"30px" }}>
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
        <br />
      </div>
    </div>
  );
};

MySkills.propTypes = {};

MySkills.defaultProps = {};

export default MySkills;
