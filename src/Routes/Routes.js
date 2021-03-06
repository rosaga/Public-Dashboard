import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DiseaseSurveilance from "../Pages/DiseaseSurveilance/DiseaseSurveilance";
import MCH from "../Pages/MCH/MCH";

function Routes() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/DiseaseSurveilance" exact component={DiseaseSurveilance} />
            <Route path="/" exact component={MCH} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;
