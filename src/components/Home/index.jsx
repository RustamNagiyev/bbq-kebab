import React from "react";
import About from "../About";
import Header2 from "../Header2";
import Menu from "../Menu";
import Beverages from "../Beverages";
import Delivery from "../Delivery";
import Contact from "../Contact";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Header2 />
      <main>
        <About />
        <Menu />
        <Beverages />
        <Delivery />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
