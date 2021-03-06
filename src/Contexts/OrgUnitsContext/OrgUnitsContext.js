import { createContext, useEffect, useState } from "react";
import { justFetch } from "../../Services/JustFetchService";

export const OrgUnitsContext = createContext();

export const OrgUnitsContextProvider = (props) => {
  const { children } = props;
  const [chiefDoms, SetChiefDoms] = useState([]);
  const [facilities, SetFacilities] = useState([]);
  const [ouSelected,SetOuSelected]=useState("");

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
    SetOuSelected(val)
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
        ouSelected
      }}
    >
      {children}
    </OrgUnitsContext.Provider>
  );
};
