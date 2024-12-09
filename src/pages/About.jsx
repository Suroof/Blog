import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg p-8"
      >
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h1>
        <div className="space-y-6 text-gray-300">
          <p>
            Hi! I'm a passionate developer who loves creating beautiful and functional web experiences.
            With expertise in modern web technologies, I specialize in building interactive 3D applications
            and responsive user interfaces.
          </p>
          <p>
            My journey in web development started with a fascination for creating visually stunning
            websites that push the boundaries of what's possible in a browser. Today, I work with
            cutting-edge technologies like Three.js, React, and WebGL to bring creative visions to life.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Three.js', 'WebGL', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;