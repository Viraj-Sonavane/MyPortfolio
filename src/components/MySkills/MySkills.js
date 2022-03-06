import React from "react";
import PropTypes from "prop-types";
import styles from "./MySkills.module.css";
import { motion } from "framer-motion";
import W1 from "../../Images/W1.png";
import W2 from "../../Images/W2.png";
import W3 from "../../Images/W3.png";
import W4 from "../../Images/W4.png";
import S1 from "../../Images/S1.png";
import S2 from "../../Images/S2.png";
import S3 from "../../Images/S3.png";
import S4 from "../../Images/S4.png";
import T1 from "../../Images/T1.png";
import T2 from "../../Images/T2.png";
import T3 from "../../Images/T3.png";
import T4 from "../../Images/T4.png";
import T5 from "../../Images/T5.png";
import T6 from "../../Images/T6.png";
import N1 from "../../Images/N1.png";
import N2 from "../../Images/N2.png";
import N3 from "../../Images/N3.png";
import N4 from "../../Images/N4.png";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { BiRightArrow } from "react-icons/bi";
const MySkills = (props) => {
  return (
    <motion.div
      id="skill"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={styles.MySkills}
    >
      <div class="container-fluid" style={{ width: "95%" }}>
        <br />
        <br />
        <h1 className={styles.header}>Projects</h1>
        <br />
        <div class="card-group">
          <motion.div
            className="card"
            style={{
              backgroundColor: "aqua",
              border: "1.25px solid aqua",
              width: "100%",
            }}
          >
            <motion.img
              whileHover={{
                scale: 0.98,
                transition: { duration: 0.5 },
                opacity: 0.9,
              }}
              data-toggle="modal"
              data-target="#P1"
              src={S3}
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
                    border: "4px solid red",
                  }}
                >
                  <div
                    class="modal-header"
                    style={{ backgroundColor: "#4d5050" }}
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
                    
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                  <div class="modal-body">
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
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card-body"
              style={{
                background: "rgb(35 36 36)",
                padding: "0.5rem",
                paddingLeft: "1rem",
              }}
            >
              <div class="row" style={{ width: "100%", display: "flex" }}>
                <a
                  href="https://github.com/Viraj-Sonavane/Covid-19-Peak-Predictor"
                  target="_blank"
                >
                  <BsGithub
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginLeft: "1rem",
                    }}
                  />
                </a>
                <a
                  href="https://share.streamlit.io/viraj-sonavane/covid-19-peak-predictor/web/app.py"
                  target="_blank"
                >
                  <IoOpenOutline
                    style={{
                      fontSize: "30px",
                      color: "coral",
                      marginLeft: "1rem",
                    }}
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            style={{
              backgroundColor: "aqua",
              border: "1.25px solid aqua",
              width: "100%",
            }}
          >
            <motion.img
              whileHover={{
                scale: 0.98,
                transition: { duration: 0.5 },
                opacity: 0.9,
              }}
              data-toggle="modal"
              data-target="#P2"
              src={W1}
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
                    border: "4px solid red",
                  }}
                >
                  <div
                    class="modal-header"
                    style={{ backgroundColor: "#4d5050" }}
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
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                  <div class="modal-body">
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
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card-body"
              style={{
                background: "rgb(35 36 36)",
                padding: "0.5rem",
                paddingLeft: "1rem",
              }}
            >
              <div class="row" style={{ width: "100%", display: "flex" }}>
                <a
                  href="https://github.com/Viraj-Sonavane/team1"
                  target="_blank"
                >
                  <BsGithub
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginLeft: "1rem",
                    }}
                  />
                </a>
                <a
                  href="https://csci620-team1-ui.azurewebsites.net"
                  target="_blank"
                >
                  <IoOpenOutline
                    style={{
                      fontSize: "30px",
                      color: "coral",
                      marginLeft: "1rem",
                    }}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div class="card-group">
          <motion.div
            className="card"
            style={{
              backgroundColor: "aqua",
              border: "1.25px solid aqua",
              width: "100%",
            }}
          >
            <motion.img
              whileHover={{
                scale: 0.98,
                transition: { duration: 0.5 },
                opacity: 0.9,
              }}
              data-toggle="modal"
              data-target="#P3"
              src={N3}
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
                    border: "4px solid red",
                  }}
                >
                  <div
                    class="modal-header"
                    style={{ backgroundColor: "#4d5050" }}
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
                      MyNotes
                    </h5>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                  <div class="modal-body">
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
                </div>
              </div>
            </div>

            <div
              class="card-body"
              style={{
                background: "rgb(35 36 36)",
                padding: "0.5rem",
                paddingLeft: "1rem",
              }}
            >
              <div class="row" style={{ width: "100%", display: "flex" }}>
                <a
                  href="https://github.com/Viraj-Sonavane/Amplify"
                  target="_blank"
                >
                  <BsGithub
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginLeft: "1rem",
                    }}
                  />
                </a>
                <a
                  href="https://main.d24fn9bmcuph0s.amplifyapp.com/"
                  target="_blank"
                >
                  <IoOpenOutline
                    style={{
                      fontSize: "30px",
                      color: "coral",
                      marginLeft: "1rem",
                    }}
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            style={{
              backgroundColor: "aqua",
              border: "1.25px solid aqua",
              width: "100%",
            }}
          >
            <motion.img
              whileHover={{
                scale: 0.98,
                transition: { duration: 0.5 },
                opacity: 0.9,
              }}
              data-toggle="modal"
              data-target="#P4"
              src={T1}
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
                    border: "4px solid red",
                  }}
                >
                  <div
                    class="modal-header"
                    style={{ backgroundColor: "#4d5050" }}
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
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                  <div class="modal-body">
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
                </div>
              </div>
            </div>

            <div
              class="card-body"
              style={{
                background: "rgb(35 36 36)",
                padding: "0.5rem",
                paddingLeft: "1rem",
              }}
            >
              <div class="row" style={{ width: "100%", display: "flex" }}>
                <a
                  href="https://github.com/CSUChico-CINS465/CINS465-S21-Viraj-Sonavane/tree/Project"
                  target="_blank"
                >
                  <BsGithub
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginLeft: "1rem",
                    }}
                  />
                </a>
                <a href="https://tradespot-321603.appspot.com" target="_blank">
                  <IoOpenOutline
                    style={{
                      fontSize: "30px",
                      color: "coral",
                      marginLeft: "1rem",
                    }}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </motion.div>
  );
};

MySkills.propTypes = {};

MySkills.defaultProps = {};

export default MySkills;
