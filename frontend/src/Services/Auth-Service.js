import axios from "axios";

const API_URL = "http://127.0.0.1:4300/heka/api/users";

const signup = (email, password, name, height, weight, age, sex,photo) => {
  return axios
    .post(API_URL + "/register", {
      email,
      password,
      name,
      height,
      weight,
      age,
      sex,
      photo
    })
    .then((response) => {
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};



const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;