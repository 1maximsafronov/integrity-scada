import React from "react";

const DemoContent = () => {
  return (
    <div className="page-content__text-content text-content">
      <h1 className="text-content__title">
            Запрос пробной версии с демонстрационным проектом
      </h1>
      <p className="text-content__paragraph">
            Пробная версия предназначена для ознакомления с возможностями программного продукта Integrity SCADA. Имеет
            ограничение
            только по времени использования, не имеет ограничения по функционалу компонент Integrity SCADA.
      </p>
      <p className="text-content__paragraph">
            Включает основные компоненты и ограниченна по времени работы:
      </p>
      <ul className="text-content__list">
        <li className="text-content__list-item">
              Сервер ввода/вывода IntegrityServer
        </li>
        <li className="text-content__list-item">
              Сервер хранения исторических данных IntegrityHistoryServer
        </li>
        <li className="text-content__list-item">
              Система формирования отчетов IntegrityReports
        </li>
        <li className="text-content__list-item">
              Система клиенткой безопасности IntegrityClientSecurity
        </li>
        <li className="text-content__list-item">
              Сервер транспорта данных IntegrityDataTransport
        </li>
        <li className="text-content__list-item">
              Визуализация IntegrityHMI
        </li>
        <li className="text-content__list-item">
              Просмотр оперативных и исторических событий IntegrityAlarms
        </li>
        <li className="text-content__list-item">
              Просмотр оперативный и историчесих графиков IntegrityTrends
        </li>
        <li className="text-content__list-item">
              Тонкие клиенты IntegrityWebHMI, IntegrityWebAlarms, IntegrityWebTrends
        </li>
        <li className="text-content__list-item">
              Документация по всем компонентам Integrity SCADA
        </li>
      </ul>
      <p className="text-content__paragraph">
            Для получения полнофункциональной версии Integrity SCADA в целях проведения полноценного внутреннего
            тестирования
            рекомендуем вам обратиться с просьбой выдать лицензию во временное пользование:
      </p>
      <ul className="text-content__list">
        <li className="text-content__list-item">
              на почту scada@elesy.ru
        </li>
        <li className="text-content__list-item">
              по тел.: +7 (3822) 601-012, 601-055
        </li>
      </ul>
      <p className="text-content__paragraph">
            После проверки Вашей заявки нашим менеджером, Вам будет отправлена ссылка на скачивание демо-версии.
      </p>
      <form className="demo-form" id="get-demo-form" action="index.html" method="post">
        <p>
          <label className="visually-hidden" htmlFor="get-demo-form-user-name">ФИО</label>
          <input className="custom-text-input" type="text" name="get-demo-form-user-name" id="get-demo-form-user-name"
            placeholder="ФИО*" />
        </p>
        <p>
          <label className="visually-hidden" htmlFor="get-demo-form-email">E-mail</label>
          <input className="custom-text-input" type="email" name="get-demo-form-email" id="get-demo-form-email"
            placeholder="E-mail*" />
        </p>
        <p>
          <label className="visually-hidden" htmlFor="get-demo-form-company">Компания</label>
          <input className="custom-text-input" type="text" name="get-demo-form-company" id="get-demo-form-company"
            placeholder="Компани*" />
        </p>
        <p>
          <label className="visually-hidden" htmlFor="get-demo-form-phone">Телефон</label>
          <input className="custom-text-input" type="tel" name="get-demo-form-phone" id="get-demo-form-phone"
            placeholder="Телефон*" />
        </p>
        <p>
          <label className="visually-hidden" htmlFor="get-demo-form-target-object">Объект автоматизации</label>
          <input className="custom-text-input" type="text" name="get-demo-form-target-object"
            id="get-demo-form-target-object" placeholder="Объект автоматизации*" />
        </p>
        <p>
          <label className="visually-hidden" htmlFor="get-demo-form-user-goal">С какой целью загужаете пробную
                версию</label>
          <input className="custom-text-input" type="text" name="get-demo-form-user-goal" id="get-demo-form-user-goal"
            placeholder="С какой целью загужаете пробную версию*" />
        </p>
        <div>
          <label className="visually-hidden" htmlFor="get-demo-form-message">Сообщение</label>
          <textarea className="custom-textarea" name="get-demo-form-message" id="get-demo-form-message" cols="30"
            rows="10" placeholder="Сообщение"></textarea>
        </div>
        <div>
          <p className="demo-form__warning">
                Отправляя запрос, Вы даёте согласие на обработку ПЕРСОНАЛЬНЫХ ДАННЫХ.
          </p>
          <button className="btn" type="submit">Отправить запрос</button>
        </div>
      </form>
    </div>
  );
};

export default DemoContent;
