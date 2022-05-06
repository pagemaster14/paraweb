import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <h2 className="card__title">{props.card.title}</h2>
            <p className="card__text">{props.card.description}</p>
                <div className="card__info">
                    <p className="card__info-author">{props.card.author}</p>
                    <p className="card__info-date">{props.card.publishedAt}</p>
                </div>
        </div>
    );
}

export default Card;