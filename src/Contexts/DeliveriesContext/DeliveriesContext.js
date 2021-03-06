import { createContext, useContext, useEffect, useState } from "react";
import { justFetch } from "../../Services/JustFetchService";
import { generateDataToMap, getData, getPeriodName } from "../../Utils/Utils";
import { OrgUnitsContext } from "../OrgUnitsContext/OrgUnitsContext";

export const DeliveriesContext = createContext();

export const DeliveriesContextProvider = (props) => {
  const { children } = props;
  const [period, SetPeriod] = useState("LAST_12_MONTHS");
  const [dataPe, SetDataPe] = useState([]);
  const [datadx, SetDataDx] = useState([]);
  const [dataRows, SetDataRows] = useState([]);
  const [dataItems, SetDataItems] = useState([]);
  const [allData, SetAllData] = useState([]);
  const [dataToMap, SetDataToMap] = useState([]);
  const [mapPeriods, setMapPeriods] = useState([]);
  const { chiefDoms,ouSelected,
    facilities}=useContext(OrgUnitsContext)

  const getDeliveries = async() => {

    let url = `
    https://play.dhis2.org/2.34.3/api/29/analytics.json?dimension=dx:tn3p7vIxoKY;R1WAv9bVXff&dimension=pe:${period}&dimension=ou:${ouSelected}&displayProperty=NAME&outputIdScheme=UID
    `;

    let getDataApi=await justFetch(url,{})
    let res=await getDataApi
    console.log({res})
        SetAllData(await res);
        SetDataDx(await res.metaData.dimensions.dx);
        SetDataItems(await res.metaData.items);
        SetDataPe(await res.metaData.dimensions.pe);
        SetDataRows(await res.rows);
  };

  useEffect(() => {
    

    getDeliveries()
  }, [period,ouSelected]);


  useEffect(() => {
  
   
    // generateDataForMap();
    SetDataToMap(generateDataToMap(datadx,dataRows,dataItems))
 
    // console.log(0)
  }, [dataRows]);

  useEffect(() => {
    // console.log("getting dara")
    setMapPeriods(getPeriodName(dataPe, dataItems));
  }, [dataPe,dataItems]);




  return (
    <DeliveriesContext.Provider 
    value={{ dataToMap, dataPe, dataItems, mapPeriods ,allData,datadx}}
    >{children}</DeliveriesContext.Provider>
  );
};
