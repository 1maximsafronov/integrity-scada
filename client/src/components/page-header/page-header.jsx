import React, {useState} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {isUserAuthorized} from "store/selectors";
import {logoutAction} from "store/api-actions";

const PageHeader = (props) => {
  const isUserAuth = useSelector(isUserAuthorized);

  const [closedNav, setClosedNav] = useState(true);

  const {activMenuItem = ``} = props;
  const dispatch = useDispatch();

  const handleMenuToggleClick = () => {
    setClosedNav(!closedNav);
  };

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const renderUserNav = () => {
    if (isUserAuth) {
      return (
        <div className="page-header__user-nav-list">
          <Link to="/user" className="page-header__user-nav-item">
          Личный кабинет
          </Link>
          <Link to="/logout" className="page-header__user-nav-item page-header__user-nav-item--logout" onClick={handleLogoutClick}>
            <span className="visually-hidden">Выход</span>
            <svg className="" width="20" height="20" fill="#ffffff">
              <use xlinkHref="img/sprite.svg#icon-exit"></use>
            </svg>
          </Link>
        </div>
      );
    }

    return (
      <div className="page-header__user-nav-list">
        <Link to="/login" className="page-header__user-nav-item">
            Вход
        </Link>
        <Link to="/registration" className="page-header__user-nav-item">
            Регистрация
        </Link>
      </div>
    );
  };

  return (
    <header className={classNames(`page-header`, {"page-header--closed-nav": closedNav})}>
      <div className="page-header__wrapper">
        <div className="page-header__main-nav">
          <Link to="/" className="page-header__logo">
            <img src="/img/logo-elesy.svg" width="67" height="40" alt="" />
          </Link>
          <div className="page-header__nav-list">
            <Link to="/products" className={classNames(`page-header__nav-item`, {"page-header__nav-item--current": activMenuItem === `products`})}>
            Продукты
            </Link>
            <Link to="/support" className={classNames(`page-header__nav-item`, {"page-header__nav-item--current": activMenuItem === `support`})}>
            Поддержка
            </Link>
            <Link to="/contacts" className="page-header__nav-item">
            Контакты
            </Link>
          </div>
          <a href="tel:+73822601012" className="page-header__phone">
            <svg className="page-header__phone-icon" width="20" height="20" fill="#004578">
              <use xlinkHref="/img/sprite.svg#icon-phone"></use>
            </svg>
            +7 (3822) 601-012</a>
        </div>

        <div className="page-header__user-nav">
          <button className="page-header__nav-toggler" onClick={handleMenuToggleClick}>
            <span className="visually-hidden">Закрыть/открыть</span>
          </button>

          {renderUserNav()}

        </div>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  activMenuItem: PropTypes.string,
};

export default PageHeader;
