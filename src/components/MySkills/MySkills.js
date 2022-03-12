import React from "react";
import PropTypes from "prop-types";
import styles from "./MySkills.module.css";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import COVID from "../ProjectList/COVID/COVID";
import Wanderlust from "../ProjectList/Wanderlust/Wanderlust";
import NoteTaker from "../ProjectList/NoteTaker/NoteTaker";
import TradeSpot from "../ProjectList/TradeSpot/TradeSpot";
import Playbuddy from "../ProjectList/Playbuddy/Playbuddy";
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
            <COVID />

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
                  href="https://github.com/Viraj-Sonavane/Covid-19-Peak-Predictor/tree/web"
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
            <Wanderlust />

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
            <NoteTaker />

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
                  href="https://github.com/Viraj-Sonavane/NoteTaker"
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
            <TradeSpot />

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

          <motion.div
            className="card"
            style={{
              backgroundColor: "aqua",
              border: "1.25px solid aqua",
              width: "100%",
            }}
            >
            <Playbuddy/>

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
                  href="https://github.com/Viraj-Sonavane/PlayBuddy.git"
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
                <a href="#">
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
