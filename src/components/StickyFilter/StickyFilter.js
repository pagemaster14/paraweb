import React from "react";
import "./StickyFilter.css";

function StickyFilter(props) {
  return (
    <div className="stickyFilter">
      <form className="stickyFilter__form">
        <button className="stickyFilter__author">Выберите автора</button>
        <div className="stickyFilter__author-list">
        {props.cards.map((card) => (
          <p className="stickyFilter__author-cell" key={card.url}>{card.author}</p>
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