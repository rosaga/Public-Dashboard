import React from 'react'
import HighChartDemo from '../../Components/HichartDemo/HighChartDemo'
import SubdivisionFilter from '../../Components/SubdivisionFilter/SubdivisionFilter'
import DeathByDiseaseGraph from '../../Graphs/DeathByDiseaseGraph/DeathByDiseaseGraph'
import DiseaseSurveillanceGraph from '../../Graphs/DiseaseSurveillanceGraph/DiseaseSurveillanceGraph'

function DiseaseSurveilance() {
    return (
        <div>
            <h1>Disease Surveillance</h1>
            <hr></hr>
     <SubdivisionFilter></SubdivisionFilter>
     <DiseaseSurveillanceGraph></DiseaseSurveillanceGraph>
     <DeathByDiseaseGraph></DeathByDiseaseGraph>
        </div>
    )
}

export default DiseaseSurveilance
