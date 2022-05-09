import React from "react";
import "./StickyFilter.css";

function StickyFilter(props) {
  const [isFilterSticky, setIsFilterSticky] = React.useState(false);
  const [isAuthorList, setIsAuthorList] = React.useState(false);
  const [isFirstDateList, setIsFirstDateList] = React.useState(false);
  const [isLastDateList, setIsLastDateList] = React.useState(false);
  const [isButtonContent, setIsButtonContent] = React.useState('Выберите автора');
  const [isFirstDateButtonContent, setIsFirstDateButtonContent] = React.useState('От');
  const [isLastDateButtonContent, setIsLastDateButtonContent] = React.useState('До');
  const [dateError, setDateError] = React.useState('');
  const currentViewport = document.documentElement.clientWidth;
  const stickyFilterClassName = `stickyFilter ${isFilterSticky && "stickyFilter_scroll"}`;
  const authorListClassName = `stickyFilter__author-list ${isAuthorList && "stickyFilter__list_opened"}`;
  const firstDateListClassName = `stickyFilter__dates-list-first ${isFirstDateList && "stickyFilter__list_opened"}`;
  const lastDateListClassName = `stickyFilter__dates-list-last ${isLastDateList && "stickyFilter__list_opened"}`;

  const [findedCard, setFindedCard] = React.useState('');
  const [findedFirstDate, setFindedFirstDate] = React.useState('');
  const [findedLastDate, setFindedLastDate] = React.useState('');

  React.useEffect(() => {
    window.addEventListener('scroll', function () {
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

  function firstDateListHandler(evt) {
    evt.preventDefault();
    setIsFirstDateList(!isFirstDateList)
  }

  function lastDateListHandler(evt) {
    evt.preventDefault();
    setIsLastDateList(!isLastDateList)
  }

  function authorCellHandler(e) {
    setIsButtonContent(e.target.textContent)
    setIsAuthorList(false)
    setFindedCard(e.target.textContent);
    return findedCard;
  }

  React.useEffect(() => {
    if (findedCard) {
      props.onAuthorSearch(findedCard)
    }
  })

  function firstDateCellHandler(e) {
    setIsFirstDateButtonContent(e.target.textContent)
    setIsFirstDateList(false)
    setFindedFirstDate(e.target.textContent);
    return findedFirstDate;
  }

  function lastDateCellHandler(e) {
    setIsLastDateButtonContent(e.target.textContent)
    setIsLastDateList(false)
    setFindedLastDate(e.target.textContent);
    return findedLastDate;
  }

  React.useEffect(() => {
    const firstDate = new Date(findedFirstDate);
    const lastDate = new Date(findedLastDate);
    const interimDate = firstDate > lastDate;
    if (interimDate) {
      setDateError('Первая дата должна быть меньше, или равна первой')
    } else if (props.filteredCards.length > 0) {
      setDateError('Произведена фильтрация по автору. Для осуществеления фильтрации по датам сбросьте фильтр по автору.')
    } else if (findedFirstDate && findedLastDate) {
      setDateError('Произведена фильтрация по датам')
      props.onDateSearch(findedFirstDate, findedLastDate)
    }
  }, [findedFirstDate, findedLastDate, props])

  return (
    <div className={stickyFilterClassName}>
      <div className="stickyFilter__content" >
        <button className="stickyFilter__author" arialabel="Open" onClick={authorListHandler}>{isButtonContent}</button>
        <div className={authorListClassName}>
          {props.cards.filter((card, index, self) => self.findIndex(
            (t) => { return (t.author === card.author) }) === index).map((card) => (
              <p className="stickyFilter__author-cell" key={card.url} onClick={authorCellHandler}>{card.author}</p>
            ))}
        </div>
        <div className="stickyFilter__dates">
          <button className="stickyFilter__dates-button" arialabel="Open"
            onClick={firstDateListHandler}>{isFirstDateButtonContent}</button>
          <div className={firstDateListClassName}>
            {props.cards.filter((card, index, self) => self.findIndex(
              (t) => { return (t.publishedAt.slice(0, 16) === card.publishedAt.slice(0, 16)) }) === index).map((card) => (
                <p className="stickyFilter__dates-list-cell" key={card.url} onClick={firstDateCellHandler}>{card.publishedAt.slice(0, 16)}</p>
              ))}
          </div>
          <span className="stickyFilter__dates-span">~</span>
          <button className="stickyFilter__dates-button" arialabel="Open"
            onClick={lastDateListHandler}>{isLastDateButtonContent}</button>
          <div className={lastDateListClassName}>
            {props.cards.filter((card, index, self) => self.findIndex(
              (t) => { return (t.publishedAt.slice(0, 16) === card.publishedAt.slice(0, 16)) }) === index).map((card) => (
                <p className="stickyFilter__dates-list-cell" key={card.url} onClick={lastDateCellHandler}>{card.publishedAt.slice(0, 16)}</p>
              ))}
          </div>
        </div>
        <span className="stickyFilter__dates-error">{dateError}</span>
      </div>
    </div>
  );
}

export default StickyFilter;