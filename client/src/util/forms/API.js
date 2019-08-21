import axios from "axios";

export default {
  findUsersForms: function(userID) {
    return axios.post("/api/forms/findall", userID)
  },
  findOneForm: function(formID) {
    return axios.post("/api/forms/findone", formID)
  },
  createNewForm: function(form) {
    return axios.post("/api/forms/createnew", form)
  },
  submitCompletedForm: function(form) {
    return axios.post("/api/forms/complete", form)
  }
}