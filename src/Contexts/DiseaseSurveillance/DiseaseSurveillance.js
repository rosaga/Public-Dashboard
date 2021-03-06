import { createContext, useEffect, useState } from "react";
import { justFetch } from "../../Services/JustFetchService";

export const DiseaseSurveillanceContext = createContext();

export const DiseaseSurveillanceProvider = (props) => {
  const [period, SetPeriod] = useState("LAST_12_MONTHS");
  const [dataPe, SetDataPe] = useState([]);
  const [datadx, SetDataDx] = useState([]);
  const [dataRows, SetDataRows] = useState([]);
  const [dataItems, SetDataItems] = useState([]);
  const [allData, SetAllData] = useState([]);
  const [dataToMap, SetDataToMap] = useState([]);
  const [mapPeriods,setMapPeriods]=useState([])

  const handlePeriodChange = (val) => {
    if (val !== "") {
      SetPeriod(val);
    }
  };

  const getANCCoverage = () => {
      console.log("running")

    justFetch(
      `
    https://play.dhis2.org/2.35.1/api/29/analytics.json?dimension=dx:fbfJHSPpUQD;cYeuwXTCPkU;Jtf34kNZhzP;hfdmMSPBgLG&dimension=pe:LAST_12_MONTHS&dimension=ou:ImspTQPwCqd&displayProperty=NAME&outputIdScheme=UID
    `,
      {}
    )
      .then((res) => {
        console.log(res)
        SetAllData(res);
        SetDataDx(res.metaData.dimensions.dx);
        SetDataItems(res.metaData.items);
        SetDataPe(res.metaData.dimensions.pe);
        SetDataRows(res.rows);
      })
      .catch((err) => {
          console.log(err)
      });
  };

  const generateDataForMap = () => {
    let mapData = [];

    datadx.map((mydx) => {
      let indicatorName = "";
      let data = [];
      let finalData = {
        name: indicatorName,
        data: data,
      };
      //   console.log(mydx)
      // console.log(dataItems['hfdmMSPBgLG'].name)
      console.log(dataItems[mydx].name);
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
      //   console.log(filteredData)
      data = [{ name: indicatorName, data: filteredData }];
      // console.log(data)
      mapData = [...mapData, data[0]];
    });

    SetDataToMap(mapData);
  };

  const getPeriodName=()=>{
      let data=[]
      dataPe.map((pe)=>{
          let periodName=""
          periodName= dataItems[pe].name
          console.log(periodName)
          data=[...data,periodName]
      })

      setMapPeriods(data)

  }

  useEffect(() => {
    //   effect
    getANCCoverage();
    return () => {
      //   cleanup
    };
  }, []);

  useEffect(() => {
    // console.log(dataItems);
    if (
      dataItems !== "undefined" ||
      dataItems !== null ||
      datadx !== "undefined" ||
      dataItems.length !== 0
    ) {
      generateDataForMap();
      // console.log(0)
    }
  }, [dataItems, dataRows]);


  useEffect(()=>{
    getPeriodName()
  },[dataPe,dataItems])

  const { children } = props;
  return (
    <DiseaseSurveillanceContext.Provider
      value={{ handlePeriodChange, dataToMap ,dataPe,dataItems,mapPeriods}}
    >
      {children}
    </DiseaseSurveillanceContext.Provider>
  );
};
