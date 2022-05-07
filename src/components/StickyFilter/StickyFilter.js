import React from "react";
import "./StickyFilter.css";

function StickyFilter(props) {
  const [isFilterSticky, setIsFilterSticky] = React.useState(false);
  const [isAuthorList, setIsAuthorList] = React.useState(false);
  const [isButtonContent, setIsButtonContent] = React.useState('Выберите автора');
  const currentViewport = document.documentElement.clientWidth;
  const stickyFilterClassName = `stickyFilter ${isFilterSticky && "stickyFilter_scroll"}`;
  const authorListClassName = `stickyFilter__author-list ${isAuthorList && "stickyFilter__author-list_opened"}`;
  const [findedCard, setFindedCard] = React.useState('');

  React.useEffect(() => {
    window.addEventListener('scroll', function() {
      if (currentViewport < 1440 && this.scrollY > 336) {
        setIsFilterSticky(true)
      }
      else if (currentViewport > 1439 && this.scrollY > 634) {
        setIsFilterSticky(true)
      } else {
        setIsFilterSticky(false)
      }
    });
  })

function authorListHandler(evt) {
  evt.preventDefault();
  setIsAuthorList(!isAuthorList)
}

function authorCellHandler(e) {
  setIsButtonContent(e.target.textContent)
  setIsAuthorList(false)
  setFindedCard(e.target.textContent);
  return findedCard;
}

React.useEffect(() => {
  if (findedCard) {
    props.onSearch(findedCard)
  }
})

  return (
    <div className={stickyFilterClassName}>
      <form className="stickyFilter__form">
        <button className="stickyFilter__author" arialabel="Open" onClick={authorListHandler}>{isButtonContent}</button>
        <div className={authorListClassName}>
          {props.cards.filter((card, index, self) => self.findIndex(
    (t) => {return (t.author === card.author)}) === index).map((card) => (
            <p className="stickyFilter__author-cell" key={card.url} onClick={authorCellHandler}>{card.author}</p>
          ))}
        </div>
        <div className="stickyFilter__dates">
          <input className="stickyFilter__dates-input" placeholder="От" />
          <span className="stickyFilter__dates-input-error" id="date-error"></span>
          <span className="stickyFilter__dates-span">~</span>
          <input className="stickyFilter__dates-input" placeholder="До" />
          <span className="stickyFilter__dates-input-error" id="date-error"></span>
        </div>
      </form>
    </div>
  );
}

export default StickyFilter;