import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getList } from "../actions/actions";

import NewSmurf from "./NewSmurf";
import Smurf from "./Smurf";

// {
//     name: 'brainey',
//     age: 200,
//     height: '5cm',
//     id: 0
// }
const SmurfList = ({ smurfList, getList }) => {
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="smurfListContainer">
      <h2>List of Smurfs:</h2>
      <div className="smurfList">
        {smurfList.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
      <NewSmurf />
    </div>
  );
};

const mapStateToProps = state => (
  console.log("smurfList state:", state.smurfList),
  {
    smurfList: state.smurfList
  }
);
export default connect(mapStateToProps, { getList })(SmurfList);
