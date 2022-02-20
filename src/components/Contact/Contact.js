import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
const Contact = () => (
  <div className={styles.Contact}>
    <div class="container-fluid">
      <h1>Contact me</h1>
      <div class="card-group" styles={{ border: "none" }}>
        <div
          class="card"
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "100px",
          }}
        >
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label className={styles.labels} for="Name">
                  Name
                </label>
                <input
                  type="Name"
                  class="form-control"
                  id="Name"
                  style={{ borderRadius: "25px" }}
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label className={styles.labels} for="Email">
                  Email
                </label>
                <input
                  type="Email"
                  class="form-control"
                  id="Email"
                  style={{ borderRadius: "25px" }}
                ></input>
              </div>
            </div>
            <div class="form-group">
              <label className={styles.labels} for="Subject">
                Subject
              </label>
              <input
                type="text"
                class="form-control"
                id="Subject"
                style={{ borderRadius: "25px" }}
              ></input>
            </div>
            <div class="form-group">
              <label className={styles.labels} for="Messsage">
                Message
              </label>
              <input
                type="text"
                class="form-control"
                id="Message"
                style={{ minHeight: "200px", borderRadius: "25px" }}
              ></input>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: 360 }}
                transition={{
                  type: "spring",
                  damping: 3,
                  duration: 4,
                }}
                className={styles.buttons}
                type="submit"
              >
                Send
              </motion.button>
            </div>
          </form>
        </div>
        <br />
        <div
          class="card"
          style={{ backgroundColor: "transparent", border: "none",}}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.488244573014!2d-121.90093213493178!3d37.40946619086596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fceb463a4fea3%3A0x46b8ee261fefde9d!2sBleecker%20St%2C%20Milpitas%2C%20CA%2095035!5e1!3m2!1sen!2sus!4v1645348524885!5m2!1sen!2sus"
            style={{
              borderWidth:"3px",
              borderColor:"aqua",
              borderRadius: "25px",
              height: "600px",
              allowfullscreen: "",
              loading: "lazy",
            }}
          ></iframe>
        </div>
      </div>
      <div class="card-group">
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
