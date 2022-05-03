import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <h2 className="card__title">Заголовок карточки</h2>
            <p className="card__text">Задайте любой вопрос о продукте,
                его настройках, трудностях в работе или неполадках. Поддержка
                работает 24/7, специалисты ответят в течение 15 минут и
                помогут со всем разобраться.</p>
                <div className="card__info">
                    <p className="card__info-author">Василий Пупкин</p>
                    <p className="card__info-date">24 февраля 2022</p>
                </div>
        </div>
    );
}

export default Card;