"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

// Medical particle
function MedicalParticle({ position, color, scale = 1 }) {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color={color} transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

// DNA Helix
function DNAHelix() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 80; i++) {
      const angle = (i / 80) * Math.PI * 6;
      const y = (i / 80) * 8 - 4;
      const radius = 1;
      pts.push(
        new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
      );
    }
    return pts;
  }, []);

  return (
    <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.2}>
      <group position={[5, 0, -3]}>
        {points.map((point, index) => (
          <mesh key={index} position={[point.x, point.y, point.z]} scale={0.05}>
            <sphereGeometry args={[1, 6, 6]} />
            <meshStandardMaterial color="#00bba7" transparent opacity={0.4} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Scene
function Scene() {
  const particlePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 30; i++) {
      positions.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ]);
    }
    return positions;
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00bba7" />

      {particlePositions.map((pos, i) => (
        <MedicalParticle
          key={i}
          position={pos}
          color={i % 2 === 0 ? "#00bba7" : "#66d5c5"}
          scale={Math.random() * 0.5 + 0.3}
        />
      ))}

      <DNAHelix />
      <Environment preset="sunset" />
    </>
  );
}

export default function AnimatedBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 z-0"
      style={{
        pointerEvents: "none",
        background:
          "linear-gradient(135deg, #004d48 0%, #00bba7 60%, #66d5c5 100%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Scene />
      </Canvas>
    </motion.div>
  );
}
