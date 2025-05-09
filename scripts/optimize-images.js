// 图像优化脚本
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// 获取当前文件和目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建目录如果不存在
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// 优化图像并创建不同尺寸的版本
const optimizeImage = async (inputPath, outputDir, options = {}) => {
  const filename = path.basename(inputPath);
  const nameWithoutExt = filename.split('.')[0];
  const ext = path.extname(inputPath).slice(1);

  // 确保输出目录存在
  ensureDirectoryExists(outputDir);

  try {
    // 读取原始图像
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`处理图像: ${filename} (${metadata.width}x${metadata.height})`);

    // 创建小尺寸版本 (400px 宽)
    await image
      .resize(400, null, { fit: 'inside' })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${nameWithoutExt}-small.webp`));
    console.log(`创建了小尺寸版本: ${nameWithoutExt}-small.webp`);

    // 创建中等尺寸版本 (800px 宽)
    await image
      .resize(800, null, { fit: 'inside' })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${nameWithoutExt}-medium.webp`));
    console.log(`创建了中等尺寸版本: ${nameWithoutExt}-medium.webp`);

    // 创建占位符版本 (非常小且模糊，用于LQIP)
    await image
      .resize(20, null, { fit: 'inside' })
      .blur(10)
      .webp({ quality: 20 })
      .toFile(path.join(outputDir, `${nameWithoutExt}-placeholder.webp`));
    console.log(`创建了占位符版本: ${nameWithoutExt}-placeholder.webp`);

    // 优化原始大小版本
    await image
      .webp({ quality: 85, effort: 6 })
      .toFile(path.join(outputDir, `${nameWithoutExt}.webp`));
    console.log(`优化了原始大小版本: ${nameWithoutExt}.webp`);

    return true;
  } catch (error) {
    console.error(`处理 ${filename} 时出错:`, error);
    return false;
  }
};

// 主函数
const main = async () => {
  const imagesToOptimize = [
    {
      input: path.join(__dirname, '../public/astronaut.webp'),
      outputDir: path.join(__dirname, '../public/images/astronaut')
    }
  ];

  console.log('开始图像优化...');

  for (const image of imagesToOptimize) {
    await optimizeImage(image.input, image.outputDir);
  }

  console.log('图像优化完成！');
};

// 运行主函数
main().catch(console.error);