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
  const [isSearching, setIsSearching] = React.useState(false);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [findedCard, setFindedCard] = React.useState('');

  React.useEffect(() => {
    mainApi.getInitialCards()
      .then(data => {
        setCards(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSearchByAuthor(findedCard) {
    setFindedCard(findedCard);
    setIsSearching(true)
  }

  function filterCardsByAuthor(cards, findedCard) {
    let cardsToFilter = cards;
    let result;

    result = cardsToFilter.filter(card => card.author === findedCard)
    return result;
  }

  React.useEffect(() => {
    const searchResults = filterCardsByAuthor(cards, findedCard);
    setFilteredCards(searchResults);
  }, [cards, findedCard]);

  const [findedFirstDate, setFindedFirstDate] = React.useState('');
  const [findedLastDate, setFindedLastDate] = React.useState('');
  const [filteredCardsByDate, setFilteredCardsByDate] = React.useState([]);

  function filterCardsByDate(cards, findedFirstDate, findedLastDate) {
    let cardsToFilter = cards;
    let result;
    let firstDate = new Date(findedFirstDate);
    let lastDate = new Date(findedLastDate);

    result = cardsToFilter.filter(card => new Date(card.publishedAt.slice(0, 16)) >= firstDate && new Date(card.publishedAt.slice(0, 16)) <= lastDate)
    return result;
  }

  React.useEffect(() => {
    const searchResults = filterCardsByDate(cards, findedFirstDate, findedLastDate);
    setFilteredCardsByDate(searchResults);
  }, [cards, findedFirstDate, findedLastDate]);

  function handleSearchByDate(findedFirstDate, findedLastDate) {
    setFindedFirstDate(findedFirstDate);
    setFindedLastDate(findedLastDate)
    setIsSearching(true)
  }

  return (
    <>
      <Header />
      <main className="main">
        <Carousel />
        <StickyFilter cards={cards} onAuthorSearch={handleSearchByAuthor}
          onDateSearch={handleSearchByDate} filteredCards={filteredCards} />
        {isSearching
          ? filteredCards.length > 0
            ? <Cards cards={filteredCards} />
            : <Cards cards={filteredCardsByDate} />
          : <Cards cards={cards} />
        }
      </main>
      <Footer />
    </>
  );
}

export default Main;