import { createContext, useEffect, useState } from "react";
import { justFetch } from "../../Services/JustFetchService";

export const OrgUnitsContext = createContext();

export const OrgUnitsContextProvider = (props) => {
  const [period, SetPeriod]= useState("LAST_12_MONTHS");
  const [period2, SetPeriod2]= useState("LAST_12_MONTHS");

  const { children } = props;
  const [chiefDoms, SetChiefDoms] = useState([]);
  const [facilities, SetFacilities] = useState([]);
  const [ouSelected,SetOuSelected]=useState("ImspTQPwCqd");

  const handlePeriodChange = (val) => {

    console.log(val);

    // return 0;
  
      SetPeriod2(val);
    

  };

  const getChiefDoms = (distID) => {
    justFetch(
      `
      https://play.dhis2.org/2.35.1/api/organisationUnits/${distID}.json?includeChildren=true&fields=id,name
      `,
      {}
    )
      .then((res) => {
        // console.log(res.organisationUnits);
        SetChiefDoms(res.organisationUnits);
      })
      .catch((e) => {});
  };

  const getFacilities = (chiefdomID) => {
    justFetch(
      `
        https://play.dhis2.org/2.35.1/api/organisationUnits/${chiefdomID}.json?includeChildren=true&fields=id,name
        `,
      {}
    )
      .then((res) => {
        //   console.log(res);
        SetFacilities(res.organisationUnits);
      })
      .catch((e) => {});
  };

  const handleDistrictChange = (val) => {
    if (val !== "") {
      getChiefDoms(val);
      SetOuSelected(val)
    }
  };

  const handleChiefdomSelect = (val) => {
    if (val !== "") {
      getFacilities(val);
      SetOuSelected(val)
    }
  };

  const handleFacilityChange = (val) => {
    // console.log(val)

if(val !== "") 
{
  SetOuSelected(val)

}

};

  useEffect(() => {
    //   getChiefDoms()
    return () => {
      //   cleanup
    };
  }, []);
  return (
    <OrgUnitsContext.Provider
      value={{
        chiefDoms,
        facilities,
        getChiefDoms,
        getFacilities,
        handleDistrictChange,
        handleChiefdomSelect,
        handleFacilityChange,
        ouSelected,
        SetOuSelected,
        handlePeriodChange,
        period,
        period2

      }}
    >
      {children}
    </OrgUnitsContext.Provider>
  );
};
