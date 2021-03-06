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
      
        <div>
          <Switch>
            
            <Route path="/" exact component={MCH} />
            <Route path="/DiseaseSurveilance"  component={DiseaseSurveilance} />

          </Switch>
        </div>
     
    </div>
  );
}

export default Routes;
