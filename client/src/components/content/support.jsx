import React from "react";

const SupportContent = () => {
  return (
    <div className="page-content__text-content text-content">
      <h1 className="text-content__title">
            Техническая поддержка
      </h1>
      <p className="text-content__paragraph">
            Если Вы хотите задать интересующие Вас вопросы или получить консультации по программному продукту Integrity
            SCADA,
            свяжитесь с нами.
            тел.: +7 (3822) 60-10-60
            факс: +7 (3822) 601-001
            e-mail: support@elesy.ru
      </p>
      <h2 className="text-content__subtitle">
            Для оперативного и полного разрешения Вашего обращения, пожалуйста, сообщите:
      </h2>
      <ul className="text-content__list">
        <li className="text-content__list-item">
              Наименование объекта;
        </li>
        <li className="text-content__list-item">
              Контакты технического персонала;
        </li>
        <li className="text-content__list-item">
              Подробное описание сути обращения (указание времени отказа, действиях персонала, предшествующих отказу);
        </li>
        <li className="text-content__list-item">
          <p>
                Информацию диагностического характера в соответствии со списком:
          </p>
          <ul className="text-content__sublist">
            <li className="text-content__sublist-item">
                  Журнал трассировки компонентов
            </li>
            <li className="text-content__sublist-item">
                  Журналы работы устройств (путь создания журналов указывается в настройках программных модулей,
                  входящих в состав
                  SCADA-системы)
            </li>
            <li className="text-content__sublist-item">
                  Снимки экрана с диалоговыми окнами об ошибках
            </li>
          </ul>
        </li>
        <li className="text-content__list-item">
              Дополнительная информация для проведения полноценного анализа.

        </li>
      </ul>

    </div>
  );
};

export default SupportContent;
