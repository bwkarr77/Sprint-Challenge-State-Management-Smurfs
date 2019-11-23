import axios from "axios";

//get API Data
export const GetData_Start = "GetData_Start";
export const GetData_Success = "GetData_Success";
export const GetData_Fail = "GetData_Fail";
export const RefreshList = "RefreshList";

//adding new smurf to API
export const AddSmurf_Start = "AddSmurf_Start";
export const AddSmurf_Success = "AddSmurf_Success";
export const AddSmurf_Fail = "AddSmurf_Fail";
export const HandleChange = "HandleChange";

//delete/edit smurf data in API
export const DeleteSmurf_Start = "DeleteSmurf_Start";
export const DeleteSmurf_Success = "DeleteSmurf_Success";
export const DeleteSmurf_Fail = "DeleteSmurf_Fail";
export const EditSmurf_Start = "EditSmurf_Start";
export const EditSmurf_Success = "EditSmurf_Success";
export const EditSmurf_Fail = "EditSmurf_Fail";
export const a = "a";
export const b = "b";
export const c = "c";
//handle consts

const baseUrl = "http://localhost:3333/smurfs";

export const getList = () => dispatch => {
  dispatch({ type: GetData_Start });
  axios
    .get(baseUrl)
    .then(results => {
      console.log("results.data:", results.data);
      dispatch({ type: GetData_Success, payload: results.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GetData_Fail });
    });
};

export const addSmurf = event => dispatch => {
  event.preventDefault();
  dispatch({ type: AddSmurf_Start });
  const newSmurf = {
    name: event.target[0].value,
    age: event.target[1].value,
    height: event.target[2].value
  };
  axios
    .post(baseUrl, newSmurf)
    .then(res => {
      console.log(res);
      dispatch({ type: AddSmurf_Success, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AddSmurf_Fail, payload: err });
    });
};

export const handleChange = event => ({
  type: HandleChange,
  payload: event.target
});

export const refreshList = () => ({
  type: RefreshList
});
