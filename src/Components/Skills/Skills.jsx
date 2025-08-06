import { Typewriter } from "react-simple-typewriter";
import "./Skills.css";

const Skills = () => {
  const ringStyle = {
    "--size": "100px",
    "--duration": "10s",
    "--anchor": "90%",
    "--border-width": "1.5px",
    "--color-from": "#86EFAC",
    "--color-to": "#2dc966",
    "--delay": "-0s",
  };

  const skills = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
      alt: "React",
    },
    {
      src: "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
      alt: "MongoDB",
    },
    {
      src: "https://w7.pngwing.com/pngs/584/376/png-transparent-html-logo-world-wide-web-consortium-font-family-html-tag-sale-tag-text-happy-birthday-vector-images-thumbnail.png",
      alt: "HTML",
    },
    {
      src: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-css-file-document-icon-png-image_927823.jpg",
      alt: "CSS",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgfZ2sG6xWL_Ag0kASTIytHshA2F419syVg&",
      alt: "Node.js",
    },
    {
      src: "https://www.loopple.com/img/tailwind-logo.png",
      alt: "Tailwind",
    },
    {
      src: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
      alt: "Firebase",
    },
    {
      src: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp",
      alt: "Express.js",
    },
    {
      src: "https://img.icons8.com/p1em/512/FFFFFF/git.png",
      alt: "Git",
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
      alt: "GitHub",
    },
  ];

  return (
    <section
      id="skills"
      className="px-2 pt-12 pb-12 text-black bg-white md:px-6"
    >
      <div className="mb-12 text-center">
        <span className="text-3xl font-bold tracking-wider text-black md:text-4xl">
          Skills That Define Me
        </span>
        <div className="mt-4">
          <span className="text-xl text-black">All Skills Here !! </span>
          <span className="text-xl font-bold text-green-400">
            <Typewriter
              words={[
                "UI/UX Designer",
                "Responsive Design",
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
                "Github",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <h4 className="w-10/12 mx-auto mt-4 text-base font-semibold text-center text-black lg:w-1/2 opacity-60">
          A showcase of my expertise and tools of the trade, reflecting my
          journey in mastering technology and design. These skills drive my
          creativity and innovation in every project.
        </h4>

        {/* Skill Icons Grid */}
        <div className="grid items-center justify-between grid-cols-2 gap-5 mx-auto mt-10 max-w-7xl xl:w-9/12 sm:grid-cols-2 md:grid-cols-4 gap-y-16 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-4 group"
            >
              {/* Glowing Ring (behind image only) */}
              <div className="relative">
                <img
                  className="relative z-10 object-contain w-16 h-16 transition duration-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#22C55E]"
                  src={skill.src}
                  alt={skill.alt}
                />
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 borderBeam top-1/2 left-1/2"
                  style={ringStyle}
                ></div>
              </div>

              {/* Visible Alt Text Below */}
              <p className="mt-10 text-sm font-semibold text-center text-black ">
                {skill.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
