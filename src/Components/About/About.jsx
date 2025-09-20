import  { useRef, useState } from "react";
import image from "../../assets/Sabbir.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiFirebase } from "react-icons/si";




const AboutMe = () => {
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
    <section
      id="about"
      className="px-2 md:px-6 py-10 text-black bg-white "
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-5">About Me</h1>
        <span className="text-base text-center">Creating engaging user experiences with clean, efficient, and modern code</span>
      </div>
      <div className="flex items-center justify-center py-3 container mx-auto mt-10">
        <div className="flex flex-col items-stretch lg:flex-row md:justify-center  gap-5 md:gap-10">
          {/* Image Section */}
          <div className="w-full min-h-full  lg:w-2/5 rounded-sm">
            <img
              src={image}
              className="w-full h-full  object-contain rounded-md"
              alt="Sabbir Hasan"
            />
          </div>

          {/* Animated Text Card Section */}
          <div
            className="w-full    lg:w-3/5"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={cardRef}
          >
            <div className="relative overflow-hidden border rounded-lg p-6  cursor-pointer h-full flex flex-col justify-center">
              <p className="py-1 text-black">
                Hi, I'm <span className="lg:text-lg font-bold text-green-400">Sabbir Hasan</span>. I'm from Rangpur, Bangladesh, and a passionate MERN Stack Developer with 1 year of experience in building dynamic and scalable web applications.
                <br /><br />
                Currently, I'm pursuing a Diploma in Engineering in Computer Science and Technology at Dinajpur Polytechnic Institute (7th semester). My expertise includes React, Node.js, Express, and MongoDB.
                <br /><br />
                My coding journey began when I joined my diploma program, and since then, it has become a passion. As a self-taught developer, I’m always eager to learn new technologies and refine my skills. I love turning ideas into reality by combining creativity with cutting-edge technology to build seamless and engaging user experiences.
              </p>

                {/* Skills Icons Section */}
              <div className=" flex flex-wrap gap-4">
                {/* MERN Stack */}
                <FaReact className="text-4xl text-blue-500" title="React" />
                <SiMongodb className="text-4xl text-green-600" title="MongoDB" />
                <SiExpress className="text-4xl text-gray-800" title="Express.js" />
                <FaNodeJs className="text-4xl text-green-400" title="Node.js" />
                {/* Other Skills */}
                <SiFirebase className="text-4xl text-yellow-500" title="Firebase" />
                <SiTailwindcss className="text-4xl text-teal-400" title="Tailwind CSS" />
                <SiJavascript className="text-4xl text-yellow-300" title="JavaScript" />
              </div>

              {isHovering && (
                <div
                  className="absolute inset-0 pointer-events-none blur-[50px]"
                  style={{
                    background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;