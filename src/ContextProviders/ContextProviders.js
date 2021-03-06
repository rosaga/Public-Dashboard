import React from "react";
import { AppContextProvider } from "../Contexts/AppContext/AppContext";
import { DiseaseSurveillanceProvider } from "../Contexts/DiseaseSurveillance/DiseaseSurveillance";
import { OrgUnitsContextProvider } from "../Contexts/OrgUnitsContext/OrgUnitsContext";

function ContextProviders(props) {
  const { children } = props;

  return (
    <>
      <AppContextProvider>
        <OrgUnitsContextProvider>
          <DiseaseSurveillanceProvider>{children}</DiseaseSurveillanceProvider>
        </OrgUnitsContextProvider>
      </AppContextProvider>
    </>
  );
}

export default ContextProviders;
