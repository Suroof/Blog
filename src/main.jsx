import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initPerformanceMonitoring, monitorResourceLoading, monitorLongTasks } from './utils/performanceMonitor';

// 安全初始化性能监控
const initMonitoring = () => {
  try {
    // 只在生产环境和支持Performance API的浏览器中启用性能监控
    if (import.meta.env.PROD && typeof window !== 'undefined' && 'performance' in window) {
      console.log('初始化性能监控...');

      // 初始化性能监控
      initPerformanceMonitoring({
        reportToConsole: false, // 生产环境不在控制台打印
        reportToAnalytics: false, // 暂时不发送到分析服务，直到确认API端点可用
        analyticsEndpoint: '/api/metrics', // 可以根据需要配置
      });

      // 间隔一段时间后启动其他监控
      setTimeout(() => {
        try {
          // 监控资源加载
          monitorResourceLoading();

          // 监控长任务
          monitorLongTasks();
        } catch (err) {
          console.warn('启动额外监控时发生错误:', err);
        }
      }, 3000);
    }
  } catch (err) {
    console.warn('性能监控初始化失败:', err);
  }
};

// 在应用渲染后安全地初始化监控
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// 延迟初始化性能监控，确保不影响应用启动
if (import.meta.env.PROD) {
  window.addEventListener('load', () => {
    setTimeout(initMonitoring, 1000);
  });
}