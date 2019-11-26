const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BowModelSchema = new Schema({
  placement: Number,
  name: String,
  skuCode: String,
  msrp: Number,
  independentMsrp: Number,
  bowListImagePath: String,
  modelNameUrl: String,
  elevatorPitch: String,
  captionHeader: String,
  caption: String,
  independentCaption: String,
  features: [
    {
      title: String,
      content: String
    }
  ],
  limbType: String,
  axleToAxle: String,
  brace: String,
  weight: String,
  stringLength: String,
  cableLength: String,
  centerShot: String,
  peakWeights: [ String ],
  drawLengths: [ String ],
  speedRating: String,
  useTypeIcons: [ String ],
  useTypes: [ String ],
  letOff: String,
  featureImages: [
    {
      source: String,
      caption: String
    }
  ],
  bowModelHeroVideoBg: String,
  bowModelHeroVideoMobileBg: String,
  bowModelHeroVideoPosterBg: String,
  handOrientations: [ String ],
  gripOptions: [ String ],
  riserColors: [
    {
      colorFamily: String,
      colorName: String,
      skuCode: String,
      swatchUrl: String,
      patternName: String,
      colorType: String
    }
  ],
  limbColors: [
    {
      colorFamily: String,
      colorName: String,
      skuCode: String,
      swatchUrl: String,
      patternName: String,
      colorType: String
    }
  ],
  independenceBowImages: [
    {
      name: String,
      thumb: String,
      large: String
    }
  ]
});

module.exports = BowModelSchema;
