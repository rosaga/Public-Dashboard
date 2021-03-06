import HighchartsReact from "highcharts-react-official";
import React, { useContext } from "react";
import { ANCCoverageContext } from "../../Contexts/ANCCoverage/ANCCoverage";
var Highcharts = require("highcharts/highmaps");

function HighChartDemo(props) {

    // const {dataToMap,mapPeriods}=useContext(ANCCoverageContext)
    const {data,chartType,period,graphTitle,graphSubTitile}=props;
    // console.log(dataToMap)
  let options = {
    chart: {
      type: chartType,
    },
    title: {
      text: graphTitle,
    },
    subtitle: {
      text: graphSubTitile,
    },
    xAxis: {
      categories: period,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
        series: data
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default HighChartDemo;
