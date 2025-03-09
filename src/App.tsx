import { useEffect, useRef } from "react";
import Experience from "./components/3D/experience";
import Navbar from "./components/common/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import "./style/main.scss";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Works from "./pages/works";
import Contact from "./pages/contact";
import bgimage from "./assets/image/002de438-e162-4486-993a-4ecd0e7113b8.png";
import Services from "./pages/services";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            progressRef.current = self.progress;
          },
        },
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "25vw",
        y: "10vh",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "-25vw",
        y: "0vh",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "0vw",
        y: "0vh",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "25vw",
        y: "0vh",
      });
  }, []);

  return (
    <div className="main-container" ref={mainRef}>
      <div className="canvas" ref={sceneRef}>
        <Canvas>
          <Experience progressRef={progressRef} />
        </Canvas>
      </div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Works />
      <Contact />
      <div className="bgImg">
        <img src={bgimage} alt="" />
      </div>
    </div>
  );
};

export default App;




