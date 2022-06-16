import React, {useState} from "react";
import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";
import {useDispatch} from "react-redux";
import {regitrationAction} from "store/api-actions";
import {redirectToRoute} from "store/actions";

const RegistrationPage = () => {
  const [email, setEmail] = useState(``);
  const [userName, setUserName] = useState(``);
  const [password, setPassword] = useState(``);
  const [repeatPassword, setRepeatPassword] = useState(``);
  const [company, setCompany] = useState(``);
  const [phone, setPhone] = useState(``);

  const dispatch = useDispatch();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (password === repeatPassword) {
      const newUserData = {
        email,
        userName,
        password,
        company,
        phone
      };

      dispatch(regitrationAction(newUserData))
        .then(() => dispatch(redirectToRoute(`/user`)));
    }
  };


  return (
    <div className="page  page--login">
      <PageHeader />

      <main className="page-content page-content--login-page">
        <div className="page-content__wrapper">
          <form className="page-content__registration-form registration-form" onSubmit={handleFormSubmit} id="registration-form" method="POST" action="/api/registration">
            <h1 className="registration-form__title">Регистрация</h1>
            <div className="registration-form__wrapper">
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-email">
                Введите email
                </label>
                <input className="custom-text-input"
                  type="email"
                  name="registration-form-email"
                  id="registration-form-email"
                  placeholder="example@mail.ru*"
                  required
                  value={email}
                  onChange={({target})=> setEmail(target.value)}
                />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-user-name">
                Введите Имя
                </label>
                <input className="custom-text-input"
                  type="text"
                  name="registration-form--user-name"
                  id="registration-form-user-name"
                  placeholder="ФИО*"
                  minLength={5}
                  required
                  value={userName}
                  onChange={({target})=> setUserName(target.value)}
                />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-password">
                Введите Пароль
                </label>
                <input className="custom-text-input"
                  type="password"
                  name="registration-form-password"
                  id="registration-form-password"
                  placeholder="Пароль*"
                  minLength={5}
                  required
                  value={password}
                  onChange={({target})=> setPassword(target.value)}
                />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-company">
                Введите Название компании
                </label>
                <input className="custom-text-input"
                  type="text"
                  name="registration-form-company"
                  id="registration-form-company"
                  placeholder="Компания*"
                  minLength={3}
                  required
                  value={company}
                  onChange={({target})=> setCompany(target.value)}
                />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-repeat-password">
                Введите Пароль повторно
                </label>
                <input className="custom-text-input"
                  type="password"
                  name="registration-form-repeat-password"
                  id="registration-form-repeat-password"
                  placeholder="Повторите пароль*"
                  minLength={5}
                  required
                  value={repeatPassword}
                  onChange={({target})=> setRepeatPassword(target.value)}
                />
              </p>
              <p className="registration-form__text-box">
                <label className="visually-hidden" htmlFor="registration-form-phone">
                Введите Номер телефона
                </label>
                <input className="custom-text-input"
                  type="tel"
                  name="registration-form-phone"
                  id="registration-form-phone"
                  placeholder="+79000000000*"
                  minLength={6}
                  required
                  value={phone}
                  onChange={({target})=> setPhone(target.value)}
                />
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
