import React from "react";
import { AppContextProvider } from "../Contexts/AppContext/AppContext";
import { ANCCoverageProvider } from "../Contexts/ANCCoverage/ANCCoverage";
import { DeliveriesContextProvider } from "../Contexts/DeliveriesContext/DeliveriesContext";
import { OrgUnitsContextProvider } from "../Contexts/OrgUnitsContext/OrgUnitsContext";
import { LiveBirthContextProvider } from "../Contexts/LiveBirthContext/LiveBirthContext";
import { DiseaseSurveilanceContextProvider } from "../Contexts/DiseaseSurveilanceContext/DiseaseSurveilanceContext";
import { DeathByDiseaseContextProvider } from "../Contexts/DeathByDiseaseContext/DeathByDiseaseContext";

function ContextProviders(props) {
  const { children } = props;

  return (
    <>
      <AppContextProvider>
        <OrgUnitsContextProvider>
          <DeliveriesContextProvider>
          <ANCCoverageProvider>
            <LiveBirthContextProvider>
            <DiseaseSurveilanceContextProvider>
            <DeathByDiseaseContextProvider>
            {children}
            </DeathByDiseaseContextProvider>
            </DiseaseSurveilanceContextProvider>
            </LiveBirthContextProvider>
          </ANCCoverageProvider>
          </DeliveriesContextProvider>
        </OrgUnitsContextProvider>
      </AppContextProvider>
    </>
  );
}

export default ContextProviders;
