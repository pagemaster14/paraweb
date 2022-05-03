import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";
import StickyFilter from "../StickyFilter/StickyFilter";
import Cards from "../Cards/Cards";

function Main(props) {
  return (
    <>
      <Header />
      <main className="main">
        <Carousel />
        <StickyFilter />
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default Main;