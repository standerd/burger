import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-ds-burger.firebaseio.com/"
});

export default instance;
