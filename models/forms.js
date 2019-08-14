const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormsSchema = new Schema({
  form_title: { type: String, required: true },
  form_contents: { type: Array, required: true }
})

const AllForms = mongoose.model("AllForms", FormsSchema)

module.exports = AllForms;