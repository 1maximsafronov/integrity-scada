import React from "react";

const ComponentsContent = () => {
  return (
    <div className="page-content__text-content text-content">
      <div className="text-content__section">
        <h1 className="text-content__title">Состав Integrity SCADA</h1>
        <p className="text-content__paragraph">
              Компонентный подход Integrity SCADA, позволяет строить системы автоматизации подконкретные задачи, покупая
              только
              необходимые компоненты и коммуникационные протоколы, вплоть до интеграции отдельных компонентов Integrity
              SCADA со
              сторонними системами, за счет строгого соответствия промышленным стандартам и спецификациям.
        </p>
        <p className="text-content__paragraph">
              Под каждое семейство операционных систем (Linux, Windows) скомпилирован свой дистрибутив продукта,
              учитывающий
              особенности семейства, но обладающий идентичным кодом выполнения.
        </p>
        <p className="text-content__paragraph">
              Разноплатформенные дистрибутивы IntegritySCADA полностью совместимы на уровне приема/передачи и обработки
              данных, что
              позволяет комбинировать решения (например, установка серверной части компонент под Linux, клиентской под
              Windows) без
              потери производительности.
        </p>

        <p className="text-content__paragraph">
              Техническая поддержка на&nbsp;русском языке (&laquo;горячая линия&raquo; связи). Наличие обучающих
              материалов
              и&nbsp;курсов по&nbsp;разработке и&nbsp;администрированию Integrity SCADA в&nbsp;лицензированном
              образовательном центре
              компании.
        </p>
      </div>
      <div className="text-content__section">
        <h2 className="text-content__subtitle">
              Компоненты
        </h2>
        <ul className="text-content__list components-list">
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-server"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityServer — сервер ввода/вывода оперативных данных
            </h3>
            <p className="components-list__desc">
                  Сбор данных по технологическим протоколам, математическая предобработка данных, генерация сообщений
                  о событиях и
                  авариях, предоставление данных сторонним системам и клиентским приложениям.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-history-server"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityHistoryServer — сервер истории
            </h3>
            <p className="components-list__desc">
                  Сбор и хранения данных технологического процесса, а также предоставление исторических данных
                  сторонним системам и
                  клиентским приложениям.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-reports"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityReports — система формирование отчетов
            </h3>
            <p className="components-list__desc">
                  Формирование и управление отчетами различного уровня сложности для анализа исторических данных и
                  оперативной
                  производственной информации
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-data-transport"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityDataTransport — сервер транспорта данных
            </h3>
            <p className="components-list__desc">
                  Транспорт данных, как между локальными компонентами ПК, так и в рамках территориально распределенных
                  источников данных и
                  клиентских компонентов, организует единое адресное пространство.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-client-security"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityClientSecurity — сервер клиентской безопасности
            </h3>
            <p className="components-list__desc">
                  Управление правами доступа пользователей к функциям клиентских приложений SCADA-системы.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-hmi"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityHMI — приложение визуализации
            </h3>
            <p className="components-list__desc">
                  Визуализация технологического процесса посредством графических примитивов, динамик и других способов
                  отображения
                  технологических данных.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-trends"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityTrends — приложение отображения графиков
            </h3>
            <p className="components-list__desc">
                  Отображение в виде графиков изменения оперативных и исторических технологических параметров.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-alarms"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityAlarms — приложение отображения событий
            </h3>
            <p className="components-list__desc">
                  Отображение в табличном представлении с цветовой и звуковой маркировкой оперативных и исторических
                  событий и аварий.
                  Реализует механизм квитирования сообщений.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-web-hmi"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityWebHMI — web-приложение визуализации
            </h3>
            <p className="components-list__desc">
                  Реализация клиента визуализации посредством Web клиента для отображения на любой платформе, в любом
                  браузере,
                  поддерживающем HTML5. Так же поддержаны компоненты IntegrityAlarms, IntegrityTrends для работы в
                  составе проекта
                  визуализации.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-web-alarms"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityWebAlarms — web-приложение отображения событий
            </h3>
            <p className="components-list__desc">
                  Web версия компонента Integrity Alarms. Работает в составе проекта визуализации.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
          <li className="text-content__list-item components-list__item">
            <svg className="components-list__icon" width="100" height="100" fill="#34547A">
              <use xlinkHref="/img/sprite.svg#icon-web-trends"></use>
            </svg>
            <h3 className="components-list__title">
                  IntegrityWebTrends — web-приложение отображения графиков
            </h3>
            <p className="components-list__desc">
                  Web версия компонента Integrity Trends. Работает в составе проекта визуализации.
            </p>
            <a className="components-list__link" href="#">Подробнее</a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default ComponentsContent;
