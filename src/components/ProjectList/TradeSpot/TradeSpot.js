import React from "react";
import PropTypes from "prop-types";
import styles from "./TradeSpot.module.css";
import T1 from "../../../Images/T1.png";
import T2 from "../../../Images/T2.png";
import T3 from "../../../Images/T3.png";
import T4 from "../../../Images/T4.png";
import T5 from "../../../Images/T5.png";
import T6 from "../../../Images/T6.png";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
const TradeSpot = () => (
  <div className={styles.TradeSpot}>
    <motion.img
      whileHover={{
        scale: 0.98,
        transition: { duration: 0.3},
        opacity: 0.7,
      }}
      data-toggle="modal"
      data-target="#P4"
      src={T1}
      className={styles.firstpic}
    ></motion.img>

    <div
      class="modal fade"
      id="P4"
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
              TradeSpot
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
                    Created a web application using Django a python based
                    framework where user can sell and buy used products.
                    Designed front-end of the application using Foundation 6.
                    Containerize the front-end and back-end of the application
                    in docker and deployed the application on Google Cloud
                    Platform (GCP).
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
                        Django
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
                        GCP
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
                        Docker
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
                        Foundation-UI
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
              src={T1}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={T2}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={T3}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={T4}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={T5}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={T6}
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

TradeSpot.propTypes = {};

TradeSpot.defaultProps = {};

export default TradeSpot;
