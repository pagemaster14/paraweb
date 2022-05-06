import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

function Cards(props) {

    return (
<section className="cards">
{props.cards.map((card) => (
            <Card
            key={card.url}
            card={card}
             />
            ))}
        </section>
    );
}

export default Cards;