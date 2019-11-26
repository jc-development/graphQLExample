const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ColorFinishSchema = require('./color-finish');

const ColorFinish = mongoose.model('ColorFinish', ColorFinishSchema);

const BrandFinishSchema = new Schema({
  name: String, // "Mossy Oak", "Realtree", etc
  type: String,
  finishes: [
    {}
  ]
});

module.exports = BrandFinishSchema;
