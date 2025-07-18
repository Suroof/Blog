import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
/* eslint-disable react/prop-types */
const VehicleModel = ({ onLoaded }) => {
  // 加载低质量模型
  const lowQualityModel = useGLTF('../assets/model/Car_secondCompressed.glb', true);
  // 跟踪高质量模型加载状态
  const [_highQualityModelLoaded, setHighQualityModelLoaded] = useState(false);
  // 引用高质量模型
  const highQualityModelRef = useRef(null);
  // 当前显示的模型
  const [currentModel, setCurrentModel] = useState('lowQuality');
  const { scrollYProgress } = useScroll();
  // 记录是否已通知加载完成
  const hasNotifiedLoaded = useRef(false);

  // 初始低质量模型加载完成通知
  useEffect(() => {
    if (lowQualityModel.scene && !hasNotifiedLoaded.current) {
      console.log("低质量模型加载完成");
      onLoaded();
      hasNotifiedLoaded.current = true;
    }
  }, [lowQualityModel.scene, onLoaded]);

  // 在后台加载高质量模型
  useEffect(() => {
    const loadHighQualityModel = async () => {
      try {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(
          '../assets/model/Car.glb',
          (gltf) => {
            console.log("高质量模型加载完成");

            // 确保高质量模型与低质量模型具有相同的初始位置、旋转和缩放
            if (lowQualityModel.scene) {
              gltf.scene.position.copy(lowQualityModel.scene.position);
              gltf.scene.rotation.copy(lowQualityModel.scene.rotation);
              gltf.scene.scale.copy(lowQualityModel.scene.scale);
            }

            // 保存高质量模型引用
            highQualityModelRef.current = gltf;

            // 标记高质量模型已加载
            setHighQualityModelLoaded(true);

            // 切换到高质量模型
            setTimeout(() => {
              console.log("切换到高质量模型");
              setCurrentModel('highQuality');
            }, 100); // 短暂延迟确保切换平滑
          },
          // 进度回调
          (xhr) => {
            const progress = (xhr.loaded / xhr.total) * 100;
            console.log(`高质量模型加载进度: ${progress.toFixed(2)}%`);
          },
          // 错误回调
          (error) => {
            console.error('加载高质量模型出错:', error);
          }
        );
      } catch (error) {
        console.error('加载高质量模型失败:', error);
      }
    };

    // 延迟一秒开始加载高质量模型，让低质量模型有时间渲染
    const timer = setTimeout(loadHighQualityModel, 1000);

    return () => clearTimeout(timer);
  }, [lowQualityModel.scene]);

  // 处理动画和渲染
  useFrame(() => {
    // 根据当前模型类型选择要操作的模型
    const modelToAnimate = currentModel === 'lowQuality'
      ? lowQualityModel.scene
      : (highQualityModelRef.current?.scene || null);

    if (modelToAnimate) {
      const progress = scrollYProgress.get();

      // 旋转效果
      modelToAnimate.rotation.y = progress * Math.PI * 2;

      // 缩放效果：从基础大小开始，随着滚动增加
      const baseScale = 2;
      const maxScaleIncrease = 8;
      const scale = baseScale + (progress * maxScaleIncrease);
      modelToAnimate.scale.set(scale, scale, scale);

      // 对角线移动效果
      const startX = -30;
      const startY = -4;
      const endX = 60;
      const endY = -4;

      // 计算当前位置
      const currentX = startX + (progress * (endX - startX));
      const currentY = startY + (progress * (endY - startY));

      // 设置位置，保持z位置不变
      modelToAnimate.position.set(
        currentX,
        currentY,
        0
      );
    }
  });

  return (
    <>
      {/* 条件渲染模型 - 加载高质量模型前显示低质量模型，之后只显示高质量模型 */}
      {currentModel === 'lowQuality' ? (
        <primitive
          object={lowQualityModel.scene}
          scale={8}
          position={[-8, 8, 0]}
        />
      ) : highQualityModelRef.current ? (
        <primitive
          object={highQualityModelRef.current.scene}
          scale={8}
          position={[-8, 8, 0]}
        />
      ) : null}
    </>
  );
};

const Background3D = ({ onLoaded }) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        gl={{ antialias: true }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 30]}
          fov={75}
        />
        <color attach="background" args={['#000000']} />

        {/* 柔和的环境光照 */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} />

        <Suspense fallback={null}>
          <VehicleModel onLoaded={onLoaded} />  {/* 传递回调 */}
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
};

// 预加载低质量模型，这样可以更快地显示
useGLTF.preload('../assets/model/Car_secondCompressed.glb');
useGLTF.clear();

export default Background3D;
