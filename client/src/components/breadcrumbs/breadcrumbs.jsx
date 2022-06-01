import React from "react";

const BreadCrumbs = () => {
  return (
    <ul className="page-content__breadcrumbs breadcrumbs">
      <li className="breadcrumbs__item">
        <a href="index.html" className="breadcrumbs__link">Главная</a>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Продукты</a>
      </li>
    </ul>
  );
};

export default BreadCrumbs;
