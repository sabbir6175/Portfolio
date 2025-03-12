import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/HeroSection/Hero";
import Project from "../Components/Project";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
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
