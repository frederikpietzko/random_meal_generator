import { FETCH_RANDOM_MEAL } from "./actionTypes";
import mealDB from "../apis/mealDB";

export const fetchRandomMeal = () => async dispatch => {
  const res = await mealDB.get("/random.php");
  dispatch({
    type: FETCH_RANDOM_MEAL,
    payload: res.data.meals[0]
  });
};
