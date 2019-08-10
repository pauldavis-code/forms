import axios from "axios";

export default {
  createNewUser: function(userData) {
    console.log(userData);
    return axios.post("/api/users/signup", userData)
  },
  findCurrentUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users/login", userData)
  },
  userLoggedIn: function(username) {
  }
}