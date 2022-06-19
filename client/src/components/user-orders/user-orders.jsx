import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestUserOrders} from "store/api-actions";
import {getUserOrders} from "store/selectors";


const UserOrder = () => {
  const dispatch = useDispatch();
  const userOrder = useSelector(getUserOrders);

  useEffect(() => {
    dispatch(requestUserOrders);
  });

  if (!userOrder) {
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

  return (
    <div className="page-content__text-content text-content">
      <div className="text-content__section user-orders">
        <h1 className="text-content__title">
              Документация
        </h1>
        <div className="user-orders__list">
          <div className="user-orders__item">
            <p className="user-orders__date">25.05.2022</p>
            <p className="user-orders__type">Пробная версия</p>
            <p className="user-orders__status">Обработка</p>
          </div>

          <div className="user-orders__item">
            <p className="user-orders__date">20.04.2022</p>
            <p className="user-orders__type">Документация</p>
            <p className="user-orders__status user-orders__status--cancel">Отклонена</p>
          </div>

          <div className="user-orders__item">
            <p className="user-orders__date">10.03.2022</p>
            <p className="user-orders__type">Пробная версия</p>
            <p className="user-orders__status user-orders__status--success">Одобрена</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
