import React, { useContext } from 'react'
import HighChartDemo from '../../Components/HichartDemo/HighChartDemo'
import { DiseaseSurveilanceContext } from '../../Contexts/DiseaseSurveilanceContext/DiseaseSurveilanceContext'

function DiseaseSurveillanceGraph() {
    const {dataToMap,mapPeriods}=useContext(DiseaseSurveilanceContext)

    return (
        <div>
           
            {/* <SubdivisionFilter></SubdivisionFilter> */}
     <HighChartDemo graphTitle="Disease Surveillance" data={dataToMap} chartType="column" period={mapPeriods}></HighChartDemo>
            
        </div>
    )
}

export default DiseaseSurveillanceGraph
