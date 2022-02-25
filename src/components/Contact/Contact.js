import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bohdk7n', 'template_m2tmtiu', formRef.current, 'user_yasA4dHKq3qyV7s81O2wX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


return (
  <motion.div 
    initial={{ x: 1000 }}
    animate={{
    x: 0,
    transition: {
      duration: 1,
      type:"tween",
      damping:3
    },
    }}className={styles.Contact}
    id="contact"
    >
    <div className={styles.cg}>
      <h1 className={styles.header}>Contact me</h1>
      <br />
      <div class="card-group" styles={{ border: "none" }}>
        <div
          class="card"
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "10px",
          }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label className={styles.labels} for="user_name">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="user_name"
                  id="user_name"
                  style={{ borderRadius: "25px", background:"#232424" }}
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label className={styles.labels} for="user_email">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="user_email"
                  id="user_email"
                  style={{ borderRadius: "25px", background:"#232424" }}
                ></input>
              </div>
            </div>
            <div class="form-group">
              <label className={styles.labels} for="user_subject">
                Subject
              </label>
              <input
                type="text"
                class="form-control"
                name="user_subject"
                id="user_subject"
                style={{ borderRadius: "25px", background:"#232424" }}
              ></input>
            </div>
            <div class="form-group">
              <label className={styles.labels} for="user_message">
                {" "}
                Message{" "}
              </label>
              <textarea
                type="text"
                class="form-control"
                name="user_message"
                id="user_message"
                style={{ height: "200px", borderRadius: "25px",background:"#232424"  }}
              ></textarea>
            </div>
            <br />
            <div style={{ marginLeft: "1px" }}>
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
                data-toggle="modal" 
                data-target="#mymodal"
                value="Send Email"
              >
                Send
              </motion.button>
            </div>
            <div
              class="modal fade"
              id="mymodal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content" style={{backgroundColor:"#cfd2d3",borderRadius:"2.5rem",border:"3px solid red",width:"75%"}}>
                  <div class="modal-header" style={{borderBottom: "2px solid aqua"}}>
                    <h2 class="modal-title" style={{fontSize:"30px", color:"black"}} id="exampleModalLabel">
                      Message Sent
                    </h2>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h4>Your message was succesfully sent to Viraj Sonavane</h4>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <br />
        <div
          class="card"
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "10px",
          }}
        >
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5751440.99122179!2d-122.90873918764318!3d37.75197915641101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fceb47d510293%3A0x914fa860d1594296!2sBleecker%20St%2C%20Milpitas%2C%20CA%2095035!5e1!3m2!1sen!2sus!4v1645386551691!5m2!1sen!2sus"
            style={{
              borderWidth: "3px",
              borderColor: "aqua",
              borderRadius: "25px",
              height: "600px",
              allowfullscreen: "",
              loading: "lazy",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  </motion.div>
);
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
