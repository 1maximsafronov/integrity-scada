import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import MainPage from "../main-page/main-page";
import LoginPage from "components/login-page/login-page";
// привет

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
      </Switch>
    </BrowserRouter>

  );
};

export default App;
