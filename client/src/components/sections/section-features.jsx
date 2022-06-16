import React from "react";

const SectionFeatures = () => {
  return (
    <section className="features">
      <div className="features__wrapper">
        <h2 className="features__title">
            Что вы получите приобретя наш продукт?
        </h2>
        <ul className="features__list">
          <li className="features__item">
            <svg className="features__icon" width="80" height="80" fill="#004578">
              <use xlinkHref="img/sprite.svg#icon-feature-eye"></use>
            </svg>
            <p className="features__desc">
                Отечественное санкциононезависимое
                решение на свободных ОС.
            </p>
          </li>
          <li className="features__item">
            <svg className="features__icon" width="80" height="80" fill="#004578">
              <use xlinkHref="img/sprite.svg#icon-feature-scada"></use>
            </svg>
            <p className="features__desc">
                Полностью перекрывает
                уровень SCADA и заходит на уровни MES и ERP.
            </p>
          </li>
          <li className="features__item">
            <svg className="features__icon" width="80" height="80" fill="#004578">
              <use xlinkHref="img/sprite.svg#icon-feature-gear"></use>
            </svg>
            <p className="features__desc">
                Вертикальное и горизонтальное масштабирования от IoT до сложных распределенных систем.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionFeatures;
