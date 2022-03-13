import React from "react";
import PropTypes from "prop-types";
import styles from "./Wanderlust.module.css";
import W1 from "../../../Images/W1.png";
import W2 from "../../../Images/W2.png";
import W3 from "../../../Images/W3.png";
import W4 from "../../../Images/W4.png";
import W5 from "../../../Images/W5.png";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
const Wanderlust = () => (
  <div className={styles.Wanderlust}>
    <motion.img
      whileHover={{
        scale: 0.98,
        transition: { duration: 1 },
        opacity: 0.7,
      }}
      data-toggle="modal"
      data-target="#P2"
      src={W1}
      className={styles.firstpic}
    ></motion.img>

    <div
      class="modal fade"
      id="P2"
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
              Wanderlust
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
                    Created a web application that recommends real time famous
                    travel location, hotels with review and travel vlog
                    according to user's current location and the weather
                    conditions. For real time forecast GoogleAPI's are used and
                    for authentication Auth0 is used. Implemented the front-end
                    of the application using Angular, TypeScript,JavaScript and
                    Bootstrap. For backend Express and MongoDB is used. Deployed
                    the application on Azure using dockerhub and github CI/CD
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
                        Angular
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
                        TypeScript
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
                        Azure
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
                        Bootstrap
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
              src={W1}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={W3}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={W2}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={W4}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={W5}
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

Wanderlust.propTypes = {};

Wanderlust.defaultProps = {};

export default Wanderlust;
