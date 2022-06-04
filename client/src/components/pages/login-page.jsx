import React, {useEffect, useState} from "react";
import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "store/api-actions";
import {isUserAuthorized} from "store/selectors";
import {redirectToRoute} from "store/actions";

const LoginPage = () => {
  const isAuth = useSelector(isUserAuthorized);
  const dispatch = useDispatch();
  const [password, setPassword] = useState(``);
  const [email, setEmail] = useState(``);

  if (isAuth) {
    dispatch(redirectToRoute(`/user`));
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(loginAction({email, password}));
  };

  return (
    <div className="page page--login">
      <PageHeader />

      <main className="page-content page-content--login-page">
        <div className="page-content__wrapper">
          <form className="page-content__login-form login-form" id="login-form" action="/api/login" onSubmit={handleFormSubmit}>
            <h1 className="login-form__title">Авторизация</h1>
            <p className="login-form__text-box">
              <label className="visually-hidden" htmlFor="login-form-email">Введите email</label>
              <input className="custom-text-input"
                type="email"
                id="login-form-email"
                name="login-form-email"
                placeholder="example@mail.ru"
                required
                value={email}
                onChange={({target}) => setEmail(target.value)}/>
            </p>
            <p className="login-form__text-box">
              <label className="visually-hidden" htmlFor="login-form-password">Введите email</label>
              <input className="custom-text-input"
                type="password"
                id="login-form-password"
                name="login-form-password"
                placeholder="********"
                required
                value={password}
                onChange={({target}) => setPassword(target.value)}/>
            </p>
            <div className="login-form__bot-wrapper">
              <p className="login-form__remember">
                <input className="visually-hidden" type="checkbox" name="login-form-rememer" id="login-form-rememer" />
                <label className="login-form__checkbox" htmlFor="login-form-rememer">Запомнить меня</label>
              </p>
              <button className="btn login-form__submit-btn" type="submit">
              Войти
              </button>
            </div>

          </form>

        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default LoginPage;
