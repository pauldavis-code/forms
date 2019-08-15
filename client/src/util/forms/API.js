import axios from "axios";

export default {
  findUsersForms: function(userID) {
    return axios.post("/api/forms/find", userID)
  }
}