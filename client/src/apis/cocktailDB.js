import axios from "axios";

/**
 * The test api with api key 1 for deveolpement from themealdb.com
 */

const key = process.env.REACT_APP_MEALDB_API_KEY;

export default axios.create({
  baseURL: `https://www.thecocktaildb.com/api/json/v2/${key}`
});
