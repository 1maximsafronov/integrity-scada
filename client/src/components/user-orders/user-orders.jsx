import React from "react";
import {useSelector} from "react-redux";
import {getUserOrders} from "store/selectors";

const getStatus = (status) => {
  switch (status) {
    case `waiting`:
      return `Обработка`;
    case `cancel`:
      return `Отклонена`;
    case `success`:
      return `Одобрена`;
  }

  return `неизвестен`;
};

const getDate = (dateSting) => {
  const options = {
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  };
  return new Date(dateSting).toLocaleString(`ru`, options);
};

const getType = (type) => {
  switch (type) {
    case `demo`:
      return `Пробная версия`;
    case `documents`:
      return `Документы`;
    case `question`:
      return `Вопрос`;
  }

  return `неизвестен`;
};


const UserOrder = () => {

  const userOrder = useSelector(getUserOrders);


  if (!userOrder || userOrder.length <= 0) {
    return (
      <div className="page-content__text-content text-content">
        <div className="text-content__section user-orders">
          <h1 className="text-content__title">
          История заявок
          </h1>
          <p>У вас нет заявок</p>
        </div>
      </div>
    );
  }

  console.log(userOrder);
  return (
    <div className="page-content__text-content text-content">
      <div className="text-content__section user-orders">
        <h1 className="text-content__title">
              История заявок
        </h1>
        <div className="user-orders__list">
          {userOrder.map((order, i) => {
            const keyValue = `userOrder-${i}`;

            return (
              <div key={keyValue} className="user-orders__item">
                <p className="user-orders__date">{getDate(order.createdAt)}</p>
                <p className="user-orders__type">{getType(order.type)}</p>
                <p className={`user-orders__status user-orders__status--${order.status}`}>{getStatus(order.status)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
