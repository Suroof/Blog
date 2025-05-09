import React, { Suspense ,useEffect} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useScroll } from 'framer-motion';

const VehicleModel = ({ onLoaded }) => {
  const gltf = useGLTF('../assets/model/Car_secondCompressed.glb', true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (gltf.scene) {
      onLoaded();
    }
  }, [gltf.scene, onLoaded]);


  useFrame(() => {
    if (gltf.scene) {
      const progress = scrollYProgress.get();

      // 旋转效果
      gltf.scene.rotation.y = progress * Math.PI * 2;

      // 缩放效果：从8倍大小开始，随着滚动最大可以达到15倍大小
      const baseScale = 2;
      const maxScaleIncrease = 8;
      const scale = baseScale + (progress * maxScaleIncrease);
      gltf.scene.scale.set(scale, scale, scale);

      // 对角线移动效果
      // 移动路径
      const startX = -30;
      const startY = -4;
      const endX = 60;
      const endY = -4;

      // 计算当前位置
      const currentX = startX + (progress * (endX - startX));
      const currentY = startY + (progress * (endY - startY));

      // 设置位置，保持z位置不变
      gltf.scene.position.set(
        currentX,
        currentY,
        0
      );
    }
  });

  return (
    <primitive
      object={gltf.scene}
      scale={8}
      position={[-8, 8, 0]}
    />
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

// 清除缓存
useGLTF.clear();

export default Background3D;
