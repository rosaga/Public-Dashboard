import React from "react";

function DistrictSelect(props) {
  const { values,handleChange } = props;
  return (
    <div>
      <select onChange={(e)=>handleChange(e.target.value)} class="form-select" aria-label="Default select example">
      <option value="">Select District</option>
        {values.map((val, index) => {
          return <option key={index} value={val.id}>{val.name}</option>;
        })}
      </select>
    </div>
  );
}

export default DistrictSelect;
