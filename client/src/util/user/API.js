import axios from "axios";

export default {
  createNewUser: function(userData) {
    return axios.post("/api/users/signup", userData)
  },
  findCurrentUser: function(userData) {
    return axios.post("/api/users/login", userData)
  },
  getUser: function() {
    return axios.post('/api/users/find')
  },
  findFormIDs: function(userID) {
    console.log("userID: " + userID)
    return axios.post("/api/users/forms", userID)
  }
}