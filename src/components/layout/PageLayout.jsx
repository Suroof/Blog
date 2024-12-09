import React from 'react';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '../../utils/motion';
import Container from '../ui/Container';

const PageLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <Container>
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInAnimation}
        >
          {title && <h1 className="text-4xl font-bold mb-8">{title}</h1>}
          {children}
        </motion.div>
      </Container>
    </div>
  );
};

export default PageLayout;