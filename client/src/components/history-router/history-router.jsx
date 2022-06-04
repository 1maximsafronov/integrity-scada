import React, {useLayoutEffect, useState} from 'react';
import {Router} from 'react-router-dom';


const HistoryRouter = (props) => {
  const {children, baseName, history} = props;

  const initState = {
    action: history.action,
    location: history.location,
  };

  useLayoutEffect(() => history.listen(setState), [history]);

  const [state, setState] = useState(initState);
  return (
    <Router
      basename={baseName}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export default HistoryRouter;
