import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import SideMenu from "components/side-menu/side-menu";
import {sideMenuItems} from "side-menu-data";
import {useSelector} from "react-redux";
import {isUserAuthorized} from "store/selectors";

const UserPage = () => {
  const isUserAuth = useSelector(isUserAuthorized);

  if (!isUserAuth) {
    return (<Navigate to="/login"/>);
  }

  return (
    <div className="page page--inner">
      <PageHeader/>
      <main className="page-content  page-content--innerpage">
        <div className="page-content__wrapper">
          <BreadCrumbs />
          <SideMenu items={sideMenuItems.USER}/>
          <Routes>
            <Route index element={<h1>Личный кабинет пользователя</h1>}/>
            <Route path="orders" element={<h1>История заявок</h1>}/>
            <Route path="documents" element={<h1>Документация</h1>}/>
            <Route path="video" element={<h1>Видеоуроки</h1>}/>
            <Route path="licens" element={<h1>Лицензионные ключи</h1>}/>
          </Routes>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default UserPage;
