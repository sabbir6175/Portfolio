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
    <section id="home" className="bg-black py-20 text-white">
      <div className="flex mt-[64px] max-w-7xl mx-auto  gap-12 md:gap-2 flex-col-reverse md:flex-row items-center justify-between px-10 ">
        {/* Left Side Content */}
        <div className="md:w-1/2 lg:max-w-md mx-auto text-center md:text-left space-y-3">
          <p className="text-2xl md:text-3xl font-semibold text-white">Hello I'm</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Sabbir Hasan</h1>
          <h1 className="text-xl md:text-3xl font-bold mt-4">
            {" "}
            <span className="text-green-400">
              <Typewriter
                words={[
                  "Front-end Developer",
                  "UI/UX Designer",
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
          <p className="mt-6 text-gray-400">
          "I build beautiful, dynamic, and user-friendly web applications with a focus on seamless user experience and modern design. Proficient in React.js, Node.js, Express.js, MongoDB "
          </p>
          <div className="pt-3 flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/sabbir6175"
              target="_blank"
              rel="noopener noreferrer"
              className=" border bg-white text-black px-3 py-2 rounded-full shadow-lg hover:bg-red-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabbir-hasan6175/"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-white text-black  px-3 py-2 rounded-full shadow-lg hover:bg-red-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            
            <a
              href="https://www.facebook.com/sabbirhasan075"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-white text-blue-600 px-3 py-2 rounded-full shadow-lg hover:bg-red-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="py-6 flex justify-center md:justify-start gap-4">
          <button className="transition-all  bg-gradient-to-r from-red-400 to-green-500 duration-300 px-6 py-3 border-b-4  rounded-lg shadow-md  hover:text-white">
              <a href="https://drive.google.com/file/d/1f2SSGsNnqeNCUtWiPiFsXHPS4kewZ-2E/view" target="blank" >Resume</a>
            </button>
            <button className="transition-all  bg-gradient-to-r from-red-400 to-green-500 duration-300 px-6 py-3 border-b-4  rounded-lg shadow-md  hover:text-white">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Gradient Circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-blue-400 to-cyan-300 rounded-full blur-md group-hover:blur-xl transition-all duration-500"></div>
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
