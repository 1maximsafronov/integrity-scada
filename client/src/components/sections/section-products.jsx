import React from "react";

const SectionProducts = () => {
  return (
    <section className="products">
      <div className="products__wrapper">
        <h2 className="products__title">Продукты компании</h2>
        <ul className="products__list">
          <li className="products__item product-item">
            <a href="" className="product-item__link">
              <svg className="product-item__icon" width="100" height="100" fill="#004578">
                <use xlinkHref="img/sprite.svg#icon-server"></use>
              </svg>
              <h3 className="product-item__title">
                  IntegrityServer
                <span className="product-item__small-title">
                    Cервер ввода/вывода оперативных данных
                </span>
              </h3>
            </a>
            <p className="product-item__desc">
                Сбор данных по технологическим протоколам, математическая предобработка данных, генерация сообщений о
                событиях и
                авариях, предоставление данных сторонним системам и клиентским приложениям.
            </p>
          </li>
          <li className="products__item product-item">
            <a href="" className="product-item__link">
              <svg className="product-item__icon" width="100" height="100" fill="#004578">
                <use xlinkHref="img/sprite.svg#icon-hmi"></use>
              </svg>
              <h3 className="product-item__title">
                  IntegrityHMI
                <span className="product-item__small-title">
                    Приложение визуализации
                </span>
              </h3>
            </a>
            <p className="product-item__desc">
                Визуализация технологического процесса посредством графических примитивов, динамик и других способов
                отображения
                технологических данных.
            </p>
          </li>
          <li className="products__item product-item">
            <a href="" className="product-item__link">
              <svg className="product-item__icon" width="100" height="100" fill="#004578">
                <use xlinkHref="img/sprite.svg#icon-data-transport"></use>
              </svg>
              <h3 className="product-item__title">
                  IntegrityDataTransport
                <span className="product-item__small-title">
                    Сервер транспорта данных
                </span>
              </h3>
            </a>
            <p className="product-item__desc">
                Транспорт данных, как между локальными компонентами ПК, так и в рамках территориально распределенных
                источников данных и
                клиентских компонентов, организует единое адресное пространство.
            </p>
          </li>
          <li className="products__item product-item">
            <a href="" className="product-item__link">
              <svg className="product-item__icon" width="100" height="100" fill="#004578">
                <use xlinkHref="img/sprite.svg#icon-reports"></use>
              </svg>
              <h3 className="product-item__title">
                  IntegrityReports
                <span className="product-item__small-title">
                    Система формирование отчетов
                </span>
              </h3>
            </a>
            <p className="product-item__desc">
                Формирование и управление отчетами различного уровня сложности для анализа исторических данных и
                оперативной
                производственной информации
            </p>
          </li>
          <li className="products__item product-item">
            <a href="" className="product-item__link">
              <svg className="product-item__icon" width="100" height="100" fill="#004578">
                <use xlinkHref="img/sprite.svg#icon-history-server"></use>
              </svg>
              <h3 className="product-item__title">
                  IntegrityHistoryServer
                <span className="product-item__small-title">
                    Сервер истории
                </span>
              </h3>
            </a>
            <p className="product-item__desc">
                Сбор и хранения данных технологического процесса, а также предоставление исторических данных сторонним
                системам и
                клиентским приложениям.
            </p>
          </li>
          <li className="products__item product-item product-item--more">
            <a href="" className="product-item__link">
              <svg className="product-item__icon" width="100" height="100" fill="#004578">
                <use xlinkHref="img/sprite.svg#icon-feature-gear"></use>
              </svg>
              <h3 className="product-item__title">
                  Полный список продуктов
              </h3>
            </a>
            <p className="product-item__desc">
                Более подробную информацию по всем компонентам комплекса вы можите ознакомиться пройдя по ссылке
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionProducts;
