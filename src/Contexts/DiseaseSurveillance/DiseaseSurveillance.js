import { createContext, useContext, useEffect, useState } from "react";
import { justFetch } from "../../Services/JustFetchService";
import { generateDataToMap, getData, getPeriodName } from "../../Utils/Utils";
import { OrgUnitsContext } from "../OrgUnitsContext/OrgUnitsContext";

export const DiseaseSurveillanceContext = createContext();

export const DiseaseSurveillanceProvider = (props) => {
  const [period, SetPeriod]= useState("LAST_12_MONTHS");
  const [dataPe, SetDataPe] = useState([]);
  const [datadx, SetDataDx] = useState([]);
  const [dataRows, SetDataRows] = useState([]);
  const [dataItems, SetDataItems] = useState([]);
  const [allData, SetAllData] = useState([]);
  const [dataToMap, SetDataToMap] = useState([]);
  const [mapPeriods, setMapPeriods] = useState([]);
  const { chiefDoms,ouSelected,
    facilities}=useContext(OrgUnitsContext)

  const handlePeriodChange = (val) => {
    if (val !== "") {
      SetPeriod(val);
    }

  };


  //   https://play.dhis2.org/2.35.1/api/29/analytics.json?dimension=dx:tn3p7vIxoKY;R1WAv9bVXff;ncEnqRPHFvk;FE82N2sA0YI&dimension=pe:LAST_12_MONTHS&filter=ou:ImspTQPwCqd&displayProperty=NAME&outputIdScheme=UID

  const getANCCoverage = async() => {
    // console.log("running");
  // console.log({ period });

    let url =  `https://play.dhis2.org/2.34.3/api/29/analytics.json?dimension=dx:fbfJHSPpUQD;cYeuwXTCPkU;Jtf34kNZhzP;hfdmMSPBgLG&dimension=pe:${period}&dimension=ou:${ouSelected}&displayProperty=NAME&outputIdScheme=UID`


    // justFetch(
    //   `
    // https://play.dhis2.org/2.34.3/api/29/analytics.json?dimension=dx:fbfJHSPpUQD;cYeuwXTCPkU;Jtf34kNZhzP;hfdmMSPBgLG&dimension=pe:LAST_12_MONTHS&dimension=ou:ImspTQPwCqd&displayProperty=NAME&outputIdScheme=UID
    // `,
    //   {}
    // )
    //   .then((res) => {
    //     console.log(res);
    //     SetAllData(res);
    //     SetDataDx(res.metaData.dimensions.dx);
    //     SetDataItems(res.metaData.items);
    //     SetDataPe(res.metaData.dimensions.pe);
    //     SetDataRows(res.rows);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    let getDataApi=await justFetch(url,{})
    let res=await getDataApi
    // console.log(res)
        SetAllData(await res);
        SetDataDx(await res.metaData.dimensions.dx);
        SetDataItems(await res.metaData.items);
        SetDataPe(await res.metaData.dimensions.pe);
        SetDataRows(await res.rows);


  };

  const getDeliveries = () => {
    justFetch(
      `
 https://play.dhis2.org/2.35.1/api/29/analytics.json?dimension=dx:tn3p7vIxoKY;R1WAv9bVXff;ncEnqRPHFvk;FE82N2sA0YI&dimension=pe:LAST_12_MONTHS&filter=ou:ImspTQPwCqd&displayProperty=NAME&outputIdScheme=UID`,
      {}
    )
      .then((res) => {
        // console.log(res);
        SetAllData(res);
        SetDataDx(allData.metaData.dimensions.dx);
        SetDataItems(allData.metaData.items);
        SetDataPe(allData.metaData.dimensions.pe);
        SetDataRows(allData.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateDataForMap = () => {
    console.log("generating map data")
    let mapData = [];

    datadx.map((mydx) => {
      let indicatorName = "";
      let data = [];
      let finalData = {
        name: indicatorName,
        data: data,
      };
      // console.log(dataItems[mydx].name);
      indicatorName = dataItems[mydx].name;

      let filteredData = dataRows
        .filter((dr) => {
          return dr[0] === mydx;
        })
        .map((dr2) => {
          return parseInt(dr2[3]);
        });

      data = filteredData.sort((a, b) => {
        return a[1] - b[1];
      });
        // console.log(filteredData)
      data = [{ name: indicatorName, data: filteredData }];
      console.log(data)
      mapData = [...mapData, data[0]];
    });

    SetDataToMap(mapData);
  };

  useEffect(()=>{
    // SetPeriod("LAST_12_MONTHS")
  },[])

  useEffect(() => {
    //   effect
    getANCCoverage();
    let url= `
    https://play.dhis2.org/2.34.3/api/29/analytics.json?dimension=dx:fbfJHSPpUQD;cYeuwXTCPkU;Jtf34kNZhzP;hfdmMSPBgLG&dimension=pe:LAST_12_MONTHS&dimension=ou:ImspTQPwCqd&displayProperty=NAME&outputIdScheme=UID
    `
    // SetAllData(getData(url));
    // getData(url).then((res)=>{
    // SetAllData(res);
    // SetDataDx(res.metaData.dimensions.dx)
    // SetDataItems(res.metaData.items);
    // SetDataPe(allData.metaData.dimensions.pe);
    // SetDataRows(allData.rows);

    
// })
    // SetDataDx(getData(url).metaData.dimensions.dx);
    // SetDataItems(allData.metaData.items);
    // SetDataPe(allData.metaData.dimensions.pe);
    // SetDataRows(allData.rows);

  }, [period,ouSelected]);

  useEffect(() => {
    // console.log(dataItems);

   
    // generateDataForMap();
    SetDataToMap(generateDataToMap(datadx,dataRows,dataItems))
 
    // console.log(0)
  }, [dataRows]);

  useEffect(() => {
    setMapPeriods(getPeriodName(dataPe, dataItems));
  }, [dataPe,dataItems]);

  const { children } = props;
  return (
    <DiseaseSurveillanceContext.Provider
      value={{ handlePeriodChange, dataToMap, dataPe, dataItems, mapPeriods ,allData,datadx}}
    >
      {children}
    </DiseaseSurveillanceContext.Provider>
  );
};
