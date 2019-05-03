import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PEDDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
  SWITCH_CARSET
} from "./constants";

//reducer is a function takes action and init state and return a new state
//the 3 principles
// single source of the true -initialState
//state is read only - never modify the init obj
//changes using pure functions -take input and return output,no side effect

//reducer return an obj that includes the init state and add some new data.
//using Object.assign(target,....) target {} empty obj, then put init state, and modified data
//or {...initialState,searchField:modifield data} works same

const initStateSearchField = {
  searchField: "",
  cardSet: 1
};

const cardSetRn = (cardSetState, cardSetPayload) => {
  if (cardSetState + cardSetPayload > 4) {
    return cardSetState - cardSetPayload;
  }
  return cardSetPayload + cardSetPayload;
};

export const searchRobots = (state = initStateSearchField, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    case SWITCH_CARSET:
      const updatedCardSet = cardSetRn(state.cardSet, action.payload);
      return Object.assign({}, state, { cardSet: updatedCardSet });
    default:
      return state;
  }
};

const initStateRequestRobots = {
  robots: [],
  isPending: false,
  error: ""
};

export const requestRobots = (state = initStateRequestRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PEDDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAIL:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
