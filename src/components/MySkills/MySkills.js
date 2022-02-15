import React from 'react';
import PropTypes from 'prop-types';
import styles from './MySkills.module.css';
import {motion} from 'framer-motion';

const MySkills = () => (
  <div className={styles.MySkills}>
    <body>
      <div class="container">
        <div class="box">
        <span styles="--i:1;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:2;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:3;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:4;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:5;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:6;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:7;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:8;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:9;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:10;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:11;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:12;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:13;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:14;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:15;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        <span styles="--i:16;"><i>HTML5</i><i>CSS3</i><i>JavaScript</i><i>ReactJS</i><i>Angular</i></span>
        </div>
      </div>
    </body>
    <br/>
   
    <motion.div className={styles.box}
      animate={{
      x: 1000    
    }}
    initial={{
      opacity:0.1
    }}
    transition={{
      type:"spring"
    }}
    >
      Weeee I'm animated
    </motion.div>
    <br/>

  </div>
);

MySkills.propTypes = {};

MySkills.defaultProps = {};

export default MySkills;
