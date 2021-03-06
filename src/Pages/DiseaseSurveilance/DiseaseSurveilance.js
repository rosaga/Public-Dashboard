import React from 'react'
import HighChartDemo from '../../Components/HichartDemo/HighChartDemo'
import SubdivisionFilter from '../../Components/SubdivisionFilter/SubdivisionFilter'

function DiseaseSurveilance() {
    return (
        <div>
            <h1>Disease Surveillance</h1>
            <hr></hr>
     <SubdivisionFilter></SubdivisionFilter>
     <HighChartDemo></HighChartDemo>
        </div>
    )
}

export default DiseaseSurveilance
