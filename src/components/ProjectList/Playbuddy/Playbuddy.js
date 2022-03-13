import React from "react";
import PropTypes from "prop-types";
import styles from "./Playbuddy.module.css";
import P1 from "../../../Images/P1.png";
import P2 from "../../../Images/P2.png";
import P3 from "../../../Images/P3.png";
import P4 from "../../../Images/P4.png";
import P5 from "../../../Images/P5.png";
import P6 from "../../../Images/P6.png";
import P7 from "../../../Images/P7.png";
import P8 from "../../../Images/P8.png";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
const Playbuddy = () => (
  <div className={styles.Playbuddy}>
    <motion.img
      whileHover={{
        scale: 0.98,
        transition: { duration: 1 },
        opacity: 0.7,
      }}
      data-toggle="modal"
      data-target="#P5"
      src={P1}
      className={styles.firstpic}
    ></motion.img>

    <div
      class="modal fade"
      id="P5"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div
          class="modal-content"
          style={{
            backgroundColor: "rgb(196 249 249)",
            border: "0.2vw solid red",
          }}
        >
          <div
            class="modal-header"
            style={{
              backgroundColor: "rgb(43 44 44)",
              display: "flex",
              borderRadius: "0px",
            }}
          >
            <h5
              class="modal-title"
              id="exampleModalLongTitle"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bolder",
                fontSize: "2vw",
                color: "white",
              }}
            >
              Playbuddy
            </h5>

            <motion.button
              data-dismiss="modal"
              aria-label="Close"
              className={styles.lbutton}
              whileHover={{ scale: 0.95 }}
              animate={{ rotate: 360 }}
              transition={{
                type: "spring",
                damping: 3,
                duration: 4,
              }}
            >
              Close
            </motion.button>
          </div>
          <div
            class="modal-header"
            style={{ backgroundColor: "#4d5050", borderRadius: "0px" }}
          >
            <div class="container">
              <div class="row">
                <div
                  class="col-10"
                  style={{ paddingLeft: "0px", paddingRight: "1vw" }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "1vw",
                      textAlign: "justify",
                    }}
                  >
                    Created a web application to find a game or hobby buddies
                    around the user by creating public groups that showcases
                    current game or session in play with its location and allows
                    other users to join these groups or create new groups by
                    using the app. Used React, Material-UI, HTML5 and CSS3 for
                    front end.
                  </p>
                </div>
                <div
                  class="col-2"
                  style={{ paddingLeft: "1vw", paddingRight: "1vw" }}
                >
                  <div style={{ color: "aqua", fontSize: "1vw" }}>
                    <ul class="list-group">
                      <li
                        class="list-group-item"
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0",
                        }}
                      >
                        <BiRightArrow
                          style={{
                            color: "red",
                            height: "1vw",
                            width: "1vw",
                          }}
                        />{" "}
                        React
                      </li>
                      <li
                        class="list-group-item"
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0",
                        }}
                      >
                        <BiRightArrow
                          style={{
                            color: "red",
                            height: "1vw",
                            width: "1vw",
                          }}
                        />{" "}
                        JavaScript
                      </li>
                      <li
                        class="list-group-item"
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0",
                        }}
                      >
                        <BiRightArrow
                          style={{
                            color: "red",
                            height: "1vw",
                            width: "1vw",
                          }}
                        />{" "}
                        Material-UI
                      </li>
                      <li
                        class="list-group-item"
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0",
                        }}
                      >
                        <BiRightArrow
                          style={{
                            color: "red",
                            height: "1vw",
                            width: "1vw",
                          }}
                        />{" "}
                        HTML5
                      </li>
                      <li
                        class="list-group-item"
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0",
                        }}
                      >
                        <BiRightArrow
                          style={{
                            color: "red",
                            height: "1vw",
                            width: "1vw",
                          }}
                        />{" "}
                        CSS3
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal-body"
            style={{
              paddingTop: "0.5vw",
              paddingLeft: "0.5vw",
              paddingRight: "0.5vw",
              paddingBottom: "inherit",
            }}
          >
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={P1}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={P2}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={P3}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={P4}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={P5}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={P6}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={P7}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={P8}
              alt=""
            ></img>
          </div>
          <div className={styles.crossicon}>
            <GrClose
              className={styles.crossicon}
              data-dismiss="modal"
              aria-label="Close"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Playbuddy.propTypes = {};

Playbuddy.defaultProps = {};

export default Playbuddy;
