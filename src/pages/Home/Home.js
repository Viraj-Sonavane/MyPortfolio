import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import house from "../../Images/myname.jpg";
import { motion } from "framer-motion";
import MyWork from "../../components/MyWork/MyWork";
import { CgScrollV } from "react-icons/cg";
import MySkills from "../../components/MySkills/MySkills";
const Home = () => (
  <div className={styles.Home}>
    <div className={styles.container}>
      <section>
        <div className={styles.stars}></div>
        <div className={styles.stars1}></div>
        <div className={styles.stars2}></div>
        <div className="row">
          <div class="col-sm-7">
            <br />
            <br />
            <p className={styles.f}>Hi,</p>
            <p className={styles.f}>I'm Viraj. </p>
            <p className={styles.s}>A Developer.</p>
            <br />
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
              I’m a front-end developer and general doodler with a keen eye for
              creating engaging UI, bringing products to life.
            </motion.p>
          </div>
          <div class="col-sm-1"></div>
          <div class="col-sm-4">
            <br />
            <br />
            <motion.img
              initial={{ y: -400 }}
              animate={{
                y: 10,
                transition: {
                  duration: 2,
                  type: "spring",
                  damping: 4,
                },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className={styles.imageMain}
              src={house}
              alt="Myname"
              width={425}
              height={600}
            />
          </div>
          <br />
          <br />
        </div>

        <a href="/Contact">
          <motion.button
            className={styles.mbutton}
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: 360 }}
            transition={{
              type: "spring",
              damping: 3,
              duration: 4,
            }}
            href="/Contact"
          >
            Contact Me!
          </motion.button>
        </a>

        <motion.div className={styles.scroll}>
          <CgScrollV />
        </motion.div>
      </section>
      <section className={styles.work}>
        <MyWork />
        <motion.div className={styles.scroll1}>
          <CgScrollV />
        </motion.div>
      </section>
       
      <section>
        <MySkills/>
      </section>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
