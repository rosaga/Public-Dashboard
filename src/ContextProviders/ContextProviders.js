import React from "react";
import { AppContextProvider } from "../Contexts/AppContext/AppContext";
import { DiseaseSurveillanceProvider } from "../Contexts/DiseaseSurveillance/DiseaseSurveillance";
import { DeliveriesContextProvider } from "../Contexts/DeliveriesContext/DeliveriesContext";
import { OrgUnitsContextProvider } from "../Contexts/OrgUnitsContext/OrgUnitsContext";
import { LiveBirthContextProvider } from "../Contexts/LiveBirthContext/LiveBirthContext";

function ContextProviders(props) {
  const { children } = props;

  return (
    <>
      <AppContextProvider>
        <OrgUnitsContextProvider>
          <DeliveriesContextProvider>
          <DiseaseSurveillanceProvider>
            <LiveBirthContextProvider>
            {children}
            </LiveBirthContextProvider>
          </DiseaseSurveillanceProvider>
          </DeliveriesContextProvider>
        </OrgUnitsContextProvider>
      </AppContextProvider>
    </>
  );
}

export default ContextProviders;
