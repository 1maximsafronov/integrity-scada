import React from "react";

const UserDocuments = () => {

  const renderEmpty = () => {
    return (
      <div className="documents__empty">
        <p className="documents__empty-message">
                Нет доступных документов
        </p>
        <a href="#" className="documents__order-link">Оставить заявку</a>
      </div>
    );
  };

  return (
    <div className="page-content__text-content text-content">
      <div className="text-content__section documents">
        <h1 className="text-content__title">
              Документация
        </h1>
        <ul className="documents__list">
          <li className="documents__item">
            <a className="documents__link" href="">
              <svg className="documents__icon" width="40" height="40" fill="#34547A">
                <use xlinkHref="img/sprite.svg#icon-document-pdf"></use>
              </svg>
              <p className="documents__name">Название файла</p>
              <p className="documents__download">
                <svg className="documents__download-icon" width="24" height="24" fill="#C7D0E2">
                  <use xlinkHref="img/sprite.svg#icon-download"></use>
                </svg>
                <b className="documents__download-size">200КБ</b>
              </p>
            </a>
          </li>
          <li className="documents__item">
            <a className="documents__link" href="">
              <svg className="documents__icon" width="40" height="40" fill="#34547A">
                <use xlinkHref="img/sprite.svg#icon-document-pdf"></use>
              </svg>
              <p className="documents__name">Название файла 1</p>
              <p className="documents__download">
                <svg className="documents__download-icon" width="24" height="24" fill="#C7D0E2">
                  <use xlinkHref="img/sprite.svg#icon-download"></use>
                </svg>
                <b className="documents__download-size">200КБ</b>
              </p>
            </a>
          </li>
          <li className="documents__item">
            <a className="documents__link" href="">
              <svg className="documents__icon" width="40" height="40" fill="#34547A">
                <use xlinkHref="img/sprite.svg#icon-document-pdf"></use>
              </svg>
              <p className="documents__name">Название файла 2</p>
              <p className="documents__download">
                <svg className="documents__download-icon" width="24" height="24" fill="#C7D0E2">
                  <use xlinkHref="img/sprite.svg#icon-download"></use>
                </svg>
                <b className="documents__download-size">200КБ</b>
              </p>
            </a>
          </li>
          <li className="documents__item">
            <a className="documents__link" href="">
              <svg className="documents__icon" width="40" height="40" fill="#34547A">
                <use xlinkHref="img/sprite.svg#icon-document-pdf"></use>
              </svg>
              <p className="documents__name">Название файла 2</p>
              <p className="documents__download">
                <svg className="documents__download-icon" width="24" height="24" fill="#C7D0E2">
                  <use xlinkHref="img/sprite.svg#icon-download"></use>
                </svg>
                <b className="documents__download-size">200КБ</b>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDocuments;
