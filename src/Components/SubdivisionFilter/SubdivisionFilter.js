import React, { useContext } from "react";
import AppRow from "../../Layouts/AppRow/AppRow";
import ChiefDomSelect from "../ChiefDomSelect/ChiefDomSelect";
import DistrictSelect from "../DistrictSelect/DistrictSelect";
import FacilitySelect from "../FacilitySelect/FacilitySelect";
import { appOrgUnits } from "../../Constants/orgunits";
import { periods } from "../../Constants/periods";
import { OrgUnitsContext } from "../../Contexts/OrgUnitsContext/OrgUnitsContext";
import SelectPeriod from "../SelectPeriod/SelectPeriod";

function SubdivisionFilter() {
  const districts = appOrgUnits[0].organisationUnits;
  const {
    chiefDoms,
    handleDistrictChange,
    handleChiefdomSelect,
    handleFacilityChange,
    facilities,
  } = useContext(OrgUnitsContext);

  return (
    <div>
      <AppRow>
        <div class="row">
          <div class="col">
            <DistrictSelect
              handleChange={handleDistrictChange}
              values={districts}
            />
          </div>
          <div class="col">
            <ChiefDomSelect
              handleChange={handleChiefdomSelect}
              values={chiefDoms}
            />
          </div>
          <div class="col">
            <FacilitySelect
              handleChange={handleFacilityChange}
              values={facilities}
            />
          </div>

          <div class="col">
            <SelectPeriod values={periods} />
          </div>
        </div>
      </AppRow>
    </div>
  );
}

export default SubdivisionFilter;
