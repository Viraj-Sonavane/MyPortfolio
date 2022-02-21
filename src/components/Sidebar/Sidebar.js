import React from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillHouseFill, BsFillChatRightQuoteFill,BsGithub,BsLinkedin,BsInfoCircleFill,BsFillPersonLinesFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {IoDocumentAttachOutline,} from "react-icons/io5"

const routes = [
  {
    path: "/",
    name: "Home",
    icons: <BsFillHouseFill />,
  },
  {
    path: "/About",
    name: "About",
    icons: <BsInfoCircleFill />,
  },
  {
    path: "/Skills",
    name: "MySkills",
    icons: <BsFillPersonLinesFill />,
  },
  {
    path: "/Resume",
    name: "Resume",
    icons: <IoDocumentAttachOutline />,
    target:""
  },
  {
    path: "/Contact",
    name: "Contact",
    icons: <BsFillChatRightQuoteFill />,
  },
  {
    path: "/",
    name: "GitHub",
    icons: <BsGithub />,
    target:"_blank",
  },
  {
    path: "/https://www.linkedin.com/in/viraj-sonavane-aa7841177/",
    name: "LikedIn",
    icons: <BsLinkedin />,
    target:"_blank"
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const toggle=()=>SetIsOpen(!isOpen);
  const showAnimation = {
      hidden:{
        width:0,
        opacity:0,
        transition:{
          duration: 0.5,
        },
      },
      show:{
        width: "auto",
        opacity: 2,
        transition:{
          duration: 0.5,
        },
      }
  };


  return (
    <div className={styles.Sidebars}>
      <motion.div animate={{ width: isOpen ? "200px" : "80px", transition:{
        duration:1,
        type:"spring",
        damping:6,
      } }} className={styles.sidebar} onHoverEnd={toggle} onHoverStart={toggle}>
        <section className="routes">
          {routes.map((route) => (
            <NavLink activeClassName={styles.active}  className={styles.link} to={route.path} key={route.name} target={route.target} component={() => { window.location = 'https://github.com'; return null;} }>
              <div className={styles.logo}>{route.icons} </div>
              <AnimatePresence>
                {isOpen && <motion.div variant={showAnimation} 
                initial = "hidden"
                animate = "show"
                exit = "hidden"
                className={styles.linktext}> {route.name}</motion.div>}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main className={styles.mains}>{children}</main>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
