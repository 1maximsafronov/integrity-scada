import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import MainPage from "../main-page/main-page";
import LoginPage from "components/login-page/login-page";
import RegistrationPage from "components/registration-page/registration-page";
import EntegrityPage from "components/about-integrity-page/about-integrity-page";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Route exact path="/abotintegrity">
          <EntegrityPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

export default App;
