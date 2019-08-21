const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormsSchema = new Schema({
  form_title: { type: String, required: true },
  form_contents: { type: Array, required: true },
  form_owner: {type: String, required: true},
  form_inputs: {type: Array, required: true}
}, { collection: 'form-completed' })

const FormCompleted = mongoose.model("form-completed", FormsSchema)

module.exports = FormCompleted;