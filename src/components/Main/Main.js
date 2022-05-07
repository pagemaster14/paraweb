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
  const [findedCard, setFindedCard] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);
  const [filteredCards, setFilteredCards] = React.useState([]);

  React.useEffect(() => {
    mainApi.getInitialCards()
      .then(data => {
        setCards(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSearch(findedCard) {
    setFindedCard(findedCard);
    setIsSearching(true)
  }

  function filterCards(cards, findedCard) {
    let cardsToFilter = cards;
    let result;

    result = cardsToFilter.filter(card => card.author === findedCard)
    return result;
  }

  React.useEffect(() => {
      const searchResults = filterCards(cards, findedCard);
      setFilteredCards(searchResults);
  }, [cards, findedCard]);

  return (
    <>
      <Header />
      <main className="main">
        <Carousel />
        <StickyFilter cards={cards} onSearch={handleSearch} />
        {isSearching
        ?
        <Cards cards={filteredCards} />
        :
        <Cards cards={cards} />
}
      </main>
      <Footer />
    </>
  );
}

export default Main;