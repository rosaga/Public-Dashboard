import { createContext, useContext, useEffect, useState } from "react";
import { justFetch } from "../../Services/JustFetchService";
import { generateDataToMap, getData, getPeriodName } from "../../Utils/Utils";
import { OrgUnitsContext } from "../OrgUnitsContext/OrgUnitsContext";

export const LiveBirthContext = createContext();

export const LiveBirthContextProvider = (props) => {
  const { children } = props;
  
  const [dataPe, SetDataPe] = useState([]);
  const [datadx, SetDataDx] = useState([]);
  const [dataRows, SetDataRows] = useState([]);
  const [dataItems, SetDataItems] = useState([]);
  const [allData, SetAllData] = useState([]);
  const [dataToMap, SetDataToMap] = useState([]);
  const [mapPeriods, setMapPeriods] = useState([]);
  const { ouSelected ,period,period2} = useContext(OrgUnitsContext);

  const getLiveBirths = async () => {
    let url = `
    https://play.dhis2.org/2.34.3/api/29/analytics.json?dimension=dx:gQNFkFkObU8;HZSdnO5fCUc&dimension=pe:${period2}&dimension=ou:${ouSelected}&displayProperty=NAME&outputIdScheme=UID
    `;

    let getDataApi = await justFetch(url, {});
    let res = await getDataApi;
    console.log({ res });
    SetAllData(await res);
    SetDataDx(await res.metaData.dimensions.dx);
    SetDataPe(await res.metaData.dimensions.pe);
    SetDataItems(await res.metaData.items);
    SetDataRows(await res.rows);
  };

  useEffect(() => {
      setTimeout(() => {
    getLiveBirths();
          
      }, 1000);
  }, [period2, ouSelected]);

  useEffect(() => {
    // generateDataForMap();
    SetDataToMap(generateDataToMap(datadx, dataRows, dataItems));

    // console.log(0)
  }, [dataRows]);

  useEffect(() => {
    // console.log("getting dara")
    setMapPeriods(getPeriodName(dataPe, dataItems));
  }, [dataItems]);

  return (
    <LiveBirthContext.Provider
      value={{ dataToMap, dataPe, dataItems, mapPeriods, allData, datadx }}
    >
      {children}
    </LiveBirthContext.Provider>
  );
};
