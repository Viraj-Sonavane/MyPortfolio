import React from "react";
import PropTypes from "prop-types";
import styles from "./Resume.module.css";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../../PDF/Viraj_Sonavane.pdf";
import { motion } from "framer-motion";


const Resume = () => (
  <div className={styles.Resume}>
    <div className="container-fluid">
      <div>
        <div className={styles.row}>
          <div class="col-sm-9">
            <h1 className={styles.header}>MyResume</h1>
          </div>
          <div className="col-sm-3">
          <a href={require("../../PDF/Viraj_Sonavane.pdf")} download="Viraj_Sonavane_Resume">
            <button
              className={styles.buttons}
              whileHover={{ scale: 0.9 }}
              href="/Contact"
            >
              Download Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
        <Viewer
          theme={{
            theme: "dark",
          }}
          fileUrl={pdf}
        ></Viewer>
      </Worker>
    </div>
  </div>
);

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
