// src/components/EducationCard.jsx
import { motion } from "framer-motion"; 
import { FaGraduationCap, FaSchool, FaCalendarAlt } from "react-icons/fa";

const EducationCard = ({ title, institute, year, details, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className="bg-base-100 shadow-md p-6 rounded-xl border-l-4 border-green-500"
    >
      {/* Title with graduation cap icon */}
      <div className="flex items-center gap-3 mb-2">
        <FaGraduationCap className="text-2xl text-green-500" />
        <h3 className="text-xl font-semibold text-green-500">{title}</h3>
      </div>

      {/* Institute with school icon, black text */}
      <p className="flex items-center gap-2 text-black text-sm">
        <FaSchool className="text-gray-400" />
        {institute}
      </p>

      {/* Year with calendar icon, black text */}
      <p className="flex items-center gap-2 mt-1 text-black text-sm">
        <FaCalendarAlt className="text-gray-400" />
        {year}
      </p>

      {/* Details in gray */}
      <p className="mt-2 text-sm text-gray-500">{details}</p>
    </motion.div>
  );
};

export default EducationCard;
