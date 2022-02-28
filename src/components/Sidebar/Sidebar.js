import React from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";
import { AnimatePresence, motion } from "framer-motion";
import {
  BsFillChatDotsFill,
  BsFillHouseFill,
  BsGithub,
  BsLinkedin,
  BsInfoCircleFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FaCodepen } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import { SiLeetcode } from "react-icons/si";

const routes = [
  {
    path: "/",
    name: "Home",
    icons: <NavBar />,
  },
  {
    path: "/About",
    name: "About",
    icons: <BsInfoCircleFill />,
  },
  {
    path: "/Projects",
    name: "Projects",
    icons: <BsFillPersonLinesFill />,
  },
  {
    path: "/Resume",
    name: "Resume",
    icons: <IoDocumentAttachOutline />,
    target: "",
  },
  {
    path: "/Contact",
    name: "Contact",
    icons: <BsFillChatDotsFill />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const toggle = () => SetIsOpen(!isOpen);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 2,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.Sidebars}>
      <motion.div
        animate={{
          width: isOpen ? "200px" : "80px",
          transition: {
            duration: 1,
            type: "spring",
            damping: 6,
          },
        }}
        className={styles.sidebar}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName={styles.active}
              className={styles.link}
              to={route.path}
              key={route.name}
              target={route.target}
            >
              <div className={styles.logo}>{route.icons} </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variant={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={styles.linktext}
                  >
                    {" "}
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}

          <div className={styles.fullink} activeClassName={styles.active}>
            <a href="https://github.com/Viraj-Sonavane" target="_blank">
              <div className={styles.logo2}>
                <BsGithub />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variant={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={styles.link2text}
                  >
                    Github
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          </div>
          <div className={styles.fullink}>
            <a
              href="https://www.linkedin.com/in/viraj-sonavane-aa7841177/"
              target="_blank"
            >
              <div className={styles.logo2}>
                <BsLinkedin />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variant={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={styles.link2text}
                  >
                    LinkedIn
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          </div>
          <div className={styles.fullink}>
            <a href="https://codepen.io/your-work/" target="_blank">
              <div className={styles.logo2}>
                <FaCodepen />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variant={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={styles.link2text}
                  >
                    Codepn
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          </div>
          <div className={styles.fullink}>
            <a href="https://leetcode.com/viraj918/" target="_blank">
              <div className={styles.logo2}>
                <SiLeetcode />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variant={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={styles.link2text}
                  >
                    LeetCode
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          </div>
        </section>
      </motion.div>
      <main className={styles.mains}>{children}</main>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
