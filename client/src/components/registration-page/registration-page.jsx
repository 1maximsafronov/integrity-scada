import React from "react";


const RegistrationPage = function () {
  return (
    <div className="page">
      <header className="page-header">
        <div className="page-header__top">
          <div className="page-header__top-wrapper">
            <p className="page-header__slogan">
              <a href="#" className="page-header__logo">
                <img src="img/logo-elesy.svg" width="67" height="40" alt="" />
              </a>
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
                <a href="#" className="user-nav__link user-nav__link--login">
                Вход
                </a>
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
        <h1>Регистрация</h1>
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


export default RegistrationPage;
