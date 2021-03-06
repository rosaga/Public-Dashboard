import { justFetch } from "../Services/JustFetchService";

const getPeriodName = (dataPe, dataItems) => {
    // console.log("getting period")
  let data = [];

  console.log({dataPe})
  console.log({dataItems})

//   return 0;

  dataPe.map((pe) => {
    let periodName = "";
    periodName = dataItems[pe].name;
    //   console.log(periodName)
    data = [...data, periodName];
  });

  return data;
};

const getData = (url) => {
  return justFetch(url, {}).then((res) => {
    return res;
  });
};

const generateDataToMap = (datadx, dataRows, dataItems) => {
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
    console.log(data);
    mapData = [...mapData, data[0]];
  });

  return mapData;
};

export { getPeriodName, getData, generateDataToMap };
