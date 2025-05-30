import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../../components/layout/PageLayout";

const Work = () => {
  const workExperiences = [
    {
      title: "深圳东宝软件东莞分公司",
      date: "2024-03 - 2024-07",
      excerpt:
        "1.接受业务培训，详细了解各个环节和开发模式，完善客户所要求的erp系统功能。2.熟练掌握公司提供的开发工具，结合Vue、MySQL以及Spring框架等先进技术，针对客户的具体需求，对功能模块进行精细设计，使用javascript和vue进行功能排版和对接，用Mysql进行数据筛选，对客户要求的功能模块进行布局和实现，保持代码规范性，成功完成多个功能模块的开发与优化，客户对系统的稳定性和功能性表示高度认可。3.学会了使用钩子函数，实现数据监听和响应功能。",
      image: "/软件.webp",
      technologies: ["Vue", "JavaScript", "MSql", "Saas"],
    },
    {
      title: "信封云科技公司",
      date: "2024.09 - 2025.02",
      excerpt:
        "1.使用Figma与团队协作完成网站UI/UX设计，确保设计符合用户体验和品牌调性，基于WordPress搭建网站，集成SEO插件优化搜索引擎排名，提升网站可见性，网站上线后，通过SEO优化，网站排名提升20%，用户访问量增长30，采用响应式设计，确保多端适配，实现表单功能，支持用户信息收集与处理，对i18n国际化功能进行性能优化，减少资源加载时间，提升多语言支持效率，网站上线后，SEO排名显著提升，用户访问量增长30%。2.参与蓝牙设备安卓应用开发项目，负责应用UI界面的设计与代码实现，确保界面美观且符合用户操作习惯，使用Ionic+Capacitor框架开发跨平台安卓应用，支持蓝牙设备连接与数据交互，优化应用加载速度，将首屏渲染时间从3.2缩至1.8s，提升整体性能，通过代码优化和资源压缩，降低应用内存占用，提升运行流畅度。",
      image: "/运营.webp",
      technologies: ["客户关系", "性能优化", "UI设计", "需求分析"],
    },
    {
      title: "华世界",
      date: "2025.02 - 2025.05",
      excerpt:
        "1.接受业务培训，熟练掌握业务框架和产品设计逻辑。2.基于 qiankun 的微前端架构，技术栈采用React+TS，独立完成子应用开发，通过与产品经理紧密沟通及与后端高效联调，提前10天交付，显著提升项目整体进度",
      image: "https://pic1.imgdb.cn/item/6818781258cb8da5c8dd57e0.png",
      technologies: ["CRM", "React", "echOS", "需求分析"],
    },
    {
      title: "家教老师",
      date: "2022-09 - 2024-12",
      excerpt: "共有六段家教经验，专注培养学生英语，从听说读写各方面同步提高。",
      image: "/teach.webp",
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
