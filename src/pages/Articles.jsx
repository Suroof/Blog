import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../utils/blog-data";
import { IconCloud } from "@/components/magicui/icon-cloud";

const Articles = () => {
  // 按日期排序文章（从新到旧）
  const sortedArticles = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
   
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <PageLayout title="Articles">
      {/* 分类标签 */}
      <div className="flex flex-wrap gap-3 mb-10">
        {BLOG_CATEGORIES.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.name.toLowerCase()}`}
            className="bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 px-3 py-1 rounded-full text-sm transition-colors"
          >
            {category.name} ({category.count})
          </Link>
        ))}
      </div>

      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>

      {/* 文章列表 */}
      <div className="grid gap-6">
        {sortedArticles.map((article) => (
          <motion.div
            key={article.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to={`/blog/${article.slug}`}
              className="block bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h2 className="text-2xl font-bold mb-2 sm:mb-0 text-white">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm">{article.date}</p>
              </div>

              <p className="text-gray-300 mb-5">{article.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {article.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-xs px-2 py-1 rounded text-gray-400"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="flex justify-end mt-4">
                <span className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                  阅读全文
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Articles;
