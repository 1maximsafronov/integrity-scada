import React from "react";

const LicensingContent = () => {
  return (
    <div className="page-content__text-content text-content">
      <div className="text-content__section">
        <h1 className="text-content__title">
              Политика лицензирования
        </h1>
        <p className="text-content__paragraph">
              Среда разработки <b>Integrity SCADA</b> поставляется бесплатно, а лицензируется только то количество
              тегов<span className="text-content__note">[1]</span> и только те
              функциональные модули, которые требуются для конкретного проекта. Это позволяет платить только за тот
              масштаб системы, который действительно востребован.
        </p>
        <p className="text-content__paragraph">
              В качестве средства защиты используются аппаратные ключи Sentinel. Для серверных компонентов <b>Integrity
                SCADA</b> требуется обязательное наличие локального аппаратного ключа. А сетевой ключ контролирует
              максимальное количество одновременных подключений клиентских приложений (например, не более 10). По такому
              принципу работают системы визуализации, оповещения, построения графиков технологического процесса.
        </p>
        <p className="text-content__paragraph">
              Так же доступна программная лицензия. Она бывает только локальной, и, соответственно, с ней работают все
              компоненты <b>Integrity SCADA</b>. Программная лицензия привязывается к конечному компьютеру.
        </p>
      </div>
      <div className="text-content__section">
        <h2 className="text-content__subtitle">
              Перечень лицензируемых компонентов Integrity SCADA
        </h2>
        <ul className="text-content__list">
          <li className="text-content__list-item">
            <p>
              <a href="#">IntegrityServer</a> — сервер оперативных данных (сервер ввода/вывода). Функционал сервера
                  ввода/вывода IntegrityServer
                  масштабируется следующими компонентами, которые лицензируются отдельно:
            </p>
            <ul className="text-content__sublist">
              <li className="text-content__sublist-item">
                    Модуль SNMP
              </li>
              <li className="text-content__sublist-item">
                    Модуль ГОСТ Р МЭК 60870-5-101/104 мастер
              </li>
              <li className="text-content__sublist-item">
                    Модуль Modbus TCP/IP мастер
              </li>
            </ul>
          </li>
          <li className="text-content__list-item">
                Модули, бесплатно включенные в IntegrityServer (не требуют лицензирования):
          </li>
          <li className="text-content__list-item">
                Модуль ОРС UA DA серверМодуль ОРС UA DA клиентМодуль ОРС UA АЕ серверМодуль вычислений
          </li>
          <li className="text-content__list-item">
                IntegrityHistoryServer — высокопроизводительный сервер исторических данных
          </li>
          <li className="text-content__list-item">
                IntegrityReports — система формирования отчетов
          </li>
          <li className="text-content__list-item">
                IntegrityAlarms — отображение сообщений об авариях и событиях
          </li>
          <li className="text-content__list-item">
                IntegrityTrends — построение трендов, графиков, таблиц
          </li>
          <li className="text-content__list-item">
                IntegrityHMI — отображение мнемосхем для мониторинга технологического процесса
          </li>
          <li className="text-content__list-item">
                IntegrityWebHMI (WebHMI, WebAlarms, WebTrends) — клиент удаленного просмотра технологического процесса в
                реальном
                времени через Web-браузер
          </li>
          <li className="text-content__list-item">
                IntegrityClientSecurity — разграничение клиентского доступа
          </li>
          <li className="text-content__list-item">
                IntegrityDataTransport — система транспорта технологических данных
          </li>
        </ul>
      </div>
      <p className="text-content__footnote"></p>
    </div>
  );
};

export default LicensingContent;
