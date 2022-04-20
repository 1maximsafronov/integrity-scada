import React from "react";

const LicensingPage = function () {
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
            <li class="side-menu__item side-menu__item--active">
              <a href="licensing.html" class="side-menu__link">
                Политика лицензирования
              </a>
            </li>
            <li class="side-menu__item">
              <a href="system-requirements.html" class="side-menu__link">
                Аппаратные системные требования
              </a>
            </li>
            <li class="side-menu__item">
              <a href="demo.html" class="side-menu__link">
                Запрос пробной версии
              </a>
            </li>
          </ul>
        </div>
        <div class="text-content">
          <div class="text-content__section">
            <h1 class="text-content__title">
              Политика лицензирования
            </h1>
            <p class="text-content__paragraph">
              Среда разработки <b>Integrity SCADA</b> поставляется бесплатно, а лицензируется только то количество
              тегов<span class="text-content__note">[1]</span> и только те
              функциональные модули, которые требуются для конкретного проекта. Это позволяет платить только за тот
              масштаб системы, который действительно востребован.
            </p>
            <p class="text-content__paragraph">
              В качестве средства защиты используются аппаратные ключи Sentinel. Для серверных компонентов <b>Integrity
                SCADA</b> требуется обязательное наличие локального аппаратного ключа. А сетевой ключ контролирует
              максимальное количество одновременных подключений клиентских приложений (например, не более 10). По такому
              принципу работают системы визуализации, оповещения, построения графиков технологического процесса.
            </p>
            <p class="text-content__paragraph">
              Так же доступна программная лицензия. Она бывает только локальной, и, соответственно, с ней работают все
              компоненты <b>Integrity SCADA</b>. Программная лицензия привязывается к конечному компьютеру.
            </p>
          </div>
          <div class="text-content__section">
            <h2 class="text-content__subtitle">
              Перечень лицензируемых компонентов Integrity SCADA
            </h2>
            <ul class="text-content__list">
              <li class="text-content__list-item">
                <p>
                  <a href="#">IntegrityServer</a> — сервер оперативных данных (сервер ввода/вывода). Функционал сервера
                  ввода/вывода IntegrityServer
                  масштабируется следующими компонентами, которые лицензируются отдельно:
                </p>
                <ul class="text-content__sublist">
                  <li class="text-content__sublist-item">
                    Модуль SNMP
                  </li>
                  <li class="text-content__sublist-item">
                    Модуль ГОСТ Р МЭК 60870-5-101/104 мастер
                  </li>
                  <li class="text-content__sublist-item">
                    Модуль Modbus TCP/IP мастер
                  </li>
                </ul>
              </li>
              <li class="text-content__list-item">
                Модули, бесплатно включенные в IntegrityServer (не требуют лицензирования):
              </li>
              <li class="text-content__list-item">
                Модуль ОРС UA DA серверМодуль ОРС UA DA клиентМодуль ОРС UA АЕ серверМодуль вычислений
              </li>
              <li class="text-content__list-item">
                IntegrityHistoryServer — высокопроизводительный сервер исторических данных
              </li>
              <li class="text-content__list-item">
                IntegrityReports — система формирования отчетов
              </li>
              <li class="text-content__list-item">
                IntegrityAlarms — отображение сообщений об авариях и событиях
              </li>
              <li class="text-content__list-item">
                IntegrityTrends — построение трендов, графиков, таблиц
              </li>
              <li class="text-content__list-item">
                IntegrityHMI — отображение мнемосхем для мониторинга технологического процесса
              </li>
              <li class="text-content__list-item">
                IntegrityWebHMI (WebHMI, WebAlarms, WebTrends) — клиент удаленного просмотра технологического процесса в
                реальном
                времени через Web-браузер
              </li>
              <li class="text-content__list-item">
                IntegrityClientSecurity — разграничение клиентского доступа
              </li>
              <li class="text-content__list-item">
                IntegrityDataTransport — система транспорта технологических данных
              </li>
            </ul>
          </div>
          <p class="text-content__footnote"></p>
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

export default LicensingPage;
