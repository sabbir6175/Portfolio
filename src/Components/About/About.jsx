import image from "../../assets/sabbir61_n.jpg";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="px-6 py-16 text-black bg-white md:px-20 lg:px-40 "
    >
      <div className="text-center">
        <span className="text-4xl font-bold ">About Me</span>
      </div>
      <div className="flex items-center justify-between py-3 mx-auto mt-10 hero max-w-7xl ">
        <div className="flex-col gap-5 hero-content md:gap-10 md:flex-row">
          <div className="w-full md:w-1/2 lg:max-w-sm md:h-[400px] lg:h-[500px]">
            <img src={image} className="w-full h-full rounded-lg shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2">
            {/* <h1 className="text-3xl font-bold text-green-400">Myself !</h1> */}
            <p className="py-6">
            Hi, I'm <span className="text-lg font-bold text-green-400">Sabbir Hasan</span>. I'm from Rangpur, Bangladesh, and a passionate MERN Stack Developer with 1 year of experience in building dynamic and scalable web applications.

Currently, I'm pursuing a Diploma in Engineering in Computer Science and Technology at Dinajpur Polytechnic Institute (7th semester). My expertise includes React, Node.js, Express, and MongoDB.

My coding journey began when I joined my diploma program, and since then, it has become a passion. As a self-taught developer, I’m always eager to learn new technologies and refine my skills. I love turning ideas into reality by combining creativity with cutting-edge technology to build seamless and engaging user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      {/* <div className="grid grid-cols-1 gap-8 mt-12 text-gray-300 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="font-bold ">Name:</h4>
          <p className="text-lg ">ABDULLAH ALMAMUN</p>
          <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
        </div>
        <div>
          <h4 className="font-bold ">Email:</h4>
          <p className="text-lg ">almamun602767@gmail.com</p>
          <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
        </div>
        <div>
          <h4 className="font-bold ">Date of Birth:</h4>
          <p className="text-lg ">15 March, 2004</p>
          <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
        </div>
        <div>
          <h4 className="font-bold ">From:</h4>
          <p className="text-lg ">Rangpur City, Bangladesh</p>
          <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutMe;
