import React from "react";

const SectionGallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <h2 className="visually-hidden">Галлерея мнемосхем</h2>
        <ul className="gallery__list">
          <li className="gallery__item">
            <div className="gallery__picture">
              <img src="img/scheme-4.png" alt="Схема 4" />
            </div>
            <p className="gallery__desc">
                Короткое описание схемы
            </p>
          </li>
          <li className="gallery__item">
            <div className="gallery__picture">
              <img src="img/scheme-2.png" alt="Схема 2" />
            </div>
            <p className="gallery__desc">
                Короткое описание схемы
            </p>
          </li>
          <li className="gallery__item">
            <div className="gallery__picture">
              <img src="img/scheme-3.png" alt="Схема 3" />
            </div>
            <p className="gallery__desc">
                Короткое описание схемы
            </p>
          </li>
          <li className="gallery__item">
            <div className="gallery__picture">
              <img src="img/scheme-4.png" alt="Схема 4" />
            </div>
            <p className="gallery__desc">
                Короткое описание схемы
            </p>
          </li>
        </ul>
        <button className="gallery__controll gallery__controll--left">
          <span className="visually-hidden">Влево</span>
        </button>
        <button className="gallery__controll gallery__controll--right">
          <span className="visually-hidden">Вправо</span>
        </button>
      </div>
    </section>
  );
};

export default SectionGallery;
