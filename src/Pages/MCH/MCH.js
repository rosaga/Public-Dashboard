import React, { useContext } from 'react'
import HighChartDemo from '../../Components/HichartDemo/HighChartDemo'
import SubdivisionFilter from '../../Components/SubdivisionFilter/SubdivisionFilter'
import { DiseaseSurveillanceContext } from '../../Contexts/DiseaseSurveillance/DiseaseSurveillance'
import Deliveries from '../../Graphs/Deliveries/Deliveries'

function MCH() {
    const {dataToMap,mapPeriods}=useContext(DiseaseSurveillanceContext)

    return (
        <div>
             <h2>Mother Child Health Dashboard</h2>
            <hr></hr>
            <SubdivisionFilter></SubdivisionFilter>
     <HighChartDemo data={dataToMap} chartType="column" period={mapPeriods}></HighChartDemo>

     <Deliveries></Deliveries>
            
        </div>
    )
}

export default MCH
