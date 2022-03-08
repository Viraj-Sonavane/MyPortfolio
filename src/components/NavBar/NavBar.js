import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import house from "../../Images/mylogo2.svg";

const NavBar = () => (
  <div className={styles.NavBar}>
    <svg className={styles.icon}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      height="2.2vw"
      viewBox="0 0 200.000000 200.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          fill="currentColor"
          d="M254 1821 c-142 -7 -171 -17 -198 -69 -25 -49 -29 -97 -12 -156 32
          -108 580 -1172 633 -1228 34 -35 125 -83 193 -99 166 -40 384 10 471 109 35
          40 122 211 294 582 70 151 173 370 228 485 108 228 120 274 83 330 -32 48 -71
          57 -254 53 l-165 -3 -29 -35 c-17 -19 -88 -161 -159 -315 -70 -154 -131 -279
          -135 -278 -4 1 -53 118 -108 260 -56 142 -112 273 -126 291 -13 17 -44 42 -69
          55 -44 21 -59 22 -281 23 -129 0 -294 -2 -366 -5z m1582 -124 c3 -3 -34 -88
          -82 -189 -47 -100 -125 -266 -171 -368 -150 -327 -313 -654 -340 -682 -95 -99
          -359 -105 -462 -9 -45 41 -162 257 -447 825 -145 289 -175 355 -172 385 l3 36
          334 3 c280 2 338 0 357 -12 16 -11 50 -86 119 -263 132 -336 134 -341 163
          -363 15 -12 40 -20 63 -20 70 0 92 33 239 355 73 160 138 296 144 304 8 11 35
          13 129 8 65 -3 121 -7 123 -10z"
        />
      </g>
    </svg>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
