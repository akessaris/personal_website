import React from "react";
import { Route, Switch } from "react-router-dom";
import Cards from "./cards/Cards";
import Sidebar from "./common/sidebar/Sidebar";
import PageNotFound from './PageNotFound';
import paths from '../routes/route.constant';
import './App.css';

function App() {
  return (
    <>
      <Sidebar paths={paths}/>
      <div className="container-fluid app-container">
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
