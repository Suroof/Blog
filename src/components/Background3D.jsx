import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  const meshRef = useRef();
  const { scrollYProgress } = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollYProgress.get() * Math.PI * 2;
      meshRef.current.rotation.x = scrollYProgress.get() * Math.PI;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[8, 3, 200, 32]} />
      <meshPhongMaterial
        color="#4338ca"
        wireframe
        emissive="#2563eb"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Scene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
