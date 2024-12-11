import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

const Music = () => {
  const playlists = [
    {
      title: "编程专注力歌单",
      description: "适合编程时听的轻音乐和电子音乐",
      tracks: [
        "Ludovico Einaudi - Experience",
        "Hans Zimmer - Time",
        "Max Richter - On The Nature Of Daylight"
      ],
      mood: "专注"
    },
    {
      title: "放松心情",
      description: "帮助放松和减压的轻柔音乐",
      tracks: [
        "Joe Hisaishi - Summer",
        "Yiruma - River Flows in You",
        "Brian Crain - Butterfly Waltz"
      ],
      mood: "放松"
    },
    {
      title: "动力满满",
      description: "提升能量的激励音乐",
      tracks: [
        "Two Steps From Hell - Victory",
        "Thomas Bergersen - Empire of Angels",
        "Audiomachine - Tree of Life"
      ],
      mood: "激励"
    }
  ];

  return (
    <PageLayout title="Music Collection">
      <div className="space-y-8">
        {playlists.map((playlist, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">{playlist.title}</h2>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300">
                {playlist.mood}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{playlist.description}</p>
            <div className="space-y-2">
              {playlist.tracks.map((track, trackIndex) => (
                <div
                  key={trackIndex}
                  className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-full">
                    <span className="text-blue-300">{trackIndex + 1}</span>
                  </div>
                  <span className="text-gray-300">{track}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Music;
