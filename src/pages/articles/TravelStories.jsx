import React from 'react';
import { motion } from 'framer-motion';

const TravelStories = () => {
  const stories = [
    {
      title: "Journey Through Japan",
      date: "2024-01-15",
      excerpt: "Exploring the ancient temples of Kyoto and the modern streets of Tokyo...",
      image: "https://source.unsplash.com/random/800x600/?japan"
    },
    {
      title: "European Adventure",
      date: "2024-02-20",
      excerpt: "From the romantic streets of Paris to the historic ruins of Rome...",
      image: "https://source.unsplash.com/random/800x600/?europe"
    },
    {
      title: "Southeast Asian Tales",
      date: "2024-03-10",
      excerpt: "Discovering the hidden beaches of Thailand and ancient temples of Cambodia...",
      image: "https://source.unsplash.com/random/800x600/?thailand"
    }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold mb-8 text-center"
        >
          Travel Stories
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{story.date}</div>
                <h2 className="text-xl font-semibold mb-3">{story.title}</h2>
                <p className="text-gray-300">{story.excerpt}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TravelStories;
