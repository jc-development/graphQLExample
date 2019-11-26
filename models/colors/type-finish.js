const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BrandFinishSchema = require('./brand-finish');

const BrandFinish = mongoose.model('BrandFinish', BrandFinishSchema);

const TypeFinishSchema = new Schema({
  name: String, // 'camo', 'outdoor', 'rhinodize',
  brands: [
    {}
  ]
});

module.exports = TypeFinishSchema;
