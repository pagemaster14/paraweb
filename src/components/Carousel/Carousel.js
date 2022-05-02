import React from "react";
import "./Carousel.css";
// eslint-disable-next-line no-unused-vars
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

function Carousel() {
  return (
    <div className="main-carousel" data-flickity='{ "wrapAround": true }'>
      <div className="carousel-cell">
        <h1 className="carousel__title">IT-инфраструктура для бизнеса</h1>
        <p className="carousel__subtitle">Мы предлагаем комплексные решения для всех уровней
        бизнеса: от индивидуальных предпринимателей до
        крупных международных компаний. Более 20 000
        клиентов по всему миру доверяют нам.</p>
      </div>
      <div className="carousel-cell">
        <h2 className="carousel__title">IT-инфраструктура для бизнеса</h2>
        <p className="carousel__subtitle">Мы предлагаем комплексные решения для всех уровней
        бизнеса: от индивидуальных предпринимателей до
        крупных международных компаний. Более 20 000
        клиентов по всему миру доверяют нам.</p>
      </div>
      <div className="carousel-cell">
      <h2 className="carousel__title">IT-инфраструктура для бизнеса</h2>
      <p className="carousel__subtitle">Мы предлагаем комплексные решения для всех уровней
        бизнеса: от индивидуальных предпринимателей до
        крупных международных компаний. Более 20 000
        клиентов по всему миру доверяют нам.</p>
      </div>
    </div>

  )
}
export default Carousel;