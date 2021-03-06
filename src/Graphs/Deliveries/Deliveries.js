import React, { useContext } from 'react'
import HighChartDemo from '../../Components/HichartDemo/HighChartDemo'
import { DeliveriesContext } from '../../Contexts/DeliveriesContext/DeliveriesContext'

function Deliveries() {
    const {dataToMap,mapPeriods}=useContext(DeliveriesContext)

    return (
        <div>
           
            {/* <SubdivisionFilter></SubdivisionFilter> */}
     <HighChartDemo data={dataToMap} chartType="line" period={mapPeriods}></HighChartDemo>
            
        </div>
    )
}

export default Deliveries
