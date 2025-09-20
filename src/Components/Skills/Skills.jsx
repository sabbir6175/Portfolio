import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Skills.css";
import { Typewriter } from "react-simple-typewriter";
import SkillCard from "./SkillCard";

const skills = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
    description: "Dynamic & interactive web experiences.",
  },
  {
    src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    alt: "React",
    description: "Building modern, component-based UIs.",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
    alt: "MongoDB",
    description: "NoSQL database for flexible data schemas.",
  },
  {
    src: "https://w7.pngwing.com/pngs/584/376/png-transparent-html-logo-world-wide-web-consortium-font-family-html-tag-sale-tag-text-happy-birthday-vector-images-thumbnail.png",
    alt: "HTML",
    description: "The foundation for all web pages.",
  },
  {
    src: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-css-file-document-icon-png-image_927823.jpg",
    alt: "CSS",
    description: "Styling and layout of web content.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgfZ2sG6xWL_Ag0kASTIytHshA2F419syVg&",
    alt: "Node.js",
    description: "Running JavaScript on the server side.",
  },
  {
    src: "https://www.loopple.com/img/tailwind-logo.png",
    alt: "Tailwind",
    description: "A utility-first CSS framework for fast and flexible UI design.",
  },
  {
    src: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
    alt: "Firebase",
    description: "Backend services for web and mobile apps.",
  },
  {
    src: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp",
    alt: "Express.js",
    description: "Backend web applications and APIs.",
  },
  {
    src: "https://img.icons8.com/p1em/512/FFFFFF/git.png",
    alt: "Git",
    description: "Version control for collaborative projects.",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
    alt: "GitHub",
    description: "Hosting code and project collaboration.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-2 py-10 text-black bg-white md:px-6"
    >
      <div className="mb-12 text-center">
        {/* Main Heading with AOS */}
        <span 
          className="text-3xl font-bold tracking-wider text-black md:text-4xl"
          
        >
          Skills That Define Me
        </span>
        {/* Subtitle with AOS and a slight delay */}
        <div className="mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <span className="text-xl text-black">All Skills Here !! </span>
          <span className="text-xl font-bold text-green-400">
            <Typewriter
              words={[
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
        {/* Description text with AOS and a longer delay */}
        <h4 
          className="w-10/12 mx-auto mt-4 text-base font-semibold text-center text-black lg:w-1/2 opacity-60"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          A showcase of my expertise and tools of the trade, reflecting my
          journey in mastering technology and design. These skills drive my
          creativity and innovation in every project.
        </h4>

        {/* Swiper Carousel with AOS for each slide */}
        <div 
          className="container mx-auto mt-10  "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="py-10">
                <SkillCard skill={skill} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;