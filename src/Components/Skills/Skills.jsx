import { Typewriter } from "react-simple-typewriter";
import './Skills.css'
const Skills = () => {
  return (
    <section id="skills" className="bg-black pb-12 px-2 pt-12 md:px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-3xl md:text-4xl font-bold  text-white  tracking-wider">
          Skills That Define Me
        </span>
        <div className="mt-4">
          <span className="text-white text-xl">All Skills Here !! </span>
          <span className="text-green-400 text-xl font-bold ">
            <Typewriter
              words={[
                "MERN Specailist ",
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
        <div>
          <h4 className="text-left mt-4 text-white w-10/12 lg:w-1/2 mx-auto text-base opacity-60 font-semibold ">
            A showcase of my expertise and tools of the trade, reflecting my
            journey in mastering technology and design. These skills drive my
            creativity and innovation in every project.
          </h4>
        </div>
        <div>
          <div className="xl:w-9/12 mt-10 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 gap-y-16 place-items-center">
            <div className="relative p-4">
              <img
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JS Icon"
              />
              <div
                className="borderBeam "
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4 ">
              <img
                alt="React Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
              />
              
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="MongoDB Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="HTML Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://w7.pngwing.com/pngs/584/376/png-transparent-html-logo-world-wide-web-consortium-font-family-html-tag-sale-tag-text-happy-birthday-vector-images-thumbnail.png"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="CSS Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-css-file-document-icon-png-image_927823.jpg"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="NodeJS Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgfZ2sG6xWL_Ag0kASTIytHshA2F419syVg&amp;s"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="Tailwind Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://www.loopple.com/img/tailwind-logo.png"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="Firebase Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="Express Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="Git Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://img.icons8.com/p1em/512/FFFFFF/git.png"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>

            <div className="relative p-4">
              <img
                alt="GitHub Icon"
                className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"
              />
              <div
                className="borderBeam"
                style={{
                    "--size": "100px",
                    "--duration": "10s",
                    "--anchor": "90%",
                    "--border-width": "1.5px",
                    "--color-from": "#87CEEB",
                    "--color-to": "#00BFFF",
                    "--delay": "-0s",
                  }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
