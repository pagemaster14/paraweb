import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";
import StickyFilter from "../StickyFilter/StickyFilter";
import Cards from "../Cards/Cards";
import mainApi from "../../ulits/MainApi";

function Main(props) {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    mainApi.getInitialCards()
      .then(data => {
        setCards(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Carousel />
        <StickyFilter cards={cards} />
        <Cards cards={cards} />
      </main>
      <Footer />
    </>
  );
}

export default Main;