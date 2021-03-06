import { createContext, useContext, useEffect, useState } from "react";
import { justFetch } from "../../Services/JustFetchService";
import { generateDataToMap, getData, getPeriodName } from "../../Utils/Utils";
import { OrgUnitsContext } from "../OrgUnitsContext/OrgUnitsContext";

export const ANCCoverageContext = createContext();

export const ANCCoverageProvider = (props) => {
  
  const [dataPe, SetDataPe] = useState([]);
  const [datadx, SetDataDx] = useState([]);
  const [dataRows, SetDataRows] = useState([]);
  const [dataItems, SetDataItems] = useState([]);
  const [allData, SetAllData] = useState([]);
  const [dataToMap, SetDataToMap] = useState([]);
  const [mapPeriods, setMapPeriods] = useState([]);
  const { chiefDoms,ouSelected,period,period2,
    facilities}=useContext(OrgUnitsContext)




  const getANCCoverage = async() => {
    
    console.log("running");
  // console.log({ period });

    let url =  `https://play.dhis2.org/2.34.3/api/29/analytics.json?dimension=dx:fbfJHSPpUQD;cYeuwXTCPkU;Jtf34kNZhzP;hfdmMSPBgLG&dimension=pe:${period2}&dimension=ou:${ouSelected}&displayProperty=NAME&outputIdScheme=UID`



    let getDataApi=await justFetch(url,{})
    let res=await getDataApi
    console.log(res)
        SetAllData(await res);
        SetDataDx(await res.metaData.dimensions.dx);
        SetDataPe(await res.metaData.dimensions.pe);
        SetDataItems(await res.metaData.items);
        SetDataRows(await res.rows);


  };




  useEffect(()=>{
    // SetPeriod("LAST_12_MONTHS")
  },[])

  useEffect(() => {
    //   effect
    getANCCoverage();
   
  

  }, [period2,ouSelected]);

  useEffect(() => {
    // console.log(dataItems);

   
    // generateDataForMap();
    SetDataToMap(generateDataToMap(datadx,dataRows,dataItems))
 
    // console.log(0)
  }, [dataRows]);

  useEffect(() => {
    setMapPeriods(getPeriodName(dataPe, dataItems));
  }, [dataItems]);

  const { children } = props;
  return (
    <ANCCoverageContext.Provider
      value={{ dataToMap, dataPe, dataItems, mapPeriods ,allData,datadx}}
    >
      {children}
    </ANCCoverageContext.Provider>
  );
};
