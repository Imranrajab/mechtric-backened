const mongoose = require("mongoose");

const metricSchema = new mongoose.Schema({
  id: { type: Number }, 
  fullName: { type: String },
  email: { type: String },
  phone: { type: Number },
  message: { type: String },
company: { type: String },
  subject: { type: String },
});

module.exports = mongoose.model("metric", metricSchema);
