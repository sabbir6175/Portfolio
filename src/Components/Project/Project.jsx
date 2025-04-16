import { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
const Project = () => {
  // const projects = [
  //   {
  //     id: 1,
  //     name: "Marathon Management System",
  //     image: "https://i.ibb.co/dDxZpX8/Screenshot-14.png",
  //     description: "A platform for managing marathon events, registrations, and results.",
  //     stack: ["React", "Node.js", "MongoDB", "Express.js"],
  //     challenges: [
  //       "Implementing a real-time leaderboard for participants.",
  //       "Handling user authentication and role-based access control.",
  //       "Optimizing the backend for high traffic during registration periods.",
  //     ],
  //     improvements: [
  //       "Add social media sharing for participants' achievements.",
  //       "Introduce a reward tracking system for regular participants.",
  //       "Optimize real-time updates using WebSockets.",
  //     ],
  //     github_client:
  //       "https://github.com/programming-hero-web-course2/b10a11-client-side-abdullahalmamun111",
  //     github_server:
  //       "https://github.com/programming-hero-web-course2/b10a11-server-side-abdullahalmamun111",
  //     live: "https://assignment-11-authentica-2a8c3.web.app/",
  //     details: `This project is designed to streamline the organization of marathon events. It allows organizers to create events, participants to register, and tracks real-time race progress. Key features include: - Real-time leaderboard updates with participant tracking. - Registration system with payment integration. - Admin dashboard for managing events and monitoring participant progress. During development, one of the significant challenges was implementing the real-time leaderboard efficiently. We had to optimize the backend to ensure data updates were pushed seamlessly to all users. Additionally, we worked on a user-friendly interface to ensure participants could easily find event details and results. Planned improvements include integrating a more robust reward system, adding social media connectivity, and optimizing the database for faster query execution during peak loads.`,
  //   },
  //   {
  //     id: 2,
  //     name: "Crowdfunding Platform",
  //     image: "https://i.ibb.co.com/8g86Wwx/image.png",
  //     description:
  //       "A platform that helps individuals raise funds for personal needs, creative projects, and startups.",
  //     stack: ["React", "Tailwind CSS", "DaisyUI", "MongoDB"],
  //     challenges: [
  //       "Ensuring smooth user experience for donors and campaigners.",
  //       "Integrating real-time updates for fundraising progress.",
  //       "Securing sensitive financial transactions.",
  //     ],
  //     improvements: [
  //       "Improve UI for better mobile responsiveness.",
  //       "Add more interactive features for campaign pages.",
  //       "Optimize performance for faster load times.",
  //     ],
  //     github_client: "https://github.com/programming-hero-web-course2/b10-a10-client-side-abdullahalmamun111",
  //     github_server: "https://github.com/programming-hero-web-course2/b10-a10-server-side-abdullahalmamun111",
  //     live: "https://assignment-10-authentica-b4564.web.app/",
  //     details:
  //       "This platform connects users with projects that need funding, making it easy for individuals to contribute to meaningful causes.",
  //   },
  //   {
  //     id: 3,
  //     name: "Winter Donation Platform",
  //     image: "https://i.ibb.co.com/NxwZP7k/image.png",
  //     description: "A platform for raising funds to support those in need during the winter season.",
  //     stack: ["React", "Firebase"],
  //     challenges: [
  //       "Ensuring data privacy for donors and recipients.",
  //       "Implementing a seamless donation process.",
  //       "Managing a large number of donations during peak times.",
  //     ],
  //     improvements: [
  //       "Add a dashboard for donors to track their contributions.",
  //       "Enable recurring donations for long-term support.",
  //       "Provide more visibility into where the donations are being used.",
  //     ],
  //     github_client: "https://github.com/programming-hero-web-course1/b10-a9-authentication-abdullahalmamun111",
  //     github_server: "",
  //     live: "https://assignment-09-authentication.web.app/",
  //     details:
  //       "This platform allows users to donate to individuals and organizations providing support to those affected by the winter season, ensuring they have access to essential resources like warm clothing, food, and shelter.",
  //   },
  // ];

  return (
    <section id="project" className="bg-black py-16 px-2 md:px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-3xl md:text-4xl font-bold text-white tracking-wider">
          Projects
        </span>
        <h2 className="text-base font-normal text-green-400 mt-2">
          Design & Development
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-10">
        {/* ========================
                      card 1 
           ===============================*/}
        <div className="group ">
          <div className=" relative border-red-400 p-2 md:p-4 border-2 bg-white boxShadow rounded-xl group-hover:scale-x-100 group-hover:border-red-700 transition-transform  duration-200">
            <img
              src="https://i.ibb.co.com/rfk3dK0g/Blood-donation.png"
              alt="image"
              className="w-full h-[260px] object-cover rounded-t-xl"
            />

            <div className="p-5">
              <h1 className="text-[1.3rem] font-bold text-green-400 leading-[24px]">
                Blood donation Application
              </h1>

              <p className="text-gray-600 mt-3">
                The Blood Donation Application is designed to streamline the
                blood donation process by connecting donors with recipients,
                ensuring....
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 ">
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">React.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Node.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Express.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Mongodb</span>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 justify-between items-center ">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="py-2.5 md:px-4 bg-gradient-to-r from-green-300 to-red-400 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group"
                >
                  View More
                  <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                </button>
                <button className="py-2.5 md:px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://blood-donation-c92df.web.app/"
                    className="flex items-center justify-center gap-3"
                  >
                    live Demo
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ========================
                      card 2
           ===============================*/}
        <div className="group">
          <div className=" relative border-red-400 p-2 md:p-4 border-2 bg-white boxShadow rounded-xl group-hover:scale-x-100 group-hover:border-red-700 transition-transform  duration-200">
            <img
              src="https://i.ibb.co.com/P20ks5p/Screenshot-2025-03-25-011217.png"
              alt="image"
              className="w-full h-[260px] object-cover rounded-t-xl"
            />

            <div className="p-5">
              <h1 className="text-[1.3rem] font-bold text-green-400 leading-[24px]">
                Marathon Management 
              </h1>

              <p className="text-gray-600 mt-3">
                The Marathon Management System is a platform that simplifies
                marathon event management and participant registration....
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">React.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Node.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Express.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Mongodb</span>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 justify-between items-center">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="py-2.5 md:px-4 bg-gradient-to-r from-green-300 to-red-400 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group"
                >
                  View More
                  <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                </button>
                <button className="py-2.5 md:px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://marathon-client-side.web.app/"
                    className="flex items-center justify-center gap-3"
                  >
                    live Demo
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ========================
                      card 3
           ===============================*/}
        <div className="group">
          <div className=" relative border-red-400 p-2 md:p-4 border-2 bg-white boxShadow rounded-xl group-hover:scale-x-100 group-hover:border-red-700 transition-transform  duration-200">
            <img
              src="https://i.ibb.co.com/wZbyTsL2/job-portal-project.png"
              alt="image"
              className="w-full h-[260px] object-cover rounded-t-xl"
            />

            <div className="p-5">
              <h1 className="text-[1.3rem] font-bold text-green-400 leading-[24px]">
                Job Portal Application
              </h1>

              <p className="text-gray-600 mt-3">
                This is a Job Portal Application that allows job seekers to
                browse job listings, apply for jobs, and track their
                applications.....
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">React.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Node.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Express.js</span>
                <span className="px-2 py-1 border bg-green-200 text-red-400 rounded-md">Mongodb</span>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 justify-between items-center">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="py-2.5 md:px-4 bg-gradient-to-r from-green-300 to-red-400 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group"
                >
                  View More
                  <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                </button>
                <button className="py-2.5 md:px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://blood-donation-c92df.web.app/"
                    className="flex items-center justify-center gap-3"
                  >
                    live Demo
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* ========================
                      card 1 modal 
           ===============================*/}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box md:max-w-6xl p-10 border-2 bg-black text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl md:text-3xl font-bold mb-5">
            Blood Donation Application
          </h1>
          <img
            src="https://i.ibb.co.com/rfk3dK0g/Blood-donation.png"
            alt="image"
            className="w-full object-cover rounded-t-xl mb-5"
          />
          <div>
            <h2 className="text-xl mb-3 opacity-90 ">
              The Blood Donation Application is designed to streamline the blood
              donation process by connecting donors with recipients, ensuring a
              smooth and efficient exchange of life-saving blood. This
              application will be a valuable tool for individuals looking to
              donate blood and organizations or hospitals in need of blood.
            </h2>

            <h1 className="text-3xl">Feature</h1>

            <ul className="ml-10  ">
              <li className="list-disc mt-2 mb-2 text-sm">
                {" "}
                <span className="text-green-400 text-lg">
                  User Registration & Donor Matching :{" "}
                </span>{" "}
                Donors can create profiles with their blood type and contact
                details, allowing the system to match them with recipients in
                need.
              </li>
              <li className="list-disc mt-2 mb-2 text-sm">
                <span className="text-green-400 text-lg">
                  Blood Donation Requests :{" "}
                </span>{" "}
                Hospitals or individuals can post urgent blood requests, and
                donors can browse and respond based on compatibility and
                availability.
              </li>
              <li className="list-disc mt-2 mb-2 text-sm">
                <span className="text-green-400 text-lg">
                  Notification System :{" "}
                </span>{" "}
                Donors receive real-time notifications about blood requests,
                donation reminders, and important updates, ensuring timely
                responses.
              </li>
              <span className="text-red-600">
                If you want to learn more about the features, please visit the
                client-side GitHub repository. The link to the client-side
                repository is provided below.
              </span>
            </ul>

            <div>
              <h1 className="text-2xl font-semibold">Technology Used</h1>
              <div>
                <h1 className="text-lg">FrontEnd:</h1>
                <ul className="ml-10">
                  <li className="list-disc mt-2 mb-2 text-sm">HTML</li>
                  <li className="list-disc mt-2 mb-2 text-sm">TailwindCSS</li>
                  <li className="list-disc mt-2 mb-2 text-sm">DaisyUi</li>
                  <li className="list-disc mt-2 mb-2 text-sm">sweet alert</li>
                  <li className="list-disc mt-2 mb-2 text-sm">JavaScript</li>
                  <li className="list-disc mt-2 mb-2 text-sm">React router</li>
                  <li className="list-disc mt-2 mb-2 text-sm">axios</li>
                  <li className="list-disc mt-2 mb-2 text-sm">jodit-react</li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    TanStackQuery(etc)
                  </li>
                </ul>
                <h1 className="text-lg">Backend:</h1>
                <ul className="ml-10">
                  <li className="list-disc mt-2 mb-2 text-sm">
                    mongodb: blood donation application all data save used
                    mongodb
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Express.js: A web application framework that will handle
                    routing and server-side logic.
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Node.js: A server-side JavaScript environment that will
                    power the backend of the application.
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Authentication: JWT, firebase Technologies Used
                  </li>
                </ul>
              </div>
            </div>
            {/* button  */}
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div>
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://blood-donation-c92df.web.app/"
                    className="flex items-center justify-center gap-3"
                  >
                    live Demo
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://github.com/sabbir6175/blood-donation-application"
                    className="flex items-center justify-center gap-3"
                  >
                    Client
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://github.com/sabbir6175/blood-donation-application-server"
                    className="flex items-center justify-center gap-3"
                  >
                    Server
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>

      {/* ========================
                      card 2 modal 
           ===============================*/}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box md:max-w-6xl p-10 border-2 bg-black text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl md:text-3xl font-bold mb-5">
            Marathon Management Application
          </h1>
          <img
            src="https://i.ibb.co.com/P20ks5p/Screenshot-2025-03-25-011217.png"
            alt="image"
            className="w-full object-cover rounded-t-xl mb-5"
          />
          <div>
            <h2 className="text-xl mb-3 opacity-90 ">
              The Marathon Management System is a comprehensive platform
              designed to streamline the organization and participation in
              marathon events. This system allows event organizers to
              efficiently create, manage, and track marathon events, while
              participants can easily register, monitor their progress, and
              receive important event updates.
            </h2>

            <h1 className="text-3xl">Website Feature</h1>

            <ul className="ml-10  ">
              <li className="list-disc mt-2 mb-2 text-sm">
                {" "}
                <span className="text-green-400 text-lg">
                  Event Creation and Management :{" "}
                </span>{" "}
                Organizers can easily create, update, and delete marathon
                events, giving them full control over event planning.
              </li>
              <li className="list-disc mt-2 mb-2 text-sm">
                <span className="text-green-400 text-lg">
                  Personal Dashboard :{" "}
                </span>{" "}
                Participants get a dedicated dashboard to manage registrations,
                track event participation, and monitor progress.
              </li>
              <li className="list-disc mt-2 mb-2 text-sm">
                <span className="text-green-400 text-lg">
                  Real-Time Updates and Notifications :{" "}
                </span>{" "}
                Users receive instant alerts about event status, registration
                changes, and important marathon announcements
              </li>
              <span className="text-red-600">
                If you want to learn more about the features, please visit the
                client-side GitHub repository. The link to the client-side
                repository is provided below.
              </span>
            </ul>

            <div>
              <h1 className="text-2xl font-semibold">Technology Used</h1>
              <div>
                <h1 className="text-lg">FrontEnd:</h1>
                <ul className="ml-10">
                  <li className="list-disc mt-2 mb-2 text-sm">HTML</li>
                  <li className="list-disc mt-2 mb-2 text-sm">TailwindCSS</li>
                  <li className="list-disc mt-2 mb-2 text-sm">DaisyUi</li>
                  <li className="list-disc mt-2 mb-2 text-sm">sweet alert</li>
                  <li className="list-disc mt-2 mb-2 text-sm">JavaScript</li>
                  <li className="list-disc mt-2 mb-2 text-sm">React router</li>
                  <li className="list-disc mt-2 mb-2 text-sm">axios</li>
                </ul>
                <h1 className="text-lg">Backend:</h1>
                <ul className="ml-10">
                  <li className="list-disc mt-2 mb-2 text-sm">
                    mongodb: blood donation application all data save used
                    mongodb
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Express.js: A web application framework that will handle
                    routing and server-side logic.
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Node.js: A server-side JavaScript environment that will
                    power the backend of the application.
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Authentication: JWT, firebase Technologies Used
                  </li>
                </ul>
              </div>
            </div>
            {/* button  */}
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div>
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://marathon-client-side.web.app/"
                    className="flex items-center justify-center gap-3"
                  >
                    live Demo
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://github.com/sabbir6175/Marathon-client-side-a11"
                    className="flex items-center justify-center gap-3"
                  >
                    Client
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://github.com/sabbir6175/Marathon-server-side-a11"
                    className="flex items-center justify-center gap-3"
                  >
                    Server
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      {/* ========================
                      card 3 modal 
           ===============================*/}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box md:max-w-6xl p-10 border-2 bg-black text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl md:text-3xl font-bold mb-5">
            Job Portal Application
          </h1>
          <img
            src="https://i.ibb.co.com/wZbyTsL2/job-portal-project.png"
            alt="image"
            className="w-full object-cover rounded-t-xl mb-5"
          />
          <div>
            <h2 className="text-xl mb-3 opacity-90 ">
              This is a Job Portal Application that allows job seekers to browse
              job listings, apply for jobs, and track their applications.
              Employers can post job openings, view applicants, and manage their
              job listings. The application is built using modern technologies
              like React.js, Express.js, MongoDB, Firebase Authentication, and
              JWT tokens to ensure a secure, user-friendly experience.
            </h2>

            <h1 className="text-3xl">Website Feature</h1>
            <ul className="ml-10  ">
              <li className="list-disc mt-2 mb-2 text-sm">
                {" "}
                <span className="text-green-400 text-lg">Home : </span> A
                dashboard that provides quick access to the main sections of the
                portal.
              </li>
              <li className="list-disc mt-2 mb-2 text-sm">
                <span className="text-green-400 text-lg">All Jobs: : </span>{" "}
                Displays a list of all available job listings. Job seekers can
                browse and apply for jobs here.
              </li>
              <li className="list-disc mt-2 mb-2 text-sm">
                <span className="text-green-400 text-lg">
                  My Applications :{" "}
                </span>{" "}
                Shows a list of jobs that the logged-in user has applied for.
                Each user can only see their own applications.s
              </li>
              <li className="list-disc mt-2 mb-2 text-sm">
                <span className="text-green-400 text-lg">Add Jobs : </span>{" "}
                Allows employers to post new job opportunities on the platform.
              </li>
              <li className="list-disc mt-2 mb-2 text-sm">
                <span className="text-green-400 text-lg">
                  My Posted Jobs :{" "}
                </span>{" "}
                Displays the jobs that the logged-in employer has posted.
                Employers can also view who has applied for their job postings.
              </li>
              <span className="text-red-600">
                If you want to learn more about the features, please visit the
                client-side GitHub repository. The link to the client-side
                repository is provided below.
              </span>
            </ul>

            <div>
              <h1 className="text-2xl font-semibold">Technology Used</h1>
              <div>
                <h1 className="text-lg">FrontEnd:</h1>
                <ul className="ml-10">
                  <li className="list-disc mt-2 mb-2 text-sm">HTML</li>
                  <li className="list-disc mt-2 mb-2 text-sm">TailwindCSS</li>
                  <li className="list-disc mt-2 mb-2 text-sm">DaisyUi</li>
                  <li className="list-disc mt-2 mb-2 text-sm">sweet alert</li>
                  <li className="list-disc mt-2 mb-2 text-sm">JavaScript</li>
                  <li className="list-disc mt-2 mb-2 text-sm">React router</li>
                  <li className="list-disc mt-2 mb-2 text-sm">axios</li>
                </ul>
                <h1 className="text-lg">Backend:</h1>
                <ul className="ml-10">
                  <li className="list-disc mt-2 mb-2 text-sm">
                    mongodb: blood donation application all data save used
                    mongodb
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Express.js: A web application framework that will handle
                    routing and server-side logic.
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Node.js: A server-side JavaScript environment that will
                    power the backend of the application.
                  </li>
                  <li className="list-disc mt-2 mb-2 text-sm">
                    Authentication: JWT, firebase Technologies Used
                  </li>
                </ul>
              </div>
            </div>
            {/* button  */}
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div>
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://job-portal-project-34f44.web.app/"
                    className="flex items-center justify-center gap-3"
                  >
                    live Demo
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://github.com/sabbir6175/Job-portal-client-side"
                    className="flex items-center justify-center gap-3"
                  >
                    Client
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
                <button className="py-2.5 px-4 bg-gradient-to-r from-red-300 to-cyan-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                  <a
                    href="https://github.com/sabbir6175/Job-portal-server-side"
                    className="flex items-center justify-center gap-3"
                  >
                    Server
                    <BsArrowRight className="text-[1.3rem] text-gray-600 hover:ml-2 transition-all duration-200" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Project;
