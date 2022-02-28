import React from "react";
import PropTypes from "prop-types";
import styles from "./MyWork.module.css";
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
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import {IoOpenOutline} from "react-icons/io5";
const MyWork = () => (
  <motion.div initial={{ x: 1000 }}
  animate={{
    x: 0,
    transition: {
      duration: 1,
      type:"tween",
      damping:3
    },
  }}className={styles.MyWork} id = "skills">
    <div class="container-fluid" style={{width:"95%"}}>
      <div>
        <br />
        <br />
        <h1 className={styles.header}>My Porfolio</h1>
        <br />
        <div className={styles.row4}>
          <div class="col-sm-10">
            <h2>
            A small gallery of my recent projects. I've worked on some of these projects individually and 
            some of them within a group environment. I have deployed all the projects using CI/CD pipeline 
            on different cloud platforms.
            </h2>
          </div>
          <div class="col-sm-2">
            <NavLink to="/Projects">
              <motion.button
                className={styles.lbutton}
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: 360 }}
                transition={{
                  type: "spring",
                  damping: 3,
                  duration: 4,
                }}
              >
                More
              </motion.button>
            </NavLink>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="card-group">
        <motion.div
          className="card"
          style={{ backgroundColor: "aqua", border: "1.25px solid aqua" }}
          >
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
            pause="hover"
            data-toggle="tooltip"
            data-placement="top"
            title="Click to open"
          >
            <motion.div  
              whileHover={{
              scale: 0.98,
              transition: { duration: 0.5 },
              opacity:0.9
              }} class="carouselinner" style={{borderRadius:"25px"}}>
              <a
                href="https://share.streamlit.io/viraj-sonavane/covid-19-peak-predictor/web/app.py"
                target="_blank"
              >
                <div class="carousel-item active" data-interval="2500">
                  <img
                    className={styles.images}
                    src={S3}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={S1}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={S2}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={S4}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </a>
            </motion.div>
          </div>
          <div
            class="card-body"
            style={{
              background: "rgb(35 36 36)",
              padding: "0.5rem",
              paddingLeft: "1rem",
            }}
          >
            <div class="row" style={{ width: "100%",display:"flex"}}>
              <a
                href="https://github.com/Viraj-Sonavane/Covid-19-Peak-Predictor"
                target="_blank"
              >
                <BsGithub style={{ fontSize: "30px", color: "white" , marginLeft:"1rem"}} />
              </a>
              <a
                href="https://share.streamlit.io/viraj-sonavane/covid-19-peak-predictor/web/app.py"
                target="_blank"
              >
                <IoOpenOutline style={{ fontSize: "30px", color: "coral", marginLeft:"1rem" }} />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          class="card"
          style={{ backgroundColor: "aqua", border: "1.25px solid aqua" }}
        >
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
            pause="hover"
            data-toggle="tooltip"
            data-placement="top"
            title="Click to open"
          >
            <motion.div  
             whileHover={{
             scale: 0.98,
             transition: { duration: 0.5 },
             opacity:0.9
             }} class="carouselinner" style={{borderRadius:"25px"}}>
              <a
                href="https://csci620-team1-ui.azurewebsites.net"
                target="_blank"
              >
                <div class="carousel-item active" data-interval="2500">
                  <img
                    className={styles.images}
                    src={W1}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={W3}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={W2}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={W4}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </a>
            </motion.div>
          </div>
          <div
            class="card-body"
            style={{
              background: "rgb(35 36 36)",
              padding: "0.5rem",
              paddingLeft: "1rem",
            }}
          >
             <div class="row" style={{ width: "100%",display:"flex"}}>
              <a
                href="https://github.com/Viraj-Sonavane/team1"
                target="_blank"
              >
                <BsGithub style={{ fontSize: "30px", color: "white" , marginLeft:"1rem"}} />
              </a>
              <a
                href="https://csci620-team1-ui.azurewebsites.net"
                target="_blank"
              >
                <IoOpenOutline style={{ fontSize: "30px", color: "coral", marginLeft:"1rem" }} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div class="card-group">
        <motion.div
          class="card"
          style={{ backgroundColor: "aqua", border: "1.25px solid aqua" }}
        >
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
            pause="hover"
            data-toggle="tooltip"
            data-placement="top"
            title="Click to open"
          >
            <motion.div  
              whileHover={{
              scale: 0.98,
              transition: { duration: 0.5 },
              opacity:0.9
              }} class="carouselinner" style={{borderRadius:"25px"}}>
              <a
                href="https://main.d24fn9bmcuph0s.amplifyapp.com/"
                target="_blank"
              >
                <div class="carousel-item active" data-interval="2500">
                  <img
                    className={styles.images}
                    src={N3}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={N2}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={N1}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={N4}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </a>
            </motion.div>
          </div>
          <div
            class="card-body"
            style={{
              background: "rgb(35 36 36)",
              padding: "0.5rem",
              paddingLeft: "1rem",
            }}
          >
             <div class="row" style={{ width: "100%",display:"flex"}}>
              <a
                href="https://github.com/Viraj-Sonavane/Amplify"
                target="_blank"
              >
                <BsGithub style={{ fontSize: "30px", color: "white" , marginLeft:"1rem"}} />
              </a>
              <a
                href="https://main.d24fn9bmcuph0s.amplifyapp.com/"
                target="_blank"
              >
                <IoOpenOutline style={{ fontSize: "30px", color: "coral", marginLeft:"1rem" }} />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          class="card"
          style={{ backgroundColor: "aqua", border: "1.25px solid aqua" }}
        >
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
            pause="hover"
            data-toggle="tooltip"
            data-placement="top"
            title="Click to open"
          >
            <motion.div  
              whileHover={{
              scale: 0.98,
              transition: { duration: 0.5 },
              opacity:0.9
              }} class="carouselinner" style={{borderRadius:"25px"}}>
              <a href="" target="_blank">
                <div class="carousel-item active" data-interval="2500">
                  <img
                    className={styles.images}
                    src={T1}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={T2}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={T3}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={T4}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={T5}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500">
                  <img
                    className={styles.images}
                    src={T6}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </a>
            </motion.div>
          </div>
          <div
            class="card-body"
            style={{
              background: "rgb(35 36 36)",
              padding: "0.5rem",
              paddingLeft: "1rem",
            }}
          >
             <div class="row" style={{ width: "100%",display:"flex"}}>
              <a
                href="https://github.com/CSUChico-CINS465/CINS465-S21-Viraj-Sonavane/tree/Project"
                target="_blank"
              >
                <BsGithub style={{ fontSize: "30px", color: "white" , marginLeft:"1rem"}} />
              </a>
              <a
                href="https://tradespot-321603.appspot.com"
                target="_blank"
              >
                <IoOpenOutline style={{ fontSize: "30px", color: "coral", marginLeft:"1rem" }} />
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

MyWork.propTypes = {};

MyWork.defaultProps = {};

export default MyWork;
