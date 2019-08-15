const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormsSchema = new Schema({
  form_title: { type: String, required: true },
  form_contents: { type: Array, required: true },
  form_owner: {type: String, required: true},
  form_borrower: {type: Array}
})

const Forms = mongoose.model("AllForms", FormsSchema)

module.exports = Forms;