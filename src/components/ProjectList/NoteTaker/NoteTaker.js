import React from "react";
import PropTypes from "prop-types";
import styles from "./NoteTaker.module.css";
import N1 from "../../../Images/N1.png";
import N2 from "../../../Images/N2.png";
import N3 from "../../../Images/N3.png";
import N4 from "../../../Images/N4.png";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
const NoteTaker = () => (
  <div className={styles.NoteTaker}>
    <motion.img
      whileHover={{
        scale: 0.98,
        transition: { duration: 1 },
        opacity: 0.7,
      }}
      data-toggle="modal"
      data-target="#P3"
      src={N3}
      className={styles.firstpic}
    ></motion.img>

    <div
      class="modal fade"
      id="P3"
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
              NoteTaker
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
                    Created a note taking app using ReactJS and GraphQL.
                    Deployed the application on AWS Amplify using github CI/CD
                    pipeline.
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
                        ReactJS
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
                        AWS Amplify
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
                        GraphQL
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
              src={N3}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={N2}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={N1}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={N4}
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

NoteTaker.propTypes = {};

NoteTaker.defaultProps = {};

export default NoteTaker;
