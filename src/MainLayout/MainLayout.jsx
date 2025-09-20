import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/HeroSection/Hero";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import { useRef, useState } from "react";
import Education from "../Components/Education/Education";

const MainLayout = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative cursor-pointer "
    >
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Education></Education>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      {isHovering && (
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F950, transparent)`,
            filter: "blur(60px)",
          }}
        />
      )}
    </div>
  );
};

export default MainLayout;
