const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormsSchema = new Schema({
  form_title: { type: String},
  form_contents: { type: Array},
  form_owner: {type: String},
})

const FormTemplate = mongoose.model("form-template", FormsSchema)

module.exports = FormTemplate;