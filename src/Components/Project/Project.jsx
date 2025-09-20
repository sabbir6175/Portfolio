import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const projectsData = [
  {
    id: 1,
    title: "Blood Donation Application",
    description:
      "The Blood Donation Application is designed to streamline the blood donation process by connecting donors with recipients, ensuring...",
    imageSrc: "https://i.ibb.co.com/39txp9JC/Screenshot-2025-09-20-191513.png",
    technologies: ["React.js", "Node.js", "Express.js", "Mongodb"],
    liveDemoUrl: "https://blood-donation-c92df.web.app/",
    clientRepoUrl: "https://github.com/sabbir6175/blood-donation-application",
    serverRepoUrl:
      "https://github.com/sabbir6175/blood-donation-application-server",
    modalDetails: {
      fullDescription:
        "The Blood Donation Application is designed to streamline the blood donation process by connecting donors with recipients, ensuring a smooth and efficient exchange of life-saving blood. This application will be a valuable tool for individuals looking to donate blood and organizations or hospitals in need of blood.",
      features: [
        "User Registration & Donor Matching: Donors can create profiles with their blood type and contact details, allowing the system to match them with recipients in need.",
        "Blood Donation Requests: Hospitals or individuals can post urgent blood requests, and donors can browse and respond based on compatibility and availability.",
        "Notification System: Donors receive real-time notifications about blood requests, donation reminders, and important updates, ensuring timely responses.",
      ],
      frontendTech: [
        "HTML",
        "TailwindCSS",
        "DaisyUi",
        "sweet alert",
        "JavaScript",
        "React router",
        "axios",
        "jodit-react",
        "TanStackQuery(etc)",
      ],
      backendTech: [
        "mongodb: blood donation application all data save used mongodb",
        "Express.js: A web application framework that will handle routing and server-side logic.",
        "Node.js: A server-side JavaScript environment that will power the backend of the application.",
        "Authentication: JWT, firebase Technologies Used",
      ],
    },
  },
  {
    id: 2,
    title: "Marathon Management",
    description:
      "The Marathon Management System is a platform that simplifies marathon event management and participant registration....",
    imageSrc: "https://i.ibb.co.com/6R2RdqsW/marathon.png",
    technologies: ["React.js", "Node.js", "Express.js", "Mongodb"],
    liveDemoUrl: "https://marathon-client-side.web.app/",
    clientRepoUrl: "https://github.com/sabbir6175/Marathon-client-side-a11",
    serverRepoUrl: "https://github.com/sabbir6175/Marathon-server-side-a11",
    modalDetails: {
      fullDescription:
        "The Marathon Management System is a comprehensive platform designed to streamline the organization and participation in marathon events. This system allows event organizers to efficiently create, manage, and track marathon events, while participants can easily register, monitor their progress, and receive important event updates.",
      features: [
        "Event Creation and Management: Organizers can easily create, update, and delete marathon events, giving them full control over event planning.",
        "Personal Dashboard: Participants get a dedicated dashboard to manage registrations, track event participation, and monitor progress.",
        "Real-Time Updates and Notifications: Users receive instant alerts about event status, registration changes, and important marathon announcements",
      ],
      frontendTech: [
        "HTML",
        "TailwindCSS",
        "DaisyUi",
        "sweet alert",
        "JavaScript",
        "React router",
        "axios",
      ],
      backendTech: [
        "mongodb: blood donation application all data save used mongodb",
        "Express.js: A web application framework that will handle routing and server-side logic.",
        "Node.js: A server-side JavaScript environment that will power the backend of the application.",
        "Authentication: JWT, firebase Technologies Used",
      ],
    },
  },
  {
    id: 3,
    title: "Job Portal Application",
    description:
      "This is a Job Portal Application that allows job seekers to browse job listings, apply for jobs, and track their applications.....",
    imageSrc: "https://i.ibb.co.com/xqc9Ynwb/Screenshot-2025-09-20-191755.png",
    technologies: ["React.js", "Node.js", "Express.js", "Mongodb"],
    liveDemoUrl: "https://job-portal-project-34f44.web.app/",
    clientRepoUrl: "https://github.com/sabbir6175/Job-portal-client-side",
    serverRepoUrl: "https://github.com/sabbir6175/Job-portal-server-side",
    modalDetails: {
      fullDescription:
        "This is a Job Portal Application that allows job seekers to browse job listings, apply for jobs, and track their applications. Employers can post job openings, view applicants, and manage their job listings. The application is built using modern technologies like React.js, Express.js, MongoDB, Firebase Authentication, and JWT tokens to ensure a secure, user-friendly experience.",
      features: [
        "Home: A dashboard that provides quick access to the main sections of the portal.",
        "All Jobs: Displays a list of all available job listings. Job seekers can browse and apply for jobs here.",
        "My Applications: Shows a list of jobs that the logged-in user has applied for. Each user can only see their own applications.",
        "Add Jobs: Allows employers to post new job opportunities on the platform.",
        "My Posted Jobs: Displays the jobs that the logged-in employer has posted. Employers can also view who has applied for their job postings.",
      ],
      frontendTech: [
        "HTML",
        "TailwindCSS",
        "DaisyUi",
        "sweet alert",
        "JavaScript",
        "React router",
        "axios",
      ],
      backendTech: [
        "mongodb: blood donation application all data save used mongodb",
        "Express.js: A web application framework that will handle routing and server-side logic.",
        "Node.js: A server-side JavaScript environment that will power the backend of the application.",
        "Authentication: JWT, firebase Technologies Used",
      ],
    },
  },
];

