import React from "react";
import PropTypes from "prop-types";
import styles from "./MyWork.module.css";
import W1 from "../../Images/W1.png";
import W2 from "../../Images/W2.png";
import W3 from "../../Images/W3.png";
import W4 from "../../Images/W4.png";

import house from "../../Images/logo512.png";
import house2 from "../../Images/myname.jpg";

const MyWork = () => (
  <div className={styles.MyWork}>
    <div>
      <br />
      <br />
      <h1>My Porfolio</h1>
      <br />
      <h2>
        A small gallery of recent projects chosen by me. I've done them all
        together with amazing people from companies around the globe. It's only
        a drop in the ocean compared to the entire list.
      </h2>
    </div>
    <br />
    <br />

    <div className={styles.container}>
      <div class="card-group">
        <div class="card">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className={styles.carouselinner}>
              <a
                href="https://www.linkedin.com/in/viraj-sonavane-aa7841177/"
                target="_blank"
              >
                <div class="carousel-item active">
                  <img
                    className={styles.images}
                    src={W1}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    className={styles.images}
                    src={W2}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    className={styles.images}
                    src={W3}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item">
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
              <div class="carousel-item active">
                <img
                  className={styles.images}
                  src={W3}
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  className={styles.images}
                  src={W2}
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
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
              <div class="carousel-item active">
                <img
                  className={styles.images}
                  src={W4}
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  className={styles.images}
                  src={W2}
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  className={styles.images}
                  src={W1}
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
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
              <div class="carousel-item active">
                <img
                  className={styles.images}
                  src={W4}
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  className={styles.images}
                  src={W1}
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  className={styles.images}
                  src={W3}
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
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
