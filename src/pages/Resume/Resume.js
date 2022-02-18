import React from "react";
import PropTypes from "prop-types";
import styles from "./Resume.module.css";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdf from "../../PDF/Viraj_Sonavane.pdf";


const Resume = () => (
  
  <div className={styles.Resume}>
    <h1 className={styles.headerr}>Resume</h1>
    <div className={styles.full}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
        <Viewer fileUrl={pdf}></Viewer>
      </Worker>
      </div>
  </div>
);

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
