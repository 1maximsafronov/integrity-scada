import {Router, Switch, Route} from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="" component={<h1>Пример мир</h1>}/>
      </Switch>
    </Router>
  );
};

export default App;
