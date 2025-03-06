import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import THREE for typing

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Correctly type the props for Experience component
interface ExperienceProps {
  progress: number; // The progress prop is of type number
}

// Experience Component
const Experience: React.FC<ExperienceProps> = ({ progress }) => {
  const { scene } = useGLTF("/assets/characterv2.glb");
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0); // Ensure camera looks at the origin
    }
  });

  useEffect(() => {
    const updateCameraPosition = () => {
      if (!cameraRef.current) return;

      const position = [
        [0, 0, 4],
        [2, 0, 4],
      ];
      if (progress >= 1) {
        gsap.to(cameraRef.current.position, {
          ease: "none",
          x: 2,
          y: 0,
          z: 4,
          duration: 0.5,
        });
      } else {
        // const clampedProgress = Math.min(progress, 1);
        const segmentProgress = 1 / (position.length - 1);
        const segmentIndex = Math.floor(progress / segmentProgress);

        const percentage = (progress % segmentProgress) / segmentProgress;

        const [startX, startY, startZ] = position[segmentIndex];
        const [endX, endY, endZ] = position[segmentIndex + 1];

        const x = startX + (endX - startX) * percentage;
        const y = startY + (endY - startY) * percentage;
        const z = startZ + (endZ - startZ) * percentage;

        // Directly set the camera position without GSAP

        gsap.to(cameraRef.current.position, {
          x,
          y,
          z,
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    };

    updateCameraPosition();
  }, [progress, cameraRef.current]);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 4]} />
      <primitive object={scene} position={[0, -0.5, 0]} scale={1.5} />
    </>
  );
};

export default Experience;
