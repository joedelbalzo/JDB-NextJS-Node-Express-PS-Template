import React from "react";
import styles from "./Home.module.css";

import Header from "../components/Header/Header";
import DbTest from "../components/Content/DbTest";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <DbTest />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
