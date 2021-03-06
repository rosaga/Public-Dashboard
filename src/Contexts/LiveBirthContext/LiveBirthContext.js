import { createContext, useEffect, useState } from "react";
import { getData } from "../../Utils/Utils";

export const LiveBirthContext = createContext();

export const LiveBirthContextProvider = (props) => {
  const { children } = props;
  const [period, SetPeriod] = useState("LAST_12_MONTHS");
  const [dataPe, SetDataPe] = useState([]);
  const [datadx, SetDataDx] = useState([]);
  const [dataRows, SetDataRows] = useState([]);
  const [dataItems, SetDataItems] = useState([]);
  const [allData, SetAllData] = useState([]);
  const [dataToMap, SetDataToMap] = useState([]);
  const [mapPeriods, setMapPeriods] = useState([]);

  const getLiveBirth = () => {};

  useEffect(() => {
    let url = `
        https://play.dhis2.org/2.34.3/api/29/analytics.json?dimension=dx:tn3p7vIxoKY;R1WAv9bVXff&dimension=pe:LAST_12_MONTHS&dimension=ou:ImspTQPwCqd&displayProperty=NAME&outputIdScheme=UID
        `;

    getData(url).then((res) => {
      SetAllData(res);
      SetDataDx(res.metaData.dimensions.dx);
      SetDataItems(res.metaData.items);
      SetDataPe(allData.metaData.dimensions.pe);
      SetDataRows(allData.rows);
    });
  }, []);

  return (
    <LiveBirthContext.Provider value={{}}>{children}</LiveBirthContext.Provider>
  );
};
