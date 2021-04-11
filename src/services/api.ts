import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com",
});
