import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../../components/layout/PageLayout";

const Work = () => {
  const workExperiences = [
    {
      title: "深圳东宝软件东莞分公司",
      date: "2024-08 - 2024-11",
      excerpt:
        "1.接受二次开发的培训，详细了解各个环节和开发模式。熟练掌握公司提供的二次开发工具，结合Vue、MySQL以及Spring框架等先进技术，针对客户的具体需求，对功能模块进行精细设计，使用javascript和vue进行功能排版和对接，用Mysql进行数据筛选，对客户要求的功能模块进行布局和实现，保持代码规范性。学会了使用钩子函数，实现数据监听和响应功能。",
      image: "/软件.png",
      technologies: ["Vue", "JavaScript", "MSql", "前端"],
    },
    {
      title: " 佛山市洛海尼网络销售公司 ",
      date: "2024.7 - 2024.8",
      excerpt:
        "数据分析与优化:利用工具监控每日流量和用户行为，提交优化方案并成功提升商品点击率15%、销售额20%。电商运营执行:负责商品上架与��容优化，增加曝光量 30%。活动策划与效果追踪:协助制定促销策略并复盘活动效果，显著改善店铺运营效率。 ",
      image: "/运营.png",
      technologies: ["客户关系", "拼多多", "百度统计", "需求分析"],
    },
    {
      title: "家教老师",
      date: "2022-09 - 2024-12",
      excerpt: "共有六段家教经验，专注培养学生英语，从听说读写各方面同步提高。",
      image: "/teach.jpg",
      technologies: ["English", "Teacher"],
    },
  ];

  return (
    <PageLayout title="职业经历">
      <div className="space-y-16">
        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2 gap-8 h-[500px]">
              <div className="h-full w-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover object-center"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-white">
                      {experience.title}
                    </h2>
                    <span className="text-lg text-gray-400">
                      {experience.date}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {experience.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Work;
