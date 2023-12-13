"use client";
import React from "react";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: -400, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};
const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
};
export default Template;
