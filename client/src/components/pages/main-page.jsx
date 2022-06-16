import React from "react";
import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";
import SectionPromo from "components/sections/section-promo";
import SectionProducts from "components/sections/section-products";
import SectionStats from "components/sections/section-stats";
import SectionFeatures from "components/sections/section-features";
import SectionGallery from "components/sections/section-gallery";
import SectionPartners from "components/sections/section-partners";
import SectionNews from "components/sections/section-news";
import SectionUserRequest from "components/sections/section-user-request";

const MainPage = ()=> {
  return (
    <div className="page">
      <PageHeader />

      <main className="page-content">
        <h1 className="visually-hidden">Integrity Scada</h1>
        <SectionPromo />
        <SectionProducts />
        <SectionStats />
        <SectionFeatures />
        <SectionGallery />
        <SectionPartners />
        <SectionNews />
        <SectionUserRequest />
      </main>

      <PageFooter />
    </div>
  );
};

export default MainPage;
