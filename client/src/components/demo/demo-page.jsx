import React from "react";

const DemoPage = function () {
  return (
    <div class="page">
    <header class="page-header">
      <div class="page-header__top">
        <div class="page-header__top-wrapper">
          <p class="page-header__slogan">
            <a href="#" class="page-header__logo">
              <img src="img/logo-elesy.svg" width="67" height="40" alt="" />
            </a>
            Автоматизация технологических процессов
          </p>
          <a href="" class="page-header__phone">
            +7 (3822) 601-012
          </a>
        </div>
      </div>
      <div class="page-header__nav page-header__nav--closed">
        <div class="page-header__nav-top">
          <button class="page-header__nav-toggle">
            <span class="visually-hidden">
              Открыть меню
            </span>
          </button>
        </div>
        <div class="page-header__nav-wrapper">
          <ul class="main-nav">
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">
                Продукты
              </a>
            </li>
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">
                Поддержка
              </a>
            </li>
            <li class="main-nav__item main-nav__item--active">
              <a href="#" class="main-nav__link">
                Контакты
              </a>
            </li>
          </ul>
          <div class="user-nav">
            <div class="user-nav__item">
              <a href="#" class="user-nav__link user-nav__link--login">
                Вход
              </a>
            </div>
            <div class="user-nav__item">
              <a href="#" class="user-nav__link user-nav__link--registration">
                Регистрация
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="page-content">
      <div class="page-content__wrapper">
        <div class="side-menu">
          <ul class="side-menu__list">
            <li class="side-menu__item">
              <a href="" class="side-menu__link">
                Состав Integrity SCADA
              </a>
            </li>
            <li class="side-menu__item">
              <a href="licensing.html" class="side-menu__link">
                Политика лицензирования
              </a>
            </li>
            <li class="side-menu__item">
              <a href="system-requirements.html" class="side-menu__link">
                Аппаратные системные требования
              </a>
            </li>
            <li class="side-menu__item side-menu__item--active">
              <a href="demo.html" class="side-menu__link">
                Запрос пробной версии
              </a>
            </li>
          </ul>
        </div>
        <div class="text-content">
          <h1 class="text-content__title">
            Запрос пробной версии с демонстрационным проектом
          </h1>
          <p class="text-content__paragraph">
            Пробная версия предназначена для ознакомления с возможностями программного продукта Integrity SCADA. Имеет
            ограничение
            только по времени использования, не имеет ограничения по функционалу компонент Integrity SCADA.
          </p>
          <p class="text-content__paragraph">
            Включает основные компоненты и ограниченна по времени работы:
          </p>
          <ul class="text-content__list">
            <li class="text-content__list-item">
              Сервер ввода/вывода IntegrityServer
            </li>
            <li class="text-content__list-item">
              Сервер хранения исторических данных IntegrityHistoryServer
            </li>
            <li class="text-content__list-item">
              Система формирования отчетов IntegrityReports
            </li>
            <li class="text-content__list-item">
              Система клиенткой безопасности IntegrityClientSecurity
            </li>
            <li class="text-content__list-item">
              Сервер транспорта данных IntegrityDataTransport
            </li>
            <li class="text-content__list-item">
              Визуализация IntegrityHMI
            </li>
            <li class="text-content__list-item">
              Просмотр оперативных и исторических событий IntegrityAlarms
            </li>
            <li class="text-content__list-item">
              Просмотр оперативный и историчесих графиков IntegrityTrends
            </li>
            <li class="text-content__list-item">
              Тонкие клиенты IntegrityWebHMI, IntegrityWebAlarms, IntegrityWebTrends
            </li>
            <li class="text-content__list-item">
              Документация по всем компонентам Integrity SCADA
            </li>
          </ul>
          <p class="text-content__paragraph">
            Для получения полнофункциональной версии Integrity SCADA в целях проведения полноценного внутреннего
            тестирования
            рекомендуем вам обратиться с просьбой выдать лицензию во временное пользование:
          </p>
          <ul class="text-content__list">
            <li class="text-content__list-item">
              на почту scada@elesy.ru
            </li>
            <li class="text-content__list-item">
              по тел.: +7 (3822) 601-012, 601-055
            </li>
          </ul>
          <p class="text-content__paragraph">
            После проверки Вашей заявки нашим менеджером, Вам будет отправлена ссылка на скачивание демо-версии.
          </p>
          <form class="demo-form" action="" method="post">
            <p>
              <label class="visually-hidden" for="">ФИО</label>
              <input type="text" name="" id="" placeholder="ФИО*"/>
            </p>
            <p>
              <label class="visually-hidden" for="">E-mail</label>
              <input type="email" name="" id="" placeholder="E-mail*"/>
            </p>
            <p>
              <label class="visually-hidden" for="">Компания</label>
              <input type="text" name="" id="" placeholder="Компани*"/>
            </p>
            <p>
              <label class="visually-hidden" for="">Телефон</label>
              <input type="tel" name="" id="" placeholder="Телефон*"/>
            </p>
            <p>
              <label class="visually-hidden" for="">Объект автоматизации</label>
              <input type="text" name="" id="" placeholder="Объект автоматизации*"/>
            </p>
            <p>
              <label class="visually-hidden" for="">С какой целью загужаете пробную версию</label>
              <input type="text" name="" id="" placeholder="С какой целью загужаете пробную версию*"/>
            </p>
            <div>
              <label class="visually-hidden" for="">Сообщение</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Сообщение"></textarea>
            </div>
            <div>
              <p class="demo-form__warning">
                Отправляя запрос, Вы даёте согласие на обработку ПЕРСОНАЛЬНЫХ ДАННЫХ.
              </p>
              <button type="submit">Отправить запрос</button>
            </div>
          </form>
        </div>
      </div>
    </main>

    <footer class="page-footer">
      <div class="page-footer__wrapper">
        <div class="page-footer__nav">
          <h2 class="page-footer__title page-footer__nav-title">
            Поддержка
          </h2>
          <ul class="page-footer__nav-list">
            <li class="page-footer__nav-item">
              <a href="" class="page-footer__nav-link">
                Документы
              </a>
            </li>
            <li class="page-footer__nav-item">
              <a href="" class="page-footer__nav-link">
                Видеоуроки
              </a>
            </li>
            <li class="page-footer__nav-item">
              <a href="" class="page-footer__nav-link">
                Тех.поддержка
              </a>
            </li>
            <li class="page-footer__nav-item">
              <a href="" class="page-footer__nav-link">
                Заявка на обучение
              </a>
            </li>
          </ul>
        </div>
        <div class="page-footer__contacts">
          <h2 class="page-footer__title">
            Головной оффис
          </h2>
          <a href="mailto:" class="page-footer__contacts-item page-footer__contacts-item--mail">
            elesy@elesy.ru
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 601-000
          </a>
        </div>
        <div class="page-footer__contacts">
          <h2 class="page-footer__title">
            Техническая поддержка
          </h2>
          <a href="mailto:" class="page-footer__contacts-item page-footer__contacts-item--mail">
            support@elesy.ru
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 60-10-60
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--fax">
            +7 (3822) 601-001
          </a>
        </div>
        <div class="page-footer__contacts">
          <h2 class="page-footer__title">
            Коммерческий отдел
          </h2>
          <a href="mailto:" class="page-footer__contacts-item page-footer__contacts-item--mail">
            scada@elesy.ru
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 601-012
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--fax">
            +7 (3822) 601-001
          </a>
        </div>
      </div>
      <p class="page-footer__copyright">
        (с) 2022 Все права защищены
      </p>
    </footer>
  </div>
  );
};

export default DemoPage;
