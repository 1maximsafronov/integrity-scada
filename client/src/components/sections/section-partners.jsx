import React from "react";

const SectionPartners = () => {
  return (
    <section className="partners">
      <div className="partners__wrapper">
        <h2 className="partners__title">Партнёры</h2>
        <ul className="partners__list">
          <li className="partners__item">
            <img src="img/logo-transneft.svg" alt="Транснефть" />
          </li>
          <li className="partners__item">
            <img src="img/logo-suek.png" alt="Суэк" />
          </li>
          <li className="partners__item">
            <img src="img/logo-mosmetro.png" alt="Московское метро" />
          </li>
          <li className="partners__item">
            <img src="img/logo-gazprom.svg" alt="Газпром" />
          </li>
          <li className="partners__item">
            <img src="img/logo-lukoil.svg" alt="Лукойл" />
          </li>
          <li className="partners__item">
            <img src="img/logo-rosseti.svg" alt="Россети" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionPartners;
