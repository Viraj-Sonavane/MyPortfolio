import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cube.module.css';
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const Cube = () => {
  const ref = useRef(null);

  return(
    <div className={styles.Cube}>
    Cube Component
  </div>
  )
};

Cube.propTypes = {};

Cube.defaultProps = {};

export default Cube;
