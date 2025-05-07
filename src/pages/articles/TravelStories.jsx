import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

const TravelStories = () => {
  const stories = [
    {
      title: "贵州之行",
      date: "2024-01-15",
      excerpt: "在千户苗寨，我体验了苗族文化的独特魅力，在贵阳，我参观了甲秀楼，品尝了贵州的美食。",
      image: "/贵州.webp",
      link: "" // 添加链接
    },
    {
      title: "新加坡之旅",
      date: "2024-02-20",
      excerpt: "新加坡之旅让我印象深刻，美丽的花园城市，体验到了多元文化的交融",
      image: "/新加坡.webp",
      link: "#" // 添加链接
    },
    {
      title: "五羊广州",
      date: "2024-03-10",
      excerpt: "在广州，我探索了这座千年商都的历史遗迹，品尝了地道的广式早茶，感受了南粤文化的独特魅力。",
      image: "/广州.webp",
      link: "#" // 添加链接
    }
  ];

  return (
    <PageLayout title="Travel Stories">
      <div className="space-y-16">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden h-[400px]"
          >
            <div className="h-full md:grid md:grid-cols-2 gap-8">
              <div className="h-full w-full">
                <div className="h-full w-full bg-gray-700">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">{story.title}</h2>
                  <span className="text-lg text-gray-400">{story.date}</span>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {story.excerpt}
                </p>

                {/* <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-semibold"
                >
                  阅读更多
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default TravelStories;
