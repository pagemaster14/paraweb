import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";

function Main(props) {
  return (
    <>
      <Header />
      <main className="main">
        <Carousel />
      </main>
      <Footer />
    </>
  );
}

export default Main;