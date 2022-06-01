import React from "react";
import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";

const LoginPage = () => {
  return (
    <div className="page page--login">
      <PageHeader />

      <main className="page-content page-content--login-page">
        <div className="page-content__wrapper">
          <form className="page-content__login-form login-form" id="login-form" action="index.html">
            <h1 className="login-form__title">Авторизация</h1>
            <p className="login-form__text-box">
              <label className="visually-hidden" htmlFor="login-form-email">Введите email</label>
              <input className="custom-text-input" type="email" name="login-form-email" id="login-form-email"
                placeholder="example@mail.ru" />
            </p>
            <p className="login-form__text-box">
              <label className="visually-hidden" htmlFor="login-form-password">Введите email</label>
              <input className="custom-text-input" type="password" name="login-form-password" id="login-form-password"
                placeholder="********" />
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
