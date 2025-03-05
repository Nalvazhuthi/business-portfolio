import { CameraControls, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { Vector3, CatmullRomCurve3 } from "three";
import { GUI } from "lil-gui";

const CameraControlsHandler = () => {
  const cameraControlsRef = useRef<CameraControls>(null);
  const scroll = useScroll(); // Hook to access scroll progress

  // Define the curve points and their corresponding target positions
  const [curvePoints, setCurvePoints] = useState([
    new Vector3(-0.5, 0, 2.5), // Start position
    new Vector3(1, 0.5, 1.5), // Intermediate position
    new Vector3(-3.14, 0.5, -3.14), // Back position (behind the object)
  ]);

  const [targetPoints, setTargetPoints] = useState([
    new Vector3(-0.5, 0, 0), // Target for start position
    new Vector3(-1.5, 0.25, 1), // Target for intermediate position
    new Vector3(0, 0.5, -1), // Target for back position
  ]);

  // Create the curve dynamically based on the state
  const curve = new CatmullRomCurve3(curvePoints);
  const targetCurve = new CatmullRomCurve3(targetPoints);

  useFrame(() => {
    if (cameraControlsRef.current) {
      // Get scroll progress (0 to 1)
      const scrollProgress = scroll.offset;

      // Get the point on the curve based on scroll progress
      const pointOnCurve = curve.getPoint(scrollProgress);
      const targetOnCurve = targetCurve.getPoint(scrollProgress);

      // Set the camera position
      cameraControlsRef.current.setPosition(...pointOnCurve.toArray());

      // Set the camera target
      cameraControlsRef.current.setTarget(...targetOnCurve.toArray());
    }
  });

  // Initialize lil-gui
  useEffect(() => {
    const gui = new GUI();

    // Add controls for each curve point
    curvePoints.forEach((point, index) => {
      const folder = gui.addFolder(`Curve Point ${index}`);
      folder.add(point, "x", -Math.PI, Math.PI, 0.01).name("X");
      folder.add(point, "y", -Math.PI, Math.PI, 0.01).name("Y");
      folder.add(point, "z", -Math.PI, Math.PI, 0.01).name("Z");
      folder.close();
    });

    // Add controls for each target point
    targetPoints.forEach((point, index) => {
      const folder = gui.addFolder(`Target Point ${index}`);
      folder.add(point, "x", -Math.PI, Math.PI, 0.01).name("X");
      folder.add(point, "y", -Math.PI, Math.PI, 0.01).name("Y");
      folder.add(point, "z", -Math.PI, Math.PI, 0.01).name("Z");
      folder.close();
    });

    // Cleanup function to destroy the GUI when the component unmounts
    return () => {
      gui.destroy();
    };
  }, []); // Run once on mount

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        enabled={true}
        azimuthRotateSpeed={-1}
        minDistance={0}
        maxDistance={0.00101}
        makeDefault
        mouseButtons={{
          left: 1, // Enable left mouse button for rotation
          middle: 0, // Disable middle mouse button
          right: 0, // Disable right mouse button
          wheel: 0, // Disable mouse wheel
        }}
        touches={{
          one: 0, // Disable one-finger touch
          two: 0, // Disable two-finger touch
          three: 0, // Disable three-finger touch
        }}
      />
    </>
  );
};

export default CameraControlsHandler;