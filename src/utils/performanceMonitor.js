/**
 * 性能监控工具
 * 用于收集和报告应用性能指标
 */

// 存储性能指标
const metrics = {
  // 首次内容绘制
  FCP: 0,
  // 最大内容绘制
  LCP: 0,
  // 首次输入延迟
  FID: 0,
  // 累积布局偏移
  CLS: 0,
  // 首次字节时间
  TTFB: 0,
  // 交互时间
  TTI: 0,
  // 自定义指标
  custom: {},
};

/**
 * 初始化性能监控
 * @param {Object} options - 配置选项
 * @param {boolean} options.reportToConsole - 是否在控制台报告
 * @param {boolean} options.reportToAnalytics - 是否报告到分析服务
 * @param {string} options.analyticsEndpoint - 分析服务端点
 */
export const initPerformanceMonitoring = (options = {}) => {
  const {
    reportToConsole = true,
    reportToAnalytics = false,
    analyticsEndpoint = '',
  } = options;

  // 只在支持Performance API的浏览器中运行
  if (typeof window === 'undefined' || !('performance' in window) || !('PerformanceObserver' in window)) {
    console.warn('Performance API not supported in this browser');
    return;
  }

  // 监控首次内容绘制 (FCP)
  try {
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (!entries || entries.length === 0) return;

      const fcpEntry = entries[entries.length - 1];
      if (fcpEntry) {
        metrics.FCP = fcpEntry.startTime;
        if (reportToConsole) console.log('FCP:', metrics.FCP);
      }
    });
    fcpObserver.observe({ type: 'paint', buffered: true });
  } catch (e) {
    console.warn('FCP monitoring not supported', e);
  }

  // 监控最大内容绘制 (LCP)
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (!entries || entries.length === 0) return;

      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        metrics.LCP = lcpEntry.startTime;
        if (reportToConsole) console.log('LCP:', metrics.LCP);
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.warn('LCP monitoring not supported', e);
  }

  // 监控首次输入延迟 (FID)
  try {
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (!entries || entries.length === 0) return;

      const fidEntry = entries[entries.length - 1];
      if (fidEntry) {
        metrics.FID = fidEntry.processingStart - fidEntry.startTime;
        if (reportToConsole) console.log('FID:', metrics.FID);
      }
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.warn('FID monitoring not supported', e);
  }

  // 监控累积布局偏移 (CLS)
  try {
    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries = [];

    // 确保数据是安全的
    const safeSessionEntries = () => {
      if (!Array.isArray(sessionEntries) || sessionEntries.length === 0) {
        sessionEntries = [];
        return false;
      }
      return true;
    };

    const entryHandler = (entries) => {
      // 确保entries是数组且有内容
      if (!entries || !Array.isArray(entries) || entries.length === 0) {
        return;
      }

      entries.forEach((entry) => {
        // 只有不涉及最近用户输入的布局偏移才计入 CLS
        if (!entry || !entry.hadRecentInput) {
          // 防止首次运行时没有sessionEntries
          if (sessionValue > 0 && safeSessionEntries()) {
            const firstSessionEntry = sessionEntries[0];
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

            // 如果条目与上一个条目的间隔小于1秒且与第一个条目的间隔小于5秒，则将其添加到当前会话
            if (
              entry.startTime - lastSessionEntry.startTime < 1000 &&
              entry.startTime - firstSessionEntry.startTime < 5000
            ) {
              sessionValue += entry.value;
              sessionEntries.push(entry);
            } else {
              sessionValue = entry.value;
              sessionEntries = [entry];
            }
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }

          // 如果当前会话值大于存储的 CLS 值，则更新 CLS
          if (sessionValue > clsValue) {
            clsValue = sessionValue;

            // 更新度量
            metrics.CLS = clsValue;
            if (reportToConsole) console.log('CLS:', metrics.CLS);
          }
        }
      });
    };

    const clsObserver = new PerformanceObserver((entryList) => {
      try {
        const entries = entryList.getEntries();
        if (entries && Array.isArray(entries)) {
          entryHandler(entries);
        }
      } catch (err) {
        console.warn('Error processing CLS entries:', err);
      }
    });

    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.warn('CLS monitoring not supported', e);
  }

  // 监控首次字节时间 (TTFB)
  try {
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries && navigationEntries.length > 0) {
      metrics.TTFB = navigationEntries[0].responseStart;
      if (reportToConsole) console.log('TTFB:', metrics.TTFB);
    }
  } catch (e) {
    console.warn('TTFB monitoring not supported', e);
  }

  // 在页面加载完成后报告所有指标
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (reportToAnalytics && analyticsEndpoint) {
        // 发送数据到分析服务
        try {
          fetch(analyticsEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(metrics),
          }).catch(e => console.error('Failed to report metrics:', e));
        } catch (e) {
          console.warn('Error reporting metrics:', e);
        }
      }
    }, 2000); // 等待2秒以确保所有指标都已收集
  });
};

