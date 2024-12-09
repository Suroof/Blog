import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Articles = () => {
  const articles = [
    {
      title: "Getting Started with Three.js",
      date: "2024-01-20",
      description: "Learn how to create amazing 3D experiences on the web"
    },
    {
      title: "Modern React Best Practices",
      date: "2024-01-15",
      description: "Explore the latest patterns and practices in React development"
    }
  ];

  return (
    <PageLayout title="Articles">
      <div className="grid gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{article.date}</p>
            <p className="text-gray-300">{article.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Articles;