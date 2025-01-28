import React from "react";
import { motion } from "motion/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

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
        onClick={() =>
          window.open("https://github.com/ankeshbanerjee", "_blank")
        }
      >
        <FaGithub size={30} />
      </motion.div>
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/ankesh-banerjee-985911231/",
            "_blank"
          )
        }
      >
        <FaLinkedin size={30} />
      </motion.div>
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
        onClick={() => window.open("https://medium.com/@banerjeeankesh")}
      >
        <FaMedium size={30} />
      </motion.div>
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
        onClick={() =>
          window.open("https://www.facebook.com/profile.php?id=100073274455002")
        }
      >
        <FaFacebook size={30} />
      </motion.div>
      <motion.div
        variants={sideMenuVariants}
        className="p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition duration-300"
        onClick={() => window.open("https://www.instagram.com/being__ankesh/")}
      >
        <FaInstagram size={30} />
      </motion.div>
    </motion.div>
  );
};

export default SideMenu;
