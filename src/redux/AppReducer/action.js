import * as types from "./action.types";

import axios from "axios";

const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  axios
    .get(`https://fkapi-420.herokuapp.com/data`, params)
    .then((r) =>{ dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data });
console.log(JSON.stringify(r.data))})
    .catch((e) => dispatch({ type: types.GET_DATA_FAILURE }));
};

export { getData };
