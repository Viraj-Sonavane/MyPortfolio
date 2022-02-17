import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cube.module.css';
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const Cube = () => {

  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return(
    <div className={styles.Cube}>
        
    </div>
  )
};

Cube.propTypes = {};

Cube.defaultProps = {};

export default Cube;
