import React from "react";
import { addSmurf, handleChange } from "../actions/actions";
import { connect } from "react-redux";

const NewSmurf = ({ addSmurf, newSmurf, handleChange }) => {
  return (
    <div className="newSmurf-container">
      <p>NewSmurf:</p>
      <form className="addSmurf" onSubmit={addSmurf}>
        <input
          className="newSmurf-name"
          type="text"
          name="name"
          placeholder="Name"
          value={newSmurf.name}
          onChange={handleChange}
        />
        <input
          className="newSmurf-age"
          type="text"
          name="age"
          placeholder="Age"
          value={newSmurf.age}
          onChange={handleChange}
        />
        <input
          className="newSmurf-height"
          type="text"
          name="height"
          placeholder="Height"
          value={newSmurf.height}
          onChange={handleChange}
        />
        <button className="newSmurf-add">Add New Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => (
  console.log("newsmurf state:", state), { newSmurf: state.newSmurf }
);

export default connect(mapStateToProps, { addSmurf, handleChange })(NewSmurf);
