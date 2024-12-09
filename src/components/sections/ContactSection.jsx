import React from "react";
import { motion } from "framer-motion";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">人生易如反掌</h2>
            <p className="text-gray-400">
              Let's create something amazing together
            </p>
          </div>
          <div className="card">
            <div className="bg">
              <div className="card-content">
                <div className="card-image">
                  <img src="/house.png" alt="Description" />
                </div>
                <div className="card-text">
                  <h3>Future</h3>
                  <p>
                   梦想成为前端大神，Never give up！
                  </p>
                </div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
