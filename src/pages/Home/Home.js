import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import house from "../../Images/myname.jpg";
import { motion } from "framer-motion";
import MyWork from "../../components/MyWork/MyWork";
import { CgScrollV } from "react-icons/cg";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import { NavLink } from "react-router-dom";
import LazyLoad from  'react-lazyload';
import {BiGitRepoForked} from "react-icons/bi"

const Home = () => (
  <div className={styles.Home}>
    <section>
      <div class="container-fluid" style={{ width: "95%" }}>
        <div className={styles.stars}></div>
        <div className={styles.stars1}></div>
        <div className={styles.stars2}></div>
        <div className={styles.row}>
          <div class="col-sm-8">
            <br />
            <br />
            <p className={styles.first}>Hi,</p>
            <p className={styles.second}>I'm Viraj. </p>
            <p className={styles.third}>A Developer.</p>
            <br />
            <motion.p
              initial={{ x: 400 }}
              animate={{
                x: 0,
                transition: {
                  duration: 2,
                  type: "spring",
                  damping: 4,
                },
              }}
              className={styles.t}
            >
              I’m a front-end developer and general doodler with a keen eye for
              creating engaging UI, bringing products to life.
            </motion.p>
            <br />
            <br />
            <NavLink to="/Contact" id="Contact">
              <motion.button
                className={styles.mbutton}
                whileHover={{ scale: 0.95 }}
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
            </NavLink>
          </div>
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
                scale: 1.05,
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
        </div>
        <br />
        <br />
      </div>
    </section>
    
    <motion.div className={styles.scroll1}>
        <CgScrollV className={styles.scroll}/>
    </motion.div>
    
    <section className={styles.work}>
      <About />
    </section>
    
    <motion.div className={styles.scroll1}>
        <CgScrollV className={styles.scroll}/>
    </motion.div>          

    <section className={styles.work}>
      <MyWork />
    </section>
    
    <motion.div className={styles.scroll1}>
        <CgScrollV className={styles.scroll}/>
    </motion.div>

    <section className={styles.work}>
      <Contact />
    </section>
    
    <section className={styles.work}>
     <br/>
        <a target="_blank" href="https://github.com/Viraj-Sonavane/MyPortfolio" className={styles.footer}><h2 className={styles.last}>Designed and built by Viraj Sonavane  <BiGitRepoForked style={{fontSize:"18px"}}/></h2></a>
        <br/>
    </section>
    
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
