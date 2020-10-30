import React from "react";
import { Route, Switch } from "react-router-dom";
import Cards from "./cards/Cards";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Cards} />
      </Switch>
    </div>
  );
}

export default App;
