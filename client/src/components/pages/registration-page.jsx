import React from "react";
import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";

const RegistrationPage = () => {
  return (
    <div className="page  page--login">
      <PageHeader />

      <main className="page-content page-content--login-page">
        <div className="page-content__wrapper">
          <form className="page-content__registration-form registration-form" id="registration-form" action="index.html">
            <h1 className="registration-form__title">Регистрация</h1>
            <div className="registration-form__wrapper">
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-email">
                Введите email
                </label>
                <input className="custom-text-input" type="email" name="registration-form-email" id="registration-form-email"
                  placeholder="example@mail.ru" />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-user-name">
                Введите Имя
                </label>
                <input className="custom-text-input" type="text" name="registration-form--user-name"
                  id="registration-form-user-name" placeholder="ФИО" />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-password">
                Введите Пароль
                </label>
                <input className="custom-text-input" type="password" name="registration-form-password"
                  id="registration-form-password" placeholder="Пароль" />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-company">
                Введите Название компании
                </label>
                <input className="custom-text-input" type="text" name="registration-form-company"
                  id="registration-form-company" placeholder="Компания" />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-repeat-password">
                Введите Пароль повторно
                </label>
                <input className="custom-text-input" type="password" name="registration-form-repeat-password"
                  id="registration-form-repeat-password" placeholder="Повторите пароль" />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-phone">
                Введите Название компании
                </label>
                <input className="custom-text-input" type="tel" name="registration-form-phone" id="registration-form-phone"
                  placeholder="Компания" />
              </p>
            </div>

            <div className="registration-form__bot-wrapper">
              <p className="registration-form__warning">
              Отправляя запрос, Вы даёте согласие на обработку<br />
                <span className="registration-form__warning-data">
                ПЕРСОНАЛЬНЫХ ДАННЫХ
                </span>.
              </p>
              <button className="btn registration-form__submit-btn" type="submit">
              Зарегистрироваться
              </button>
            </div>

          </form>

        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default RegistrationPage;
