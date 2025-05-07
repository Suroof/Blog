import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

const Life = () => {
  const stories = [
    {
      title: "一个人逛西湖",
      date: "2023-10-15",
      content: "秋天的西湖，微风轻拂，金色的阳光洒在湖面上，波光粼粼。断桥残雪虽无雪，却有别样的韵味...",
      image: "/西湖.webp",
      tags: ["旅行", "摄影", "风景"]
    },
    {
      title: "我的阅读角落",
      date: "2023-09-28",
      content: "在家里打造了一个温馨的阅读角落，一盏暖色调的台灯，一把舒适的椅子，还有一杯冒着热气的咖啡...",
      image: "/阅读.webp",
      tags: ["生活", "阅读", "家居"]
    },
    {
      title: "城市漫步",
      date: "2023-08-20",
      content: "傍晚时分的城市街道总是充满魅力，霓虹灯初上，人来人往，每个人都在演绎着自己的故事...",
      image: "/城市漫步.webp",
      tags: ["城市", "随笔", "感悟"]
    }
  ];

  return (
    <PageLayout title="Life Stories">
      <div className="space-y-8">
        {stories.map((story, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 h-64 md:w-96">
                <div className="h-full w-full bg-gray-800 flex items-center justify-center text-gray-500">
                  {story.image ? (
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{story.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{story.date}</p>
                <p className="text-gray-300 leading-relaxed">{story.content}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                  阅读更多 →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
};

export default Life;
