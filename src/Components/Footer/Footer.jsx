import React from "react";

const Footer = () => {
  return (
    <footer className="py-2 text-black bg-white shadow ">
      <div className="">
        {/* Left Section: Copyright */}
        <p className="text-sm text-center text-gray-400">
          Copyright&copy; {new Date().getFullYear()}{" Design By "}
          <span className="font-semibold text-center text-green-500"> Sabbir Hasan</span>
        </p>

      
       
      </div>
    </footer>
  );
};

export default Footer;
