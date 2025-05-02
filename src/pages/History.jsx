import React, { useState } from 'react';
import { motion } from 'framer-motion';


const History = () => {


  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      </motion.div>
    </div>
  );
};

export default History;