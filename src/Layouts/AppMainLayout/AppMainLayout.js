import React from "react";
import Routes from "../../Routes/Routes";
import AppContainer from "../AppContainer/AppContainer";
import AppNav from "../AppNav/AppNav";
import AppRow from "../AppRow/AppRow";

function AppMainLayout() {
  return (
    <div>
      <AppNav></AppNav>

      <AppContainer>
          <AppRow>
          <Routes></Routes>
          </AppRow>
      </AppContainer>
    </div>
  );
}

export default AppMainLayout;
