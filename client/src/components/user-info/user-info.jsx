import React from "react";
import {useSelector} from "react-redux";
import {getUserData} from "store/selectors";

const UserInfo = () => {
  const userData = useSelector(getUserData);

  if (!userData) {
    return (
      <div className="page-content__text-content text-content">
        <div className="text-content__section user-info">
          <h1 className="text-content__title">
              Личные данные
          </h1>
          <p>Нет данных</p>
        </div>
      </div>
    );
  }
  return (
    <div className="page-content__text-content text-content">
      <div className="text-content__section user-info">
        <h1 className="text-content__title">
              Личные данные
        </h1>
        <div className="user-info__list">
          <div className="user-info__item">
            <p className="user-info__item-title">Имя:</p>
            <p className="user-info__item-value">{userData.userName}</p>
          </div>
          <div className="user-info__item">
            <p className="user-info__item-title">Компания:</p>
            <p className="user-info__item-value">{userData.company}</p>
          </div>
          <div className="user-info__item">
            <p className="user-info__item-title">Email:</p>
            <p className="user-info__item-value">{userData.email}</p>
          </div>
          <div className="user-info__item">
            <p className="user-info__item-title">Телефон:</p>
            <p className="user-info__item-value">{userData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
