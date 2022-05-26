import axios from "axios";

const API_URL =  "https://boiling-wave-51445.herokuapp.com/heka/api/users";

const signup = (email, password, name, height, weight, age, sex,photo) => {
  return axios.post(API_URL + "/register", {
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
      return response;
    });
};

const login = (email, password) => {
  return axios.post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      return response;
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