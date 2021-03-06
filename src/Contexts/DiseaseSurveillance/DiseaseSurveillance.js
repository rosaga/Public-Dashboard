import { createContext, useState } from "react";

export const DiseaseSurveillanceContext = createContext();

export const DiseaseSurveillanceProvider = (props) => {
  const [period, SetPeriod] = useState("LAST_12_MONTHS");

  const handlePeriodChange = (val) => {
    if (val !== "") {
      SetPeriod(val);
    }
  };

  const { children } = props;
  return (
    <DiseaseSurveillanceContext.Provider value={{ handlePeriodChange }}>
      {children}
    </DiseaseSurveillanceContext.Provider>
  );
};
