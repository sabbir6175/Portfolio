import { FaBolt, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import EducationCard from "./EducationCard";

const educationData = [
  {
    icon: <FaGraduationCap className="text-white text-2xl" />,
    title: "Junior School Certificate (JSC)",
    institute: "Nankor BL High School",
    year: "2018",
    details: "GPA: 3.50 – General Education Board.",
  },
  {
    icon: <FaBolt className="text-white text-2xl" />,
    title: "Secondary School Certificate (SSC)",
    institute: "Begum Rokeya Technical School and BM College",
    year: "2021",
    details: "GPA: 5.00 – Electrical Trade, Technical Education Board.",
  },
  {
    icon: <FaLaptopCode className="text-white text-2xl" />,
    title: "Diploma in Computer Science & Technology",
    institute: "Dinajpur Polytechnic Institute",
    year: "8th Semester (Passing Year: 2026)",
    details:
      "Currently studying under BTEB. Focus on Full Stack Web Development",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16  container mx-auto px-6 md:px-0 ">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-500">🎓 Education</h2>
        <p className="text-neutral mt-2">My academic background and achievements</p>
      </div>

      {/* Grid for cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  mx-auto">
        {educationData.map((edu, index) => (
          <EducationCard key={index} index={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
