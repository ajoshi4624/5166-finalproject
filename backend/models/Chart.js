const mongoose = require('mongoose');

const dataPointSchema = new mongoose.Schema({
  label: String,
  value: Number
});

const chartSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, 
  description: String,
  data: [dataPointSchema]
});

module.exports = mongoose.model('Chart', chartSchema);
