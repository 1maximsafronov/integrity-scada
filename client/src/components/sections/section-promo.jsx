import React from "react";

const SectionPromo = () => {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <p className="promo__logo">
          <img className="promo__logo-image" src="img/logo-integrity.svg" width="450" height="115" alt="" />
        </p>
        <h2 className="promo__title">
            кроссплатформенные решения
          <span className="promo__small-title">
              для управления производством
          </span>
        </h2>
        <p className="promo__desc">
            Платформа для создания систем управления
            и автоматизации, без ограничения
            на использование по отраслям промышленности
            и типам технологических процессов.
        </p>
        <div className="promo__links">
          <a href="" className="promo__link btn">
              Демо
          </a>
          <a href="" className="promo__link promo__link--white btn">
              Узнать цену
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
