import HighchartsReact from "highcharts-react-official";
import React, { useContext } from "react";
import { DiseaseSurveillanceContext } from "../../Contexts/DiseaseSurveillance/DiseaseSurveillance";
var Highcharts = require("highcharts/highmaps");

function HighChartDemo() {
    const {dataToMap}=useContext(DiseaseSurveillanceContext)
    console.log(dataToMap)
  let options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Average Rainfall",
    },
    subtitle: {
      text: "Source: WorldClimate.com",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Rainfall (mm)",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        series: dataToMap
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default HighChartDemo;
