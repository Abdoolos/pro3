import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// مكون الجسيمات المتحركة
function AnimatedParticles({ mouse }) {
  const ref = useRef();
  const sphereRef = useRef();
  
  // إنشاء الجسيمات بشكل عشوائي
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1500 * 3); // 1500 جسيم لأداء أفضل
    const colors = new Float32Array(1500 * 3);
    
    for (let i = 0; i < 1500; i++) {
      // توزيع الجسيمات في الفضاء
      positions[i * 3] = (Math.random() - 0.5) * 15;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
      
      // ألوان متدرجة (أخضر وأزرق)
      const greenIntensity = Math.random();
      const blueIntensity = Math.random() * 0.6;
      colors[i * 3] = greenIntensity * 0.3;     // أحمر قليل
      colors[i * 3 + 1] = greenIntensity;       // أخضر قوي
      colors[i * 3 + 2] = blueIntensity;        // أزرق متوسط
    }
    
    return [positions, colors];
  }, []);

  // تحديث الحركة في كل إطار
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ref.current) {
      // حركة دورانية بطيئة
      ref.current.rotation.x = time * 0.03;
      ref.current.rotation.y = time * 0.02;
      
      // تأثير الفأرة على الجسيمات
      const positions = ref.current.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // موجات ناعمة
        positions[i + 1] += Math.sin(time + positions[i] * 0.05) * 0.001;
        
        // تأثير حركة الفأرة
        const mouseEffect = 0.3;
        positions[i] += (mouse.current.x * mouseEffect - positions[i]) * 0.0003;
        positions[i + 2] += (mouse.current.y * mouseEffect - positions[i + 2]) * 0.0003;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }

    // كرة تفاعلية تتحرك مع الفأرة
    if (sphereRef.current) {
      sphereRef.current.position.x += (mouse.current.x * 1.5 - sphereRef.current.position.x) * 0.015;
      sphereRef.current.position.y += (-mouse.current.y * 1.5 - sphereRef.current.position.y) * 0.015;
      sphereRef.current.rotation.x = time * 0.4;
      sphereRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group>
      {/* الجسيمات الرئيسية */}
      <Points ref={ref} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* كرة تفاعلية شفافة */}
      <mesh ref={sphereRef} position={[0, 0, -4]}>
        <sphereGeometry args={[1.2, 24, 24]} />
        <meshBasicMaterial 
          color="#22C55E" 
          transparent 
          opacity={0.08}
          wireframe={true}
        />
      </mesh>

      {/* أشكال هندسية إضافية */}
      <mesh position={[3, 2, -6]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial 
          color="#16A34A" 
          transparent 
          opacity={0.05}
          wireframe={true}
        />
      </mesh>

      <mesh position={[-3, -2, -5]}>
        <octahedronGeometry args={[0.6]} />
        <meshBasicMaterial 
          color="#38BDF8" 
          transparent 
          opacity={0.06}
          wireframe={true}
        />
      </mesh>
    </group>
  );
}

// مكون الخلفية الرئيسي
export default function ThreeBackground() {
  const mouse = useRef({ x: 0, y: 0 });

  // تتبع حركة الفأرة
  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 50,
          near: 0.1,
          far: 100 
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]} // تحسين الأداء
      >
        {/* إضاءة محيطية ناعمة */}
        <ambientLight intensity={0.3} />
        <pointLight position={[8, 8, 8]} intensity={0.2} />
        <pointLight position={[-8, -8, -8]} intensity={0.1} color="#38BDF8" />
        
        {/* الجسيمات المتحركة */}
        <AnimatedParticles mouse={mouse} />
        
        {/* ضباب للعمق */}
        <fog attach="fog" args={['#F6FBF8', 8, 35]} />
      </Canvas>
    </div>
  );
}
