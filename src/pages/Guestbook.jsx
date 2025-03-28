import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 模拟留言数据
const INITIAL_MESSAGES = [
  {
    id: 1,
    name: '小明',
    avatar: 'https://i.pravatar.cc/150?img=1',
    message: '博客设计得很不错，内容也很丰富！',
    date: '2023-09-15 14:30',
    likes: 5
  },
  {
    id: 2,
    name: '晓华',
    avatar: 'https://i.pravatar.cc/150?img=2',
    message: '期待更多的技术内容分享，支持一下！',
    date: '2023-09-14 10:15',
    likes: 3
  },
  {
    id: 3,
    name: '科技爱好者',
    avatar: 'https://i.pravatar.cc/150?img=3',
    message: '你的博客给了我很多灵感，继续加油！希望能看到更多关于前端开发的内容。',
    date: '2023-09-12 21:45',
    likes: 7
  }
];

const Guestbook = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, mostLiked

  // 提交新留言
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !name.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: name.trim(),
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      message: newMessage.trim(),
      date: new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      likes: 0
    };

    setMessages([newEntry, ...messages]);
    setNewMessage('');
    setName('');
  };

  // 点赞功能
  const handleLike = (id) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
      )
    );
  };

  // 根据选择的排序方式排序留言
  const sortedMessages = [...messages].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'mostLiked') {
      return b.likes - a.likes;
    }
    return 0;
  });

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          留言板
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 text-center">
          欢迎在这里留下你的想法和建议
        </p>

        {/* 留言表单 */}
        <div className="bg-gray-800 rounded-xl p-6 mb-12 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-6">写下你的留言</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                你的名字
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入你的名字"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                留言内容
              </label>
              <textarea
                id="message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                placeholder="写点什么吧..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              发布留言
            </button>
          </form>
        </div>

        {/* 排序选项 */}
        <div className="flex justify-end mb-6">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">最新</option>
            <option value="oldest">最早</option>
            <option value="mostLiked">最多点赞</option>
          </select>
        </div>

        {/* 留言列表 */}
        <div className="space-y-6">
          {sortedMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-800 rounded-xl p-5 shadow-md"
            >
              <div className="flex items-start gap-4">
                <img
                  src={msg.avatar}
                  alt={`${msg.name} 的头像`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-white">{msg.name}</h3>
                    <span className="text-gray-400 text-sm">{msg.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{msg.message}</p>
                  <button
                    onClick={() => handleLike(msg.id)}
                    className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      ></path>
                    </svg>
                    <span>{msg.likes} 点赞</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {messages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">还没有留言，来留下第一条吧！</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Guestbook;