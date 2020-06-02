import axios from "axios";

axios.defaults.baseURL = "http://emphasoft-test-assignment.herokuapp.com/";
axios.defaults.headers.common["Authorization"] = window.localStorage.token;

window.axios = axios;

export default axios;
