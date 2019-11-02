import axios from "axios";

/**
 * The test api with api key 1 for deveolpement from themealdb.com
 */
export default axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1"
});
