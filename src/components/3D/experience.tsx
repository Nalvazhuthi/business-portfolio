import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  progressRef: React.MutableRefObject<number>;
}

const Experience: React.FC<ExperienceProps> = ({ progressRef }) => {
  const { scene } = useGLTF("/assets/characterv2.glb");
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const targetPosition = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 4));

  useFrame(() => {
    if (!cameraRef.current) return;

    const positions = [
      [0, 0, 4],
      [2, 0, 4],
      [0, 0, 4],
      [-2, 0, 4],
      [0, 0, 4],
    ];

    const totalSegments = positions.length - 1;
    const progress = Math.min(progressRef.current, 1);
    const segment = Math.floor(progress * totalSegments);
    const t = progress * totalSegments - segment;

    const [x1, y1, z1] = positions[segment];
    const [x2, y2, z2] = positions[Math.min(segment + 1, totalSegments)];

    targetPosition.current.set(
      x1 + (x2 - x1) * t,
      y1 + (y2 - y1) * t,
      z1 + (z2 - z1) * t
    );

    // Smooth interpolation
    cameraRef.current.position.lerp(targetPosition.current, 0.1);
    cameraRef.current.lookAt(0, 0, 0);
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 4]} />
      <primitive object={scene} position={[0, -0.5, 0]} scale={1.5} />
    </>
  );
};

export default Experience;