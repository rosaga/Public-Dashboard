import React, { useContext } from "react";
import HighChartDemo from "../../Components/HichartDemo/HighChartDemo";
import SubdivisionFilter from "../../Components/SubdivisionFilter/SubdivisionFilter";
import { ANCCoverageContext } from "../../Contexts/ANCCoverage/ANCCoverage";
import Deliveries from "../../Graphs/Deliveries/Deliveries";
import LiveBirth from "../../Graphs/LiveBirth/LiveBirth";

function MCH() {
  const { dataToMap, mapPeriods } = useContext(ANCCoverageContext);

  return (
    <div>
      <h2>Mother Child Health Dashboard</h2>
      <hr></hr>
      <SubdivisionFilter></SubdivisionFilter>
      <HighChartDemo
        data={dataToMap}
        chartType="column"
        period={mapPeriods}
      ></HighChartDemo>

      <Deliveries></Deliveries>
      <LiveBirth></LiveBirth>
    </div>
  );
}

export default MCH;
