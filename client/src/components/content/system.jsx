import React from "react";

const SystemContent = () => {
  return (
    <div className="page-content__text-content text-content">
      <h1 className="text-content__title">
            Аппаратные и системные требования
      </h1>
      <p className="text-content__paragraph">
            Для функционирования Integrity SCADA требуется наличие одной из следующих операционных систем:
      </p>
      <ul className="text-content__list text-content__list--custom">
        <li className="text-content__list-item">
              Ubuntu;
        </li>
        <li className="text-content__list-item">
              Kubuntu;
        </li>
        <li className="text-content__list-item">
              Astra Linux;
        </li>
        <li className="text-content__list-item">
              Debian;
        </li>
        <li className="text-content__list-item">
              Windows Server от версии 2008 R2;
        </li>
        <li className="text-content__list-item">
              Windows от версии 7.
        </li>
      </ul>
      <h2 className="text-content__subtitle">
            Требования к аппаратному обеспечению
      </h2>
      <p className="text-content__paragraph">
            Для работы сервера ввода/вывода с базой на 10 000 сигналов на серверной версии ОС Linux:
      </p>
      <ul className="text-content__list text-content__list--custom">
        <li className="text-content__list-item">
              Процессор – 1 ГГц
        </li>
        <li className="text-content__list-item">
              RAM – 512 Мб
        </li>
        <li className="text-content__list-item">
              ROM – 2 Гб
        </li>
      </ul>
      <p className="text-content__paragraph">
            Для работы полного проекта на 10 000 сигналов (сервер ввода/вывода, сервер истории, HMI, алармы тренды,
            клиентская
            безопасность, отчеты) на OC Linux c графической оболочкой:
      </p>
      <ul className="text-content__list text-content__list--custom">
        <li className="text-content__list-item">
              Процессор – 1.6 ГГц
        </li>
        <li className="text-content__list-item">
              RAM – 2 Гб
        </li>
        <li className="text-content__list-item">
              ROM – 10 Гб
        </li>
      </ul>
      <p className="text-content__paragraph">
            Для работы полного проекта на 10 000 сигналов (сервер ввода/вывода, сервер истории, HMI, алармы тренды,
            клиентская
            безопасность, отчеты) на OC Windows 10 x64:
      </p>
      <ul className="text-content__list text-content__list--custom">
        <li className="text-content__list-item">
              Процессор – 2 ГГц
        </li>
        <li className="text-content__list-item">
              RAM – 2 Гб
        </li>
        <li className="text-content__list-item">
              ROM – 10 Гб
        </li>
      </ul>
      <p className="text-content__paragraph">
            Рекомендуемые требования:
      </p>
      <ul className="text-content__list text-content__list--custom">
        <li className="text-content__list-item">
              Процессор – 2 ядра 2 ГГц
        </li>
        <li className="text-content__list-item">
              RAM – 4 Гб
        </li>
        <li className="text-content__list-item">
              ROM – 10 Гб
        </li>
      </ul>
    </div>
  );
};

export default SystemContent;
