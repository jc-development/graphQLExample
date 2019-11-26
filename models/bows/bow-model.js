const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TypeFinishSchema = require('../colors/type-finish');

const TypeFinish = mongoose.model('TypeFinish', TypeFinishSchema);

const BowModelSchema = new Schema({
  placement: Number,
  modelYear: String,
  name: String,
  skuCode: String,
  msrp: Number,
  bowListImagePath: String,
  modelNameUrl: String,
  limbType: String,
  logo: String,
  cadPath: String,
  techSpecs: {
    axleToAxle: String,
    brace: String,
    weight: String,
    stringLength: String,
    cableLength: String,
    centerShot: String,
    peakWeights: [ String ],
    drawLengths: [ String ],
    speedRating: Number,
    letOff: String,
    useTypes: [ {name: String, icon: String, caption: String, description: String, image: String} ],
    finishes: {
      riser: [
        {}
      ],
      limbs: {}
    },
    mods: [ {name: String, speed: String} ]
  }
});

module.exports = BowModelSchema;
