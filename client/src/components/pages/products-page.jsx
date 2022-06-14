import React from "react";
import {Routes, Route} from "react-router-dom";

import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import SideMenu from "components/side-menu/side-menu";
import {sideMenuItems} from "side-menu-data";
import AboutIntegrityContent from "components/content/about-integrity";
import ComponentsContent from "components/content/components";
import LicensingContent from "components/content/licensing";
import SystemContent from "components/content/system";
import IntegrityServer from "components/text-content/integrity-server";

const ProductsPage = () => {
  return (
    <div className="page page--inner">
      <PageHeader activMenuItem="products"/>
      <main className="page-content  page-content--innerpage">
        <div className="page-content__wrapper">
          <BreadCrumbs />
          <SideMenu items={sideMenuItems.PRODUCTS}/>
          <Routes>
            <Route index element={<AboutIntegrityContent />}/>
            <Route path="components">
              <Route index element={<ComponentsContent />}/>
              <Route path="integrity-server" element={<IntegrityServer />}/>
            </Route>
            <Route path="licensing" element={<LicensingContent />}/>
            <Route path="system" element={<SystemContent />}/>
          </Routes>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default ProductsPage;
