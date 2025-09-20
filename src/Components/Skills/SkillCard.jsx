import React, { useRef, useState } from "react";

const SkillCard = ({ skill }) => {
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
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative  flex flex-col items-center justify-center p-6 m-4 overflow-hidden text-center transition-all duration-300 transform bg-gray-50 rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:scale-105"
    >
      <div className="relative z-10 p-2 mb-4 rounded-full">
        <img
          className="object-contain w-16 h-16 rounded-full transition-transform duration-300 group-hover:scale-110"
          src={skill.src}
          alt={skill.alt}
        />
      </div>
      <h3 className="text-xl font-bold text-green-600">
        {skill.alt}
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        {skill.description}
      </p>

      {/* The Radial Gradient Effect */}
      {isHovering && (
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F950, transparent)`,
            filter: 'blur(30px)',
          }}
        />
      )}
    </div>
  );
};

export default SkillCard;