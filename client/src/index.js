import React from "react";
import ReactDom from "react-dom";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import {store} from "./store/index";
import {checkAuthAction, requestUserOrders} from "./store/api-actions";
import browserHistory from "./browser-history";

store.dispatch(checkAuthAction());
store.dispatch(requestUserOrders());
ReactDom.render(
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App/>
      </HistoryRouter>
    </Provider>
    ,
    document.querySelector(`#root`)
);
