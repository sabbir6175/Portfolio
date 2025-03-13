import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-2 ">
      <div className="">
        {/* Left Section: Copyright */}
        <p className="text-sm text-center text-gray-400">
          Copyright&copy; {new Date().getFullYear()}{" Design By "}
          <span className="text-green-500 text-center font-semibold"> Sabbir Hasan</span>
        </p>

      
       
      </div>
    </footer>
  );
};

export default Footer;
