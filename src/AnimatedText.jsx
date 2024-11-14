import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  return (
    <motion.h1
      className="leading-snug font-light text-5xl mx-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: -0.3 }} // Delay to start after logo animation
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedText;