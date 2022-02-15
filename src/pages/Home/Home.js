import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import house from "../../Images/myname.jpg";
import { motion } from "framer-motion";
import MyWork from "../../components/MyWork/MyWork";

const Home = () => (
  <div className={styles.Home}>
    <div className={styles.container}>
      <section>
        <div className={styles.stars}></div>
        <div className={styles.stars1}></div>
        <div className={styles.stars2}></div>
        <div className="row">
          <div class="col-sm-6">
            <p className={styles.f}>Hi,</p>
            <p className={styles.f}>I'm Viraj. </p>
            <p className={styles.s}>A Designer.</p>
            <br />
            <br />
            <motion.p
              initial={{ x: 400 }}
              animate={{
                x: 10,
                transition: {
                  duration: 4,
                  type: "spring",
                  damping: 4,
                },
              }}
              className={styles.t}
            >
              I’m also a front-end developer and general doodler with a keen eye
              for creating engaging UI, bringing products to life.
            </motion.p>
          </div>
          <div class="col-sm-2">

          </div>
          <div class="col-sm-4">
            <img
              className={styles.imageMain}
              src={house}
              alt="Myname"
              width={425}
              height={600}
            />
          </div>
        </div>
      </section>
      <section>
        <MyWork/>
      </section>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
