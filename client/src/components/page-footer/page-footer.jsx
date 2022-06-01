import React from "react";

const PageFooter = () => {
  return (
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
  );
};

export default PageFooter;
