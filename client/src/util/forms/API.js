import axios from "axios";

export default {
  findUsersForms: function(userID) {
    return axios.post("/api/forms/find", userID)
  },
  findOneForm: function(formID) {
    console.log(formID)
    return axios.post("/api/forms/findone", formID)
  }
}