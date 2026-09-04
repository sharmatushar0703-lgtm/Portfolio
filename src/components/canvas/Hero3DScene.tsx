import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function DataCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y += delta * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.1;
      outerRingRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Inner Glowing Holographic Core */}
      <Sphere ref={meshRef} args={[1.3, 64, 64]}>
        <MeshDistortMaterial
          color="#0284c7"
          attach="material"
          distort={0.45}
          speed={2.2}
          roughness={0.15}
          metalness={0.8}
          wireframe={false}
        />
      </Sphere>

      {/* Rotating Wireframe Matrix Grid */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.35}
          emissive="#0284c7"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Orbiting Tech Nodes */}
      <group ref={outerRingRef}>
        {[
          { pos: [2.5, 0.5, 0], color: '#10b981', size: 0.22 },
          { pos: [-2.2, 1.2, 0.8], color: '#a855f7', size: 0.18 },
          { pos: [0.8, -2.4, -0.5], color: '#f59e0b', size: 0.2 },
          { pos: [-1.5, -1.8, 1.2], color: '#38bdf8', size: 0.24 },
        ].map((node, i) => (
          <mesh key={i} position={node.pos as [number, number, number]}>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={1.2}
              roughness={0.1}
            />
          </mesh>
        ))}

        {/* Orbit Path Ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.6, 0.015, 16, 100]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}

function StarDust() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 300;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 16;
      pos[i + 1] = (Math.random() - 0.5) * 16;
      pos[i + 2] = (Math.random() - 0.5) * 16;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#38bdf8"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

export function Hero3DScene() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-4, -4, -2]} intensity={2} color="#a855f7" />
        <pointLight position={[4, 4, 2]} intensity={2} color="#0ea5e9" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
          <DataCore />
        </Float>

        <StarDust />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
