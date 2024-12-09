import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { Sphere } from '@react-three/drei';

const Scene = () => {
  const spheresRef = useRef([]);
  const { scrollYProgress } = useScroll();

  // Create multiple spheres in a spiral pattern
  const spheres = Array.from({ length: 50 }, (_, i) => {
    const angle = (i / 50) * Math.PI * 4;
    const radius = 10 + (i / 10);
    return {
      position: [
        Math.cos(angle) * radius,
        (i / 5) - 20,
        Math.sin(angle) * radius
      ],
      scale: 0.5 + Math.random() * 0.5
    };
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    spheresRef.current.forEach((sphere, i) => {
      if (sphere) {
        const angle = (i / 50) * Math.PI * 4;
        const radius = 10 + (i / 10);
        sphere.position.x = Math.cos(angle + time * 0.1) * radius;
        sphere.position.z = Math.sin(angle + time * 0.1) * radius;
        sphere.rotation.x = time * 0.2 + scrollYProgress.get() * Math.PI;
        sphere.rotation.y = time * 0.1 + scrollYProgress.get() * Math.PI * 2;
      }
    });
  });

  return (
    <group>
      {spheres.map((props, i) => (
        <mesh
          key={i}
          ref={el => spheresRef.current[i] = el}
          position={props.position}
          scale={[props.scale, props.scale, props.scale]}
        >
          <Sphere args={[1, 16, 16]}>
            <meshPhongMaterial
              color="#4338ca"
              wireframe
              emissive="#2563eb"
              emissiveIntensity={0.8}
              shininess={100}
            />
          </Sphere>
        </mesh>
      ))}
      <gridHelper args={[100, 100, "#1f2937", "#1f2937"]} position={[0, -10, 0]} />
    </group>
  );
};

export default Scene;