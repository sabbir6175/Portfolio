import { Typewriter } from "react-simple-typewriter";
import image from "../../assets/sabbir61_n.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-10  text-black bg-white">
      <div className="flex mt-[64px] container mx-auto py-3 gap-12 md:gap-2 flex-col-reverse md:flex-row items-center justify-between  px-6 ">
        {/* Left Side Content */}
        <div className=" space-y-3 text-center  md:text-left">
          <p className="text-2xl font-semibold ">Hello I'm</p>
          <h1 className="text-4xl font-bold ">Sabbir Hasan</h1>
          <h1 className="mt-4 text-xl font-bold md:text-2xl">
            {" "}
            <span className="text-green-400">
              <Typewriter
                words={[
                  "Front-end Developer",
                  "MERN Stack Developer",
                 
                  
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-6 text-gray-400 md:mr-20">
          "I build beautiful, dynamic, and user-friendly web applications with a focus <br /> on seamless user experience and modern design. Proficient in React.js, Node.js, Express.js, MongoDB "
          </p>
          <div className="flex justify-center gap-6 pt-3 md:justify-start">
            <a
              href="https://github.com/sabbir6175"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-black transition-all duration-300 bg-white border rounded-full shadow-lg"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabbir-hasan6175/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-black transition-all duration-300 bg-white border rounded-full shadow-lg"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            
            <a
              href="https://www.facebook.com/sabbirhasan075"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-blue-600 transition-all duration-300 bg-white border rounded-full shadow-lg"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="flex justify-center gap-4 py-6 md:justify-start">
          <button className="px-5 py-2 text-green-500 transition duration-200 bg-white border border-green-500 rounded-md hover:bg-green-100">
              <a href="https://drive.google.com/file/d/1f2SSGsNnqeNCUtWiPiFsXHPS4kewZ-2E/view" target="blank" >Resume</a>
            </button>
            <button className="px-5 py-2 text-white transition duration-200 bg-green-500 rounded-md hover:bg-green-600">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:w-1/2">
          <div className="relative group">
            {/* Gradient Circle */}
            <div className="absolute inset-0 transition-all duration-500 rounded-full bg-gradient-to-r from-pink-500 via-blue-400 to-cyan-300 blur-md group-hover:blur-xl"></div>
            {/* Image */}
            <img
              src={image}
              alt="Hero"
              className="relative w-80 h-90 rounded-full border-[5px] border-green-600  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
