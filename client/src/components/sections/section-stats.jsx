import React from "react";

const SectionStats = () => {
  return (
    <section className="stats">
      <div className="stats__wrapper">
        <h2 className="visually-hidden">Наша статистика</h2>
        <ul className="stats__list">
          <li className="stats__item">
            <b className="stats__number">20</b>
            <p className="stats__desc">лет опыта разработки SCADA</p>
          </li>
          <li className="stats__item">
            <b className="stats__number">3 000+</b>
            <p className="stats__desc">проектов автоматизации</p>
          </li>
          <li className="stats__item">
            <b className="stats__number">20 000+</b>
            <p className="stats__desc">инсталяций</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionStats;