const Project = () => {
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
    <section id="project" className="px-2  py-10 text-black bg-white md:px-6 ">
      <div className="mb-12 text-center">
        <span className="text-3xl font-bold tracking-wider md:text-4xl">
          My Projects
        </span>
        <h2 className="max-w-lg w-full mx-auto text-black mt-5">
          Showcasing my full-stack web development skills through projects built
          with modern technologies like React, Tailwind CSS, Node.js,
          Express.js, MongoDB, and Firebase.
        </h2>
      </div>

      <div className="grid items-center justify-between grid-cols-1 gap-8 py-3 container mx-auto  md:grid-cols-2 lg:grid-cols-3 ">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col h-full rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:border-green-400 hover:bg-gray-50"
          >
            <div className="relative flex flex-col h-full bg-white border-2 border-gray-100 rounded-xl">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow p-4">
                <h1 className="mt-4 text-[1.3rem] font-bold leading-[24px]">
                  {project.title}
                </h1>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 py-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-gray-700 transition duration-200 bg-gray-200 rounded-full hover:bg-green-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col items-center justify-between gap-3 mt-4 lg:flex-row lg:gap-8">
                  <button
                    onClick={() =>
                      document.getElementById(`modal_${project.id}`).showModal()
                    }
                    className="w-full text-xs  px-3 py-2 text-green-500 transition-all duration-300 border border-green-500 rounded-md lg:w-auto hover:bg-green-100 flex items-center justify-center gap-3"
                  >
                    View More
                    <BsArrowRight className="text-[1.3rem]" />
                  </button>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-xs  px-4 py-2 text-white transition-all duration-300 bg-green-500 rounded-md lg:w-auto hover:bg-green-600 flex items-center justify-center gap-3"
                  >
                    Live Demo
                    <BsArrowRight className="text-[1.3rem]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Modals based on data */}
      {projectsData.map((project) => (
        <dialog
          key={`modal_${project.id}`}
          id={`modal_${project.id}`}
          className="modal backdrop-blur-sm "
        >
          <div
           
            className="p-10  text-black  border-2 modal-box md:max-w-6xl"
          >
            <div  ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative cursor-pointer">
              <form method="dialog">
                <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                  ✕
                </button>
              </form>
              <h1 className="mb-5 text-2xl font-bold md:text-3xl">
                {project.title}
              </h1>
              <img
                src={project.imageSrc}
                alt={project.title}
                className="object-cover w-full mb-5 rounded-t-xl"
              />
              <div>
                <h2 className="mb-3 text-xl opacity-90">
                  {project.modalDetails.fullDescription}
                </h2>
                <h1 className="text-3xl font-semibold mt-6">Features</h1>
                <ul className="ml-10">
                  {project.modalDetails.features.map((feature, index) => (
                    <li key={index} className="mt-2 mb-2 text-sm list-disc">
                      <span className="text-lg text-green-400">
                        {feature.split(":")[0]}:{" "}
                      </span>
                      {feature.split(":")[1]}
                    </li>
                  ))}
                  <span className="text-red-600">
                    If you want to learn more about the features, please visit
                    the client-side GitHub repository. The link to the
                    client-side repository is provided below.
                  </span>
                </ul>
                <div className="mt-6">
                  <h1 className="text-2xl font-semibold">Technology Used</h1>
                  <div className="mt-4">
                    <h1 className="text-lg font-medium">FrontEnd:</h1>
                    <ul className="ml-10">
                      {project.modalDetails.frontendTech.map((tech, index) => (
                        <li key={index} className="mt-2 mb-2 text-sm list-disc">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <h1 className="mt-4 text-lg font-medium">Backend:</h1>
                    <ul className="ml-10">
                      {project.modalDetails.backendTech.map((tech, index) => (
                        <li key={index} className="mt-2 mb-2 text-sm list-disc">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-10 mt-8 md:flex-row">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white transition duration-200 bg-green-500 rounded-md hover:bg-green-600 flex items-center justify-center gap-3"
                  >
                    Live Demo
                    <BsArrowRight className="text-[1.3rem] text-white" />
                  </a>
                  <div className="flex flex-col gap-3 md:flex-row">
                    <a
                      href={project.clientRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-green-500 transition duration-200 bg-white border border-green-500 rounded-md hover:bg-green-100 flex items-center justify-center gap-3"
                    >
                      Client
                      <BsArrowRight className="text-[1.3rem] text-green-500" />
                    </a>
                    <a
                      href={project.serverRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-gray-700 transition duration-200 bg-white border border-gray-400 rounded-md hover:bg-gray-100 flex items-center justify-center gap-3"
                    >
                      Server
                      <BsArrowRight className="text-[1.3rem] text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
        </dialog>
      ))}
    </section>
  );
};

export default Project;
