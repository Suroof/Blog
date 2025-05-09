import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initPerformanceMonitoring, monitorResourceLoading, monitorLongTasks } from './utils/performanceMonitor';

// 只在生产环境中启用性能监控
if (import.meta.env.PROD) {
  // 初始化性能监控
  initPerformanceMonitoring({
    reportToConsole: false, // 生产环境不在控制台打印
    reportToAnalytics: true, // 发送到分析服务
    analyticsEndpoint: '/api/metrics', // 可以根据需要配置
  });

  // 监控资源加载
  monitorResourceLoading();

  // 监控长任务
  monitorLongTasks();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)