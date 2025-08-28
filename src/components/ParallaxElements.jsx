import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// عنصر parallax واحد
function ParallaxElement({ position, scrollY, speed = 1, shape = 'sphere' }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      // حركة parallax بناءً على التمرير
      const parallaxY = scrollY.current * speed * 0.001;
      
      meshRef.current.position.y = position[1] + parallaxY;
      meshRef.current.position.x = position[0] + Math.sin(time * 0.2) * 0.5;
      
      // دوران بطيء
      meshRef.current.rotation.x = time * 0.1 * speed;
      meshRef.current.rotation.y = time * 0.05 * speed;
      
      // تأثير الشفافية حسب التمرير
      const opacity = Math.max(0.1, 0.4 - Math.abs(parallaxY) * 0.5);
      if (meshRef.current.material) {
        meshRef.current.material.opacity = opacity;
      }
    }
  });

  const geometry = shape === 'box' ? 
    <boxGeometry args={[1, 1, 1]} /> :
    shape === 'octahedron' ?
    <octahedronGeometry args={[0.8]} /> :
    <sphereGeometry args={[0.6, 16, 16]} />;

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshBasicMaterial 
        color={shape === 'box' ? "#22C55E" : shape === 'octahedron' ? "#38BDF8" : "#16A34A"}
        transparent 
        opacity={0.3}
        wireframe={true}
      />
    </mesh>
  );
}

// مكون العناصر المتوازية
export default function ParallaxElements({ scrollY }) {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 12], 
          fov: 40
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        
        {/* عناصر بسرعات parallax مختلفة */}
        <ParallaxElement position={[5, 3, -2]} scrollY={scrollY} speed={0.5} shape="sphere" />
        <ParallaxElement position={[-5, 1, -3]} scrollY={scrollY} speed={0.8} shape="box" />
        <ParallaxElement position={[3, -2, -4]} scrollY={scrollY} speed={1.2} shape="octahedron" />
        <ParallaxElement position={[-3, 4, -1]} scrollY={scrollY} speed={0.3} shape="sphere" />
        <ParallaxElement position={[6, -1, -5]} scrollY={scrollY} speed={1.5} shape="box" />
        <ParallaxElement position={[-6, -3, -2]} scrollY={scrollY} speed={0.7} shape="octahedron" />
        
        {/* عناصر أكثر للعمق */}
        <ParallaxElement position={[2, 5, -6]} scrollY={scrollY} speed={0.4} shape="sphere" />
        <ParallaxElement position={[-4, -4, -3]} scrollY={scrollY} speed={1.1} shape="box" />
      </Canvas>
    </div>
  );
}