/**
 * 记录自定义性能指标
 * @param {string} name - 指标名称
 * @param {number} value - 指标值
 * @param {boolean} reportToConsole - 是否在控制台报告
 */
export const recordCustomMetric = (name, value, reportToConsole = true) => {
  if (!metrics.custom[name]) {
    metrics.custom[name] = [];
  }

  metrics.custom[name].push({
    value,
    timestamp: typeof performance !== 'undefined' ? performance.now() : Date.now(),
  });

  if (reportToConsole) {
    console.log(`Custom metric - ${name}:`, value);
  }
};

/**
 * 开始测量自定义性能指标
 * @param {string} name - 指标名称
 * @returns {function} - 停止测量并记录结果的函数
 */
export const startMeasure = (name) => {
  const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();

  return () => {
    const endTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const duration = endTime - startTime;
    recordCustomMetric(name, duration);
    return duration;
  };
};

/**
 * 获取当前收集的所有性能指标
 * @returns {Object} - 性能指标对象
 */
export const getPerformanceMetrics = () => {
  return { ...metrics };
};

/**
 * 监控资源加载性能
 */
export const monitorResourceLoading = () => {
  try {
    // 确保浏览器环境
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const resourceObserver = new PerformanceObserver((list) => {
      try {
        const resources = list.getEntries();
        if (!resources || !Array.isArray(resources) || resources.length === 0) {
          return;
        }

        resources.forEach(resource => {
          if (!resource) return;

          // 只关注大型资源或加载时间长的资源
          if (resource.duration > 500 || resource.transferSize > 500000) {
            console.warn('Slow resource:', {
              name: resource.name || 'unknown',
              type: resource.initiatorType || 'unknown',
              duration: (resource.duration || 0) + 'ms',
              size: ((resource.transferSize || 0) / 1024).toFixed(2) + 'KB',
            });
          }
        });
      } catch (err) {
        console.warn('Error processing resource entries:', err);
      }
    });

    resourceObserver.observe({ type: 'resource', buffered: true });
  } catch (e) {
    console.warn('Resource monitoring not supported', e);
  }
};

/**
 * 监控长任务
 */
export const monitorLongTasks = () => {
  try {
    // 确保浏览器环境
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const longTaskObserver = new PerformanceObserver((list) => {
      try {
        const entries = list.getEntries();
        if (!entries || !Array.isArray(entries)) {
          return;
        }

        entries.forEach(entry => {
          if (!entry) return;

          console.warn('Long task detected:', {
            duration: (entry.duration || 0) + 'ms',
            startTime: entry.startTime || 0,
            attribution: entry.attribution || 'unknown',
          });
        });
      } catch (err) {
        console.warn('Error processing long task entries:', err);
      }
    });

    longTaskObserver.observe({ type: 'longtask', buffered: true });
  } catch (e) {
    console.warn('Long task monitoring not supported', e);
  }
};
