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
  EditSmurf_Fail
} from "../actions/actions";

const initialState = {
  smurfList: [],
  smurfNew: {},
  isGetting: false,
  errMsg: "",
  isAdding: false,
  isRemove: false,
  smurfEdit: {},
  isEditing: false
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GetData_Start:
      console.log("getList start");
      return {
        ...state,
        error: "",
        isGetting: true
      };
    case GetData_Success:
      console.log("getList success");
      return { ...state, smurfList: payload };
    case GetData_Fail:
      console.log("getList fail");
      return { ...state, errMsg: payload, isGetting: false };
    default:
      return state;
  }
};
