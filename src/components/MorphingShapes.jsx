import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// شكل هندسي متغير
function MorphingShape({ position, scrollY }) {
  const meshRef = useRef();
  const materialRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      // تغيير الشكل بناءً على التمرير
      const scrollFactor = scrollY.current * 0.01;
      
      // دوران مع التمرير
      meshRef.current.rotation.x = time * 0.5 + scrollFactor;
      meshRef.current.rotation.y = time * 0.3 + scrollFactor * 0.5;
      meshRef.current.rotation.z = scrollFactor * 0.2;
      
      // تغيير الحجم
      const scale = 1 + Math.sin(time + scrollFactor) * 0.3;
      meshRef.current.scale.set(scale, scale, scale);
      
      // تحريك الموضع
      meshRef.current.position.y = position[1] + Math.sin(time + scrollFactor) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.5) * 0.2;
    }
    
    if (materialRef.current) {
      // تغيير اللون مع التمرير
      const hue = (time * 0.1 + scrollY.current * 0.001) % 1;
      materialRef.current.color.setHSL(hue, 0.6, 0.5);
      materialRef.current.opacity = 0.7 + Math.sin(time) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[0.8, 0]} />
      <meshBasicMaterial 
        ref={materialRef}
        transparent 
        wireframe={true}
      />
    </mesh>
  );
}

// مكون الأشكال المتغيرة
export default function MorphingShapes({ scrollY }) {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 10], 
          fov: 45
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        {/* أشكال متعددة في مواضع مختلفة */}
        <MorphingShape position={[4, 2, -3]} scrollY={scrollY} />
        <MorphingShape position={[-4, -1, -4]} scrollY={scrollY} />
        <MorphingShape position={[2, -3, -2]} scrollY={scrollY} />
        <MorphingShape position={[-3, 3, -5]} scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
