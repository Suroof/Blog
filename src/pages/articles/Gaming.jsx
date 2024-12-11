import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

const Gaming = () => {
  const games = [
    {
      title: "塞尔达传说：王国之泪",
      date: "2023-05-12",
      rating: "9.8/10",
      review: "开放世界的新标杆，创新的游戏机制和令人惊叹的自由度",
      image: "/games/zelda.jpg"
    },
    {
      title: "艾尔登法环",
      date: "2022-02-25",
      rating: "9.5/10",
      review: "魂系列的巅峰之作，开放世界设计与挑战性的完美结合",
      image: "/games/elden-ring.jpg"
    },
    {
      title: "星空",
      date: "2023-09-06",
      rating: "8.5/10",
      review: "伯塞斯达的野心之作，太空探索与角色扮演的完美融合",
      image: "/games/starfield.jpg"
    }
  ];

  return (
    <PageLayout title="Gaming Blog">
      <div className="space-y-8">
        {games.map((game, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 h-48 md:h-full md:w-64">
                <div className="h-full w-full bg-gray-800 flex items-center justify-center text-gray-500">
                  {game.image ? (
                    <img
                      src={game.image}
                      alt={game.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold text-white">{game.title}</h2>
                  <span className="ml-4 px-3 py-1 bg-blue-500/20 rounded-full text-blue-300">
                    {game.rating}
                  </span>
                </div>
                <p className="mt-2 text-gray-400 text-sm">{game.date}</p>
                <p className="mt-4 text-gray-300">{game.review}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Gaming;
