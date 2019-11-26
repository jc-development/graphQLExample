const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorFinishSchema = new Schema({
    colorName: String,
    skuCode: String,
    swatchUrl: String,
    patternName: String,
});

module.exports = ColorFinishSchema;
