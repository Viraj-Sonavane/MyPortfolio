import React from "react";
import PropTypes from "prop-types";
import styles from "./COVID.module.css";
import S1 from "../../../Images/S1.png";
import S2 from "../../../Images/S2.png";
import S3 from "../../../Images/S3.png";
import S4 from "../../../Images/S4.png";
import S5 from "../../../Images/S5.png";
import S6 from "../../../Images/S6.png";
import S7 from "../../../Images/S7.png";
import S8 from "../../../Images/S8.png";
import S9 from "../../../Images/S9.png";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const COVID = () => (
  <div className={styles.COVID}>
    <motion.img
      whileHover={{
        scale: 0.98,
        transition: { duration: 0.3 },
        opacity: 0.7,
      }}
      data-toggle="modal"
      data-target="#P1"
      src={S3}
      className={styles.firstpic}
    ></motion.img>
    
    <div
      class="modal fade"
      id="P1"
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
              COVID-19 Peak Wave Predictor
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
                    Created a peak wave predicitor using machine learning models
                    like Fbprophet, Arima and LSTM. Developed the code in google
                    colab enviornment using python and deployed the application
                    on streamlit cloud using github CI/CD pipeline.
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
                        Python
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
                        Streamlit Cloud
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
                        Google Colab
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
                        JupyterNotebook
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
              src={S3}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={S1}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={S2}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={S4}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={S5}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={S6}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={S7}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={S8}
              alt=""
            ></img>
            <img
              className={styles.pics}
              data-toggle="modal"
              data-target="#exampleModalLong"
              src={S9}
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

COVID.propTypes = {};

COVID.defaultProps = {};

export default COVID;
