import React from "react";
import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";

const MainPage = ()=> {
  return (
    <div className="page">
      <PageHeader />

      <main className="page-content">
        <h1 className="visually-hidden">Integrity Scada</h1>
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
        <section className="gallery">
          <div className="gallery__wrapper">
            <h2 className="visually-hidden">Галлерея мнемосхем</h2>
            <ul className="gallery__list">
              <li className="gallery__item">
                <div className="gallery__picture"></div>
                <p className="gallery__desc">
                Короткое описание, в две строки внесения ясности и деталей
                </p>
              </li>
              <li className="gallery__item">
                <div className="gallery__picture"></div>
                <p className="gallery__desc">
                Короткое описание, в две строки внесения ясности и деталей
                </p>
              </li>
              <li className="gallery__item">
                <div className="gallery__picture"></div>
                <p className="gallery__desc">
                Короткое описание, в две строки внесения ясности и деталей
                </p>
              </li>
              <li className="gallery__item">
                <div className="gallery__picture"></div>
                <p className="gallery__desc">
                Короткое описание, в две строки внесения ясности и деталей
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
        <section className="news">
          <div className="news__wrapper">
            <h2 className="news__title">Новости</h2>
            <ul className="news__list">
              <li className="news__item">
                <div className="news__item-head">
                  <h3 className="news__item-title">Внедрение</h3>
                  <p className="news__item-date">21.10.2022</p>
                </div>
                <p className="news__item-desc">Обновление компонент, регулирование системы, орпргнспрш шщ гш8рншавс р пргщнп
                пгщнмпг гнм гмгм гнпвпсвгпсмыг гнпигпиг
                ыпвм шгнпг п пгнпгеаек нОбновление компонет.
                Регулирование системы, орпргнспрш шщ гш8рншавс р пргщнп пгщнмпг гнм гмгм гнпвпсвгпсмыг гнпигпи..</p>
                <p className="news__item-picture"></p>
                <a href="" className="news__item-link">Подробнее</a>
              </li>
              <li className="news__item">
                <div className="news__item-head">
                  <h3 className="news__item-title">Релиз 5.1</h3>
                  <p className="news__item-date">22.04.2022</p>
                </div>
                <p className="news__item-desc">Обновление компонент, регулирование системы, орпргнспрш шщ гш8рншавс р пргщнп
                пгщнмпг гнм гмгм гнпвпсвгпсмыг гнпигпиг
                ыпвм шгнпг п пгнпгеаек нОбновление компонет.</p>
                <p className="news__item-picture"></p>
                <a href="" className="news__item-link">Подробнее</a>
              </li>
              <li className="news__item">
                <div className="news__item-head">
                  <h3 className="news__item-title">Проводник в царство мертвых</h3>
                  <p className="news__item-date">10.05.2022</p>
                </div>
                <p className="news__item-desc">Обновление компонент, регулирование системы, орпргнспрш шщ гш8рншавс р пргщнп
                пгщнмпг гнм гмгм гнпвпсвгпсмыг гнпигпиг
                ыпвм шгнпг п пгнпгеаек нОбновление компонет.
                Регулирование системы, орпргнспрш шщ гш8рншавс р пргщнп пгщнмпг гнм гмгм гнпвпсвгпс....</p>
                <p className="news__item-picture"></p>
                <a href="" className="news__item-link">Подробнее</a>
              </li>
              <li className="news__item">
                <div className="news__item-head">
                  <h3 className="news__item-title">Итеграция, создаем вместе</h3>
                  <p className="news__item-date">13.11.2021</p>
                </div>
                <p className="news__item-desc">Обновление компонент, регулирование системы, орпргнспрш шщ гш8рншавс р пргщнп
                пгщнмпг гнм гмгм гнпвпсвгпсмыг гнпигпиг
                ыпвм шгнпг п пгнпгеаек нОбновление компонет.
                Регулирование системы, орпргнспрш шщ.</p>
                <p className="news__item-picture"></p>
                <a href="" className="news__item-link">Подробнее</a>
              </li>
            </ul>
            <a href="#" className="news__more">Все новости</a>
          </div>
        </section>
        <section className="user-reuest">
          <div className="user-reuest__wrapper">
            <h2 className="user-reuest__title">
            Хотите получить доступ к онлайн-версии, бесплатному
            дистрибутиву для тестирования платформы<br />
            или задать вопрос?
            </h2>
            <p className="user-reuest__desc">
            Заполните форму и получите доступ к приложению.
            </p>
            <form id="request-form" action="index.html" className="user-reuest__form">
              <p className="user-reuest__textbox">
                <label className="visually-hidden" htmlFor="request-form-user-name">Фамилия Имя Отчество</label>
                <input className="custom-text-input" type="text" name="request-form-user-name" id="request-form-user-name"
                  placeholder="ФИО*" required />
              </p>
              <div className="user-reuest__columns">
                <p className="user-reuest__textbox">
                  <label className="visually-hidden" htmlFor="request-form-user-company">Компания</label>
                  <input className="custom-text-input" type="text" name="request-form-user-company"
                    id="request-form-user-company" placeholder="Компания*" required />
                </p>
                <p className="user-reuest__textbox">
                  <label className="visually-hidden" htmlFor="request-form-user-goal">
                  Цель запроса
                  </label>
                  <input className="custom-text-input" type="text" name="request-form-user-goal" id="request-form-user-goal"
                    placeholder="Цель запроса*" required />
                </p>
                <p className="user-reuest__textbox">
                  <label className="visually-hidden" htmlFor="request-form-user-phone">
                  Телефон
                  </label>
                  <input className="custom-text-input" type="text" name="request-form-user-phone" id="request-form-user-phone"
                    placeholder="Телефон*" required />
                </p>
                <p className="user-reuest__textbox">
                  <label className="visually-hidden" htmlFor="request-form-user-email">
                  Электронная почта
                  </label>
                  <input className="custom-text-input" type="text" name="request-form-user-email" id="request-form-user-email"
                    placeholder="E-mail*" required />
                </p>
              </div>
              <p className="user-reuest__textarea">
                <label className="visually-hidden" htmlFor="request-form-user-message">
                Сообщение
                </label>
                <textarea className="custom-textarea" name="request-form-user-message" id="request-form-user-message"
                  cols="30" rows="10" placeholder="Сообщение"></textarea>
              </p>
              <div className="user-reuest__inner">
                <p className="user-reuest__warning">
                Отправляя запрос, Вы даёте согласие на обработку<br />
                  <span className="user-reuest__warning-data">
                  ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </span>.
                </p>
                <button className="user-reuest__submit btn" type="submit">
                Отправить запрос
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>

      <PageFooter />
    </div>
  );
};

export default MainPage;
