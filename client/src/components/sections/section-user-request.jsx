import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {sendUserRequest} from "store/api-actions";

const SectionUserRequest = () => {
  const dispatch = useDispatch();
  const [userName, setUsername] = useState(``);
  const [company, setCompany] = useState(``);
  const [phone, setPhone] = useState(``);
  const [type, setType] = useState(`demo`);
  const [email, setEmail] = useState(``);
  const [message, setMessage] = useState();
  const [sendStatus, setSendStatus] = useState(`waiting`);

  const onRequestFormSubmit = (evt) => {
    evt.preventDefault();

    const requestData = {
      userName,
      company,
      phone,
      type,
      email,
      message
    };

    setSendStatus(`sending`);

    dispatch(sendUserRequest(requestData))
      .then(() => {
        setSendStatus(`success`);
        setTimeout(() => {
          setSendStatus(`waiting`);
        }, 2000);
      })
      .catch(() => {
        setSendStatus(`error`);
        setTimeout(() => {
          setSendStatus(`waiting`);
        }, 2000);
      });
  };

  return (
    <section className="user-reuest">
      <div className="user-reuest__wrapper">
        <h2 className="user-reuest__title">
            Хотите получить доступ к онлайн-версии, бесплатному
            дистрибутиву для тестирования платформы<br />
            или задать вопрос?
        </h2>
        <p className="user-reuest__desc">
            Заполните форму и получите доступ к приложению.
        </p>
        <form id="request-form" action="index.html" className="user-reuest__form" onSubmit={onRequestFormSubmit}>
          <p className="user-reuest__textbox">
            <label className="visually-hidden" htmlFor="request-form-user-name">Фамилия Имя Отчество</label>
            <input className="custom-text-input" type="text" name="request-form-user-name" id="request-form-user-name"
              placeholder="ФИО*"
              value={userName} required
              onChange={({target}) => setUsername(target.value)}/>
          </p>
          <div className="user-reuest__columns">
            <p className="user-reuest__textbox">
              <label className="visually-hidden" htmlFor="request-form-user-company">Компания</label>
              <input className="custom-text-input" type="text" name="request-form-user-company"
                id="request-form-user-company" placeholder="Компания*" required value={company} onChange={({target}) => setCompany(target.value)}/>
            </p>
            <p className="user-reuest__textbox">
              {/* <label className="visually-hidden" htmlFor="request-form-user-goal">
                  Цель запроса
                  </label>
                  <input className="custom-text-input" type="text" name="request-form-user-goal" id="request-form-user-goal"
                    placeholder="Цель запроса*" required /> */}
              <select className="custom-text-input" name="request-form-type" id="request-form-type" placeholder="Цель запроса" required value={type} onChange={({target}) => setType(target.value)}>
                <option value="demo">Демо продукт</option>
                <option value="documents">Документация</option>
                <option value="question">Вопрос</option>
              </select>
            </p>
            <p className="user-reuest__textbox">
              <label className="visually-hidden" htmlFor="request-form-user-phone">
                  Телефон
              </label>
              <input className="custom-text-input" type="text" name="request-form-user-phone" id="request-form-user-phone"
                placeholder="Телефон*" required value={phone} onChange={({target}) => setPhone(target.value)}/>
            </p>
            <p className="user-reuest__textbox">
              <label className="visually-hidden" htmlFor="request-form-user-email">
                  Электронная почта
              </label>
              <input className="custom-text-input" type="text" name="request-form-user-email" id="request-form-user-email"
                placeholder="E-mail*" required value={email} onChange={({target}) => setEmail(target.value)}/>
            </p>
          </div>
          <p className="user-reuest__textarea">
            <label className="visually-hidden" htmlFor="request-form-user-message">
                Сообщение
            </label>
            <textarea className="custom-textarea" name="request-form-user-message" id="request-form-user-message"
              cols="30" rows="10" placeholder="Сообщение" value={message} onChange={({target}) => setMessage(target.value)}></textarea>
          </p>
          <div className="user-reuest__inner">
            <p className="user-reuest__warning">
                Отправляя запрос, Вы даёте согласие на обработку<br />
              <span className="user-reuest__warning-data">
                  ПЕРСОНАЛЬНЫХ ДАННЫХ
              </span>.
            </p>
            <button className="user-reuest__submit btn" type="submit">
                Отправить запрос
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionUserRequest;
