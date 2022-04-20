import React from "react";

const SupportPage = function () {
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
              <a href="support.html" class="side-menu__link">
                Техническая поддержка
              </a>
            </li>
            <li class="side-menu__item">
              <a href="integrator.html" class="side-menu__link">
                Интеграторам
              </a>
            </li>
          </ul>
        </div>
        <div class="text-content">
          <h1 class="text-content__title">
            Техническая поддержка
          </h1>
          <p class="text-content__paragraph">
            Если Вы хотите задать интересующие Вас вопросы или получить консультации по программному продукту Integrity
            SCADA,
            свяжитесь с нами.
            тел.: +7 (3822) 60-10-60
            факс: +7 (3822) 601-001
            e-mail: support@elesy.ru
          </p>
          <h2 class="text-content__subtitle">
            Для оперативного и полного разрешения Вашего обращения, пожалуйста, сообщите:
          </h2>
          <ul class="text-content__list">
            <li class="text-content__list-item">
              Наименование объекта;
            </li>
            <li class="text-content__list-item">
              Контакты технического персонала;
            </li>
            <li class="text-content__list-item">
              Подробное описание сути обращения (указание времени отказа, действиях персонала, предшествующих отказу);
            </li>
            <li class="text-content__list-item">
              <p>
                Информацию диагностического характера в соответствии со списком:
              </p>
              <ul class="text-content__sublist">
                <li class="text-content__sublist-item">
                  Журнал трассировки компонентов
                </li>
                <li class="text-content__sublist-item">
                  Журналы работы устройств (путь создания журналов указывается в настройках программных модулей,
                  входящих в состав
                  SCADA-системы)
                </li>
                <li class="text-content__sublist-item">
                  Снимки экрана с диалоговыми окнами об ошибках
                </li>
              </ul>
            </li>
            <li class="text-content__list-item">
              Дополнительная информация для проведения полноценного анализа.

            </li>
          </ul>

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

export default SupportPage;
