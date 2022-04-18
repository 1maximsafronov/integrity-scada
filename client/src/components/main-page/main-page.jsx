import React from "react";
import {Link} from "react-router-dom";

const MainPage = function () {
  return (
    <div className="page">
      <header className="page-header">
        <div className="page-header__top">
          <div className="page-header__top-wrapper">
            <p className="page-header__slogan">
              <Link to="/" className="page-header__logo">
                <img src="img/logo-elesy.svg" width="67" height="40" alt="" />
              </Link>
            Автоматизация технологических процессов
            </p>
            <a href="" className="page-header__phone">
            +7 (3822) 601-012
            </a>
          </div>
        </div>
        <div className="page-header__nav page-header__nav--closed">
          <div className="page-header__nav-top">
            <button className="page-header__nav-toggle">
              <span className="visually-hidden">
              Открыть меню
              </span>
            </button>
          </div>
          <div className="page-header__nav-wrapper">
            <ul className="main-nav">
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">
                Продукты
                </a>
              </li>
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">
                Поддержка
                </a>
              </li>
              <li className="main-nav__item main-nav__item--active">
                <a href="#" className="main-nav__link">
                Контакты
                </a>
              </li>
            </ul>
            <div className="user-nav">
              <div className="user-nav__item">
                <Link to="/login" className="user-nav__link user-nav__link--login">
                Вход
                </Link>
              </div>
              <div className="user-nav__item">
                <a href="#" className="user-nav__link user-nav__link--registration">
                Регистрация
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page-content">
        <h1 className="visually-hidden">Integrity Scada</h1>
        <section className="promo">
          <div className="promo__wrapper">
            <div className="promo__info">
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
              <a href="" className="promo__demo-link btn">
              Демо
              </a>
            </div>
            <div className="promo__slider">

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
            <h2 className="visually-hidden">Наши партнёры</h2>
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
            <form id="request-form" action="" className="user-reuest__form">
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

      <footer className="page-footer">
        <div className="page-footer__wrapper">
          <div className="page-footer__nav">
            <h2 className="page-footer__title page-footer__nav-title">
            Поддержка
            </h2>
            <ul className="page-footer__nav-list">
              <li className="page-footer__nav-item">
                <a href="" className="page-footer__nav-link">
                Документы
                </a>
              </li>
              <li className="page-footer__nav-item">
                <a href="" className="page-footer__nav-link">
                Видеоуроки
                </a>
              </li>
              <li className="page-footer__nav-item">
                <a href="" className="page-footer__nav-link">
                Тех.поддержка
                </a>
              </li>
              <li className="page-footer__nav-item">
                <a href="" className="page-footer__nav-link">
                Заявка на обучение
                </a>
              </li>
            </ul>
          </div>
          <div className="page-footer__contacts">
            <h2 className="page-footer__title">
            Головной оффис
            </h2>
            <a href="mailto:" className="page-footer__contacts-item page-footer__contacts-item--mail">
            elesy@elesy.ru
            </a>
            <a href="tel:+" className="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 601-000
            </a>
          </div>
          <div className="page-footer__contacts">
            <h2 className="page-footer__title">
            Техническая поддержка
            </h2>
            <a href="mailto:" className="page-footer__contacts-item page-footer__contacts-item--mail">
            support@elesy.ru
            </a>
            <a href="tel:+" className="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 60-10-60
            </a>
            <a href="tel:+" className="page-footer__contacts-item page-footer__contacts-item--fax">
            +7 (3822) 601-001
            </a>
          </div>
          <div className="page-footer__contacts">
            <h2 className="page-footer__title">
            Коммерческий отдел
            </h2>
            <a href="mailto:" className="page-footer__contacts-item page-footer__contacts-item--mail">
            scada@elesy.ru
            </a>
            <a href="tel:+" className="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 601-012
            </a>
            <a href="tel:+" className="page-footer__contacts-item page-footer__contacts-item--fax">
            +7 (3822) 601-001
            </a>
          </div>
        </div>
        <p className="page-footer__copyright">
        (с) 2022 Все права защищены
        </p>
      </footer>
    </div>
  );
};


export default MainPage;
