import React, { useContext } from 'react'
import HighChartDemo from '../../Components/HichartDemo/HighChartDemo'
import { LiveBirthContext } from '../../Contexts/LiveBirthContext/LiveBirthContext'

function LiveBirth() {
    const {dataToMap,mapPeriods}=useContext(LiveBirthContext)

    return (
        <div>
           
            {/* <SubdivisionFilter></SubdivisionFilter> */}
     <HighChartDemo data={dataToMap} chartType="column" period={mapPeriods}></HighChartDemo>
            
        </div>
    )
}

export default LiveBirth
