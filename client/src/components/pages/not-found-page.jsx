import React from "react";
import PageHeader from "components/page-header/page-header";
import PageFooter from "components/page-footer/page-footer";

const NotFoundPage = () => {
  return (
    <div className="page page--not-found">
      <PageHeader />

      <main className="page-content page-content--not-found">
        <div className="page-content__wrapper">
          <div className="page-content__not-found not-found">
            <p className="not-found__code">404</p>
            <h1 className="not-found__title">Страница не найдена</h1>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default NotFoundPage;
