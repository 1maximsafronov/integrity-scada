import React from "react";

const AboutIntegrityContent = () => {
  return (
    <div className="page-content__text-content text-content">
      <div className="text-content__section">
        <h1 className="text-content__title">Подробнее о Integrity SCADA</h1>
        <p className="text-content__paragraph">
          <b>Integrity SCADA</b>&nbsp;&mdash; высокотехнологичный кроссплатформенный программно-инструментальный
              комплекс для реализации автоматизированных систем управления технологическими процессами.
        </p>
        <p className="text-content__paragraph">
          <b>Integrity SCADA</b> не&nbsp;привязан к&nbsp;конкретному типу производства, и&nbsp;может быть применим
              на&nbsp;предприятиях различных отраслей промышленности. Integrity SCADA имеет модульную структуру, что
              позволяет реализовывать проекты любого масштаба, только из&nbsp;необходимых функциональных компонентов
              в&nbsp;зависимости от&nbsp;целей проекта автоматизации.
        </p>
        <p className="text-content__paragraph">
              Среда разработки Integrity SCADA поставляется бесплатно. Оплачиваются только исполнительные (runtime)
              лицензии, с&nbsp;выбором нужного количества доступных тегов и&nbsp;набора компонентов системы.
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
              Integrity SCADA – полноценный функционал для автоматизации
        </h2>
        <ul className="text-content__list">
          <li className="text-content__list-item">
                визуализация технологических процессов в наглядном виде: мнемосхемы с функциями управления, графики,
                таблицы, журналы
                событий;
          </li>
          <li className="text-content__list-item">
                анализ и контроль технологических процессов, информирование о возникающих событиях и авариях;
          </li>
          <li className="text-content__list-item">
                диспетчерское и автоматическое управление;
          </li>
          <li className="text-content__list-item">
                надежный сбор и логико-математическая обработка данных в реальном времени;
          </li>
          <li className="text-content__list-item">
                сохранение и предоставление полной истории работы производства;
          </li>
          <li className="text-content__list-item">
                интеграция со сторонними системами по защищенным промышленным протоколам.
          </li>
        </ul>

      </div>
      <div className="text-content__section">
        <h2 className="text-content__subtitle">Базовые функции Integrity SCADA</h2>
        <ul className="text-content__list">
          <li className="text-content__list-item">
                двухстороннее взаимодействие с устройствами и системами по промышленным протоколам ГОСТ Р МЭК 60870-5
                -101, ГОСТ Р МЭК
                60870-5 -104, ModBus TCP/IP, а также по спецификации OPC UA;

          </li>
          <li className="text-content__list-item">
                предоставление доступа ко всей технологической информации по интерфейсам стандарта OPC UA;
          </li>
          <li className="text-content__list-item">
                уведомление пользователей о событиях и авариях;
          </li>
          <li className="text-content__list-item">
                получение производственных данных путем преобразования технологических данных (математическую обработку
                технологической
                информации);
          </li>
          <li className="text-content__list-item">
                хранение истории производственных и технологических данных, а также истории событий и аварий;
          </li>
          <li className="text-content__list-item">
                схематическое, графическое и текстово-табличное отображение значений технологических и производственных
                показателей;
          </li>
          <li className="text-content__list-item">
                генерация, хранение и просмотр отчетов о состоянии технологического или производственного процесса;
          </li>
          <li className="text-content__list-item">
                обмен данными со сторонними системами;
          </li>
          <li className="text-content__list-item">
                межуровневый транспорт данных (в рамках территориально распределенного предприятия);
          </li>
          <li className="text-content__list-item">
                организация единого информационного пространства технологических данных территориально распределенного
                предприятия путем
                их объединения в единой транспортной системе.
          </li>
        </ul>
      </div>
      <div className="text-content__section">
        <h2 className="text-content__subtitle">
              Гибкая и быстрая разработка SCADA-систем
        </h2>
        <ul className="text-content__list">
          <li className="text-content__list-item">
            <p>Насыщенные инструменты для разработки визуализации:</p>
            <ul className="text-content__sublist">
              <li className="text-content__sublist-item">
                    Создание мнемосхем с различным уровнем детализации с функциями
                    управления
              </li>
              <li className="text-content__sublist-item">
                    Добавление графическим объектам динамик, анимации и функций

              </li>
              <li className="text-content__sublist-item">
                    Библиотеки готовых типовых графических объектов, с возможностью
                    сохранению собственных объектов
              </li>
            </ul>
          </li>
          <li className="text-content__list-item">
            <p>Открытость и совместимость системы:</p>
            <ul className="text-content__sublist">
              <li className="text-content__sublist-item">
                    Поддержка протоколов ГОСТ Р МЭК 60870-5-101/104, ModbusTCP/IP , SNMP, OPC UA и др.
              </li>
              <li className="text-content__sublist-item">
                    Возможность разработки алгоритмов контроля и управления тех. процессами с помощью встроенных языков
                    программирования
                    JavaScript
              </li>
            </ul>
          </li>
          <li className="text-content__list-item">
                Минимальные требования к уровню знаний разработчика, за счет интерфейсов конфигурирования, не требующих
                навыков
                программирования
          </li>
          <li className="text-content__list-item">
                Реализация дополнительной логики системы, за счет использования функций математической и логической
                обработки
                данных
          </li>
          <li className="text-content__list-item">
                Полная техническая документация на русском языке
          </li>
          <li className="text-content__list-item">
                Возможность наращивания мощностей и функционала системы в будущем, за счет расширения приобретённой
                лицензии
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutIntegrityContent;
