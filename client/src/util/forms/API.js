import axios from "axios";

export default {
  findUsersForms: function(userID) {
    return axios.get("/api/forms/findall", userID)
  }
}