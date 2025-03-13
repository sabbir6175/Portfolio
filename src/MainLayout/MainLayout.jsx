import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/HeroSection/Hero";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
