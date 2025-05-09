import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../utils/blog-data';

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">文章不存在</h1>
        <p className="text-gray-300 mb-8">抱歉，找不到您请求的文章。</p>
        <Link
          to="/articles"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          返回文章列表
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* 顶部标签导航 */}
      <div className="bg-gray-800/30 backdrop-blur-sm py-3 mb-8">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {post.categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.toLowerCase()}`}
                className="bg-white text-gray-500 hover:bg-gray-700 hover:text-white  px-3 py-1 rounded-full text-sm"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 bg-white rounded-[16px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 文章标题和作者信息 */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6 pt-6">{post.title}</h1>
          <div className="flex items-center mb-8">
            <div className="flex items-center">
              <span className="text-gray-400 text-sm">
                {post.author} • {post.date}
              </span>
            </div>
          </div>

          {/* 文章内容 */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            {post.content.map((paragraph, index) => {
              // 处理特殊格式：引用
              if (paragraph.type === 'quote') {
                return (
                  <blockquote key={index} className="border-l-4 border-gray-500 pl-4 py-1 my-6 text-gray-400 italic">
                    {paragraph.content.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    {paragraph.author && (
                      <footer className="text-right mt-2">~ {paragraph.author}</footer>
                    )}
                  </blockquote>
                );
              }

              // 处理特殊格式：标题
              if (paragraph.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-10 mb-6 text-gray-700">
                    {paragraph.content}
                  </h2>
                );
              }

              // 处理图片
              if (paragraph.type === 'image') {
                return (
                  <div key={index} className="my-8">
                    <img
                      src={paragraph.src}
                      alt={paragraph.alt || 'Blog image'}
                      className="w-full rounded-lg shadow-lg"
                    />
                    {paragraph.caption && (
                      <p className="text-center text-gray-400 mt-2 text-sm italic">
                        {paragraph.caption}
                      </p>
                    )}
                  </div>
                );
              }

              // 普通段落
              return (
                <p key={index} className="text-gray-800 mb-6 leading-relaxed">
                  {paragraph.content || paragraph}
                </p>
              );
            })}
          </div>

          {/* 作者信息 */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <img
                src={post.authorAvatar || "https://i.pravatar.cc/150?img=37"}
                alt={`${post.author} 的头像`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-white text-lg mb-2">{post.author}</h3>
                <p className="text-gray-300">{post.authorBio || "博客作者，热爱技术与分享。"}</p>
              </div>
            </div>
          </div>

          {/* 导航链接 */}
          <div className="flex justify-between mt-16 pt-8 border-t border-gray-700">
            {post.prevPost ? (
              <Link
                to={`/blog/${post.prevPost.slug}`}
                className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>上一篇: {post.prevPost.title}</span>
              </Link>
            ) : (
              <div></div>
            )}

            {post.nextPost ? (
              <Link
                to={`/blog/${post.nextPost.slug}`}
                className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-6"
              >
                <span>下一篇: {post.nextPost.title}</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;