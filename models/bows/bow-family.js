const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BowModelSchema = require('./bow-model');

const BowModel = mongoose.model('BowModel', BowModelSchema);

const BowFamilySchema = new Schema({
  name: String,
  overview: {
    h1: String,
    h2: String,
    h3: String
  },
  headerVideo: String,
  headerVideoPoster: String,
  highlights: [ String ],
  compareModels: {
    backgroundImage: String,
    bows: [
      {
        bowImage: String,
        axleToAxle: String,
        massWeight: String,
        fps: String
      }
    ]
  },
  dualVideos: [ String ],
  performance: {
    header: String,
    p: String,
    fps: Number,
    drawWeight: Number,
    drawLength: Number,
    massWeight: Number
  },
  seriesSlider: [
    {
      image: String,
      caption: String
    }
  ],
  aboutCam: {
    h3: String,
    description: String,
    video: String
  },
  shopAccessoriesImage: String,
  beautyImageGallery: [ String ],
  bows: [
    {}
  ]
});


module.exports = BowFamilySchema;
