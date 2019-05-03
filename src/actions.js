import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PEDDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
  SWITCH_CARSET
} from "./constants";

//redux usually create action and the action is a function that return a obj
//the obj contains type:"ACTION_TYPE" ,using capital case means constant
//and payload ,payload is just a data we need to pass to action->reducer
//the best pratice is use make a variable file to avoid a typol in type
//and it also gives a error when you misstype
export const setSearchfield = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const switchCardset = () => {
  const rn = Math.floor(Math.random() * 3 + 1); //return 1 or 2
  return {
    type: SWITCH_CARSET,
    payload: rn
  };
};

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PEDDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json()) //convert to json, json()
    .then(data => {
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: REQUEST_ROBOTS_FAIL, payload: `${error}` });
    });
};
//for async call in redux ,thunk make it return a function so action needs to be hoFunction
