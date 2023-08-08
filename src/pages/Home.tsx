import React from "react";
import Nav from "../components/Nav";
import DbTest from "../components/DbTest";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <DbTest />
      <Footer />
    </div>
  );
};

export default Home;
