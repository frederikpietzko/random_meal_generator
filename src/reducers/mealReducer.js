import { FETCH_RANDOM_MEAL } from "../actions/actionTypes";
export default (state = null, action) => {
  switch (action.type) {
    case FETCH_RANDOM_MEAL:
      return action.payload;
    default:
      return state;
  }
};
