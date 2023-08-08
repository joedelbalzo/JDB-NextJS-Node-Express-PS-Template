import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 text-center">
      <h1 className="text-xl font-bold">My Website</h1>
      {/* Add more header content here */}
    </header>
  );
};

export default Header;
