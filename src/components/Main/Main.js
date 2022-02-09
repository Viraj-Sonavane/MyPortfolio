import React from "react";
import PropTypes from "prop-types";
import styles from "./Main.module.css";
import house from "../../Images/myname.jpg";

const Main = () => (
  <div className={styles.Main}>
    <section>
      <div className={styles.stars}></div>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className="row">
        <div class="col-sm-7">
          <p className={styles.f}>Hi, I'm Viraj. </p>
          <p className={styles.s}>A Designer.</p>
          <br />
          <br />
          <p className={styles.t}>
            I’m also a front-end developer and general doodler with a keen eye
            for creating engaging UI, bringing products to life.
          </p>
        </div>
        <div class="col-sm-4">
          <img className={styles.imageMain} src={house} alt="Myname" width={425} height={600} />
        </div>
      </div>
    </section>
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
