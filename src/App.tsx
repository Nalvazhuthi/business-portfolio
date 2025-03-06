import { useEffect, useRef, useState } from "react";
import Experience from "./components/3D/experience";
import Navbar from "./components/common/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import "./style/main.scss";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Define types for refs
const App = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "25vw",
        y: "10vh ",
      });
  }, []);
  return (
    <div className="main-container" ref={mainRef}>
      <div className="canvas" ref={sceneRef}>
        <Canvas>
          <Experience progress={progress} />
        </Canvas>
      </div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
