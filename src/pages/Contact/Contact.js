import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = () => (
  <div className={styles.Contact}>
    <h1>Contact</h1>
    <form>
      <div class="form-row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
          ></input>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
          ></input>
        </div>
      </div>
    </form>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
