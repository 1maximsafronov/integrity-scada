import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import MainPage from "components/pages/main-page";
import LoginPage from "components/pages/login-page";
import RegistrationPage from "components/pages/registration-page";
import NotFoundPage from "components/pages/not-found-page";
import ProductsPage from "components/pages/products-page";
import SupportPage from "components/pages/support-page";
import UserPage from "components/pages/user-page";
import AdminPage from "components/pages/admin-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='registration' element={<RegistrationPage />}/>
        <Route path='products/*' element={<ProductsPage />}/>
        <Route path='support/*' element={<SupportPage />}/>
        <Route path='user/*' element={<UserPage />}/>
        <Route path='admin/*' element={<AdminPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
