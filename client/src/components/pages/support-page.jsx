import React from "react";
import {Routes, Route} from "react-router-dom";

import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import SideMenu from "components/side-menu/side-menu";
import {sideMenuItems} from "side-menu-data";

import SupportContent from "components/content/support";
import DemoContent from "components/content/demo";
import IntegratorContent from "components/content/integrator";

const SupportPage = () => {
  return (
    <div className="page  page--inner">
      <PageHeader activMenuItem="support"/>

      <main className="page-content page-content--innerpage">
        <div className="page-content__wrapper">

          <BreadCrumbs/>
          <SideMenu items={sideMenuItems.SUPPORT}/>

          <Routes>
            <Route index element={<SupportContent />}/>
            <Route path="integrator" element={<IntegratorContent />}/>
            <Route path="demo" element={<DemoContent />}/>
          </Routes>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default SupportPage;
