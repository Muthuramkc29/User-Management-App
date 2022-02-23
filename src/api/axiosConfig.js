import axios from "axios";

export default axios.create({
  baseURL: "https://user-management-json-api.herokuapp.com/",
});
