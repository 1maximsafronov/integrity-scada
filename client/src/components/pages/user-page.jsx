import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import SideMenu from "components/side-menu/side-menu";
import UserInfo from "components/user-info/user-info";
import UserDocuments from "components/user-documents/user-documents";
import UserOrder from "components/user-orders/user-orders";
import {sideMenuItems} from "side-menu-data";
import {useDispatch, useSelector} from "react-redux";
import {isUserAuthorized} from "store/selectors";
import {redirectToRoute} from "store/actions";

const UserPage = () => {
  const isUserAuth = useSelector(isUserAuthorized);
  const dispatch = useDispatch();

  useEffect(()=> {
    if (!isUserAuth) {
      dispatch(redirectToRoute(`/login`));
    }
  });

  return (
    <div className="page page--inner">
      <PageHeader/>
      <main className="page-content  page-content--innerpage">
        <div className="page-content__wrapper">
          <BreadCrumbs />
          <SideMenu items={sideMenuItems.USER}/>
          <Routes>
            <Route index element={<UserInfo />}/>
            <Route path="orders" element={<UserOrder />}/>
            <Route path="documents" element={<UserDocuments />}/>
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
