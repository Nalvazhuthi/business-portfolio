import React from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import CameraControlsHandler from "./cameraControlsHandler";
import Model from "./model";
import Navbar from "../common/navbar";
import Home from "../../pages/home";
import About from "../../pages/about";

const Experience = () => {
  return (
    <div className="canvas">
      <Canvas>
        <ScrollControls pages={3} infinite={false} damping={0.1}>
          <Model />
          <Scroll html>
            <Navbar />
            <Home />
            <About />
          </Scroll>
          <CameraControlsHandler />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Experience;