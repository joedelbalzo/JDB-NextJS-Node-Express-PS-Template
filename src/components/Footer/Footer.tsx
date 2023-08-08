import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center bg-blue-500 text-white p-4 mt-auto">
      <p>© 2023 Joe Del Balzo.</p>
      {/* Add more footer content here */}
    </footer>
  );
};

export default Footer;
