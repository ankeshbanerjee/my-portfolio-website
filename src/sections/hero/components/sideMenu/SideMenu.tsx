import React from "react";
import { motion } from "motion/react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const SideMenu: React.FC = () => {
  const sideMenuVariants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };
  const sideMenuContainerVariants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={sideMenuContainerVariants}
      initial="hidden"
      animate="show"
      transition={{}}
      className="hidden lg:block absolute top-[50%] translate-y-[-50%] left-0 bg-white shadow-2xl p-2 rounded-r-lg"
    >
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
      >
        <FaGithub size={30} />
      </motion.div>
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
      >
        <FaLinkedin size={30} />
      </motion.div>
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
      >
        <FaEnvelope size={30} />
      </motion.div>
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
      >
        <FaFacebook size={30} />
      </motion.div>
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
      >
        <FaInstagram size={30} />
      </motion.div>
    </motion.div>
  );
};

export default SideMenu;
