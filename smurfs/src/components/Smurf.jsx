import React from "react";

const Smurf = props => {
  const smurf = props.smurf;
  return (
    <div className="smurf">
      <h4>{smurf.name}</h4>
    </div>
  );
};

export default Smurf;
