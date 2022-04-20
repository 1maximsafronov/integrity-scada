import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import MainPage from "../main-page/main-page";
import LoginPage from "components/login-page/login-page";
import RegistrationPage from "components/registration-page/registration-page";
import EntegrityPage from "components/about-integrity-page/about-integrity-page";
import DemoPage from "components/demo/demo-page";
import DocumentsPage from "components/documents/documents-page";
import IntegratorPage from "components/integrator/integrator-page";
import LicensingPage from "components/licensing/licensing-page";
import SupportPage from "components/support/support-page";
import SystemRequirementspage from "components/system-requirements/system-requirements-page";


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
        <Route exact path="/EntegrityPage">
          <EntegrityPage />
        </Route>
        <Route exact path="/DemoPage">
          <DemoPage />
        </Route>
        <Route exact path="/DocumentsPage">
          <DocumentsPage />
        </Route>
        <Route exact path="/IntegratorPage">
          <IntegratorPage />
        </Route>
        <Route exact path="/LicensingPage">
          <LicensingPage />
        </Route>
        <Route exact path="/SupportPage">
          <SupportPage />
        </Route>
        <Route exact path="/SystemRequirementspage">
          <SystemRequirementspage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

export default App;
