import axios from "axios";

export default {
  findUsersForms: function(userID) {
    return axios.post("/api/forms/findall", userID)
  },
  findOneForm: function(formID) {
    return axios.post("/api/forms/findone", formID)
  }
}