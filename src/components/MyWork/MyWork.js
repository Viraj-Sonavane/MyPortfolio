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

const MyWork = () => (
  <div className={styles.MyWork}>
    <div className={styles.container}>
      <div>
        <br />
        <br />
        <h1>My Porfolio</h1>
        <br />
        <h2>
          A small gallery of recent projects chosen by me. I've done them all
          together with amazing people from companies around the globe. It's
          only a drop in the ocean compared to the entire list.
        </h2>
      </div>
      <br />
      <br />

      <div class="card-group">
        <div className="card">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className={styles.carouselinner}>
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
                <div class="carousel-item" data-interval="2500" >
                  <img
                    className={styles.images}
                    src={S1}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500" >
                  <img
                    className={styles.images}
                    src={S2}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2500" >
                  <img
                    className={styles.images}
                    src={S4}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className={styles.carouselinner}>
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
            </div>
          </div>
        </div>
      </div>

      <div class="card-group">
        <div class="card">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className={styles.carouselinner}>
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
            </div>
          </div>
        </div>
        <div class="card">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className={styles.carouselinner}>
              <a
                href=""
                target="_blank"
              >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

MyWork.propTypes = {};

MyWork.defaultProps = {};

export default MyWork;
