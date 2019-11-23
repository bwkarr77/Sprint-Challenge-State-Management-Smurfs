import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getList } from "../actions/actions";

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
        {console.log("smurfList")}
        {/*  */}
        {smurfList.map(smurf => {
          return console.log("1", smurf);
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => (
  console.log(state.smurfList),
  {
    smurfList: state.smurfList
  }
);
export default connect(mapStateToProps, { getList })(SmurfList);
