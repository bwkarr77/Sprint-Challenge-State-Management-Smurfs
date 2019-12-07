import {
  GetData_Start,
  GetData_Success,
  GetData_Fail,
  RefreshList,
  AddSmurf_Start,
  AddSmurf_Success,
  AddSmurf_Fail,
  DeleteSmurf_Start,
  DeleteSmurf_Success,
  DeleteSmurf_Fail,
  EditSmurf_Start,
  EditSmurf_Success,
  EditSmurf_Fail,
  HandleChange
} from "../actions/actions";

const initialState = {
  smurfList: [],
  newSmurf: {},
  isGetting: false,
  errMsg: "",
  isAdding: false,
  isRemove: false,
  smurfEdit: {},
  isEditing: false
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // GET DATA
    case GetData_Start:
      console.log("getList start");
      return {
        ...state,
        errMsg: "",
        isGetting: true
      };
    case GetData_Success:
      console.log("getList success");
      return { ...state, smurfList: payload };
    case GetData_Fail:
      console.log("getList fail");
      return { ...state, errMsg: payload, isGetting: false };

    //   ADD SMURF
    case AddSmurf_Start:
      console.log("addsmurf start");
      return { ...state, isAdding: true };
    case AddSmurf_Success:
      console.log("addsmurf success");
      return { ...state, isAdding: false, smurfList: payload };
    case AddSmurf_Fail:
      console.log("addsmurf fail");
      return { ...state, errMsg: payload, isAdding: false };

    //    HANDLERS
    case HandleChange:
      return { ...state, [payload.name]: payload.value };
    case RefreshList:
      return { ...state };

    //  EDIT SMURFS
    case EditSmurf_Start:
      return {
        ...state,
        isEditing: true,
        editSmurf: state.smurfList.find(
          item => item.id.toString() === `${payload}`
        )
      };
    case EditSmurf_Success:
      return {
        ...state,
        isEditing: false
      };
    case EditSmurf_Fail:
      return {
        ...state,
        isEditing: false,
        errMsg: payload
      };

    //    DELETE SMURFS
    case DeleteSmurf_Start:
      return {
        ...state,
        isRemove: true
      };
    case DeleteSmurf_Fail:
      return {
        ...state,
        isRemove: false,
        errMSg: payload
      };
    case DeleteSmurf_Success:
      return {
        ...state,
        isRemove: false,
        smurfList: payload
      };

    //
    default:
      return state;
  }
};
