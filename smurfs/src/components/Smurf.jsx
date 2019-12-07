import React from "react";
import { connect } from "react-redux";
import {
  handleChange,
  handleDelete,
  handleEdit,
  startEdit
} from "../actions/actions";

const Smurf = ({
  editSmurf,
  handleChange,
  isEditing,
  smurf,
  handleDelete,
  handleEdit,
  startEdit
}) => {
  // const smurf = props.smurf;
  return (
    <div className="smurf">
      <h4>{smurf.name}</h4>
      <p>
        Age: {smurf.age}, Height: {smurf.height}
      </p>
      <div className="button-container">
        <button className="edit-button" name={smurf.id} onClick={startEdit}>
          Edit
        </button>
        <button
          className="delete-button"
          name={smurf.id}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfList: state.smurfList,
  isEditing: state.isEditing,
  editSmurf: state.editSmurf
});

export default connect(mapStateToProps, {
  handleChange,
  handleDelete,
  handleEdit,
  startEdit
})(Smurf);
