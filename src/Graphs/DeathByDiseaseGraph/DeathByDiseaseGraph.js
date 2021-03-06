import React, { useContext } from 'react'
import HighChartDemo from '../../Components/HichartDemo/HighChartDemo'
import { DeathByDiseaseContext } from '../../Contexts/DeathByDiseaseContext/DeathByDiseaseContext'


function DeathByDiseaseGraph() {
    const {dataToMap,mapPeriods}=useContext(DeathByDiseaseContext)

    return (
        <div>
           
            {/* <SubdivisionFilter></SubdivisionFilter> */}
     <HighChartDemo graphTitle="Death By Disease" data={dataToMap} chartType="column" period={mapPeriods}></HighChartDemo>
            
        </div>
    )
}

export default DeathByDiseaseGraph
