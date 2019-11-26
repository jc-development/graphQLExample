const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const finishTypes = require('./colors/finish-types-seed');

const BowModelSchema = require('../models/bows/bow-model');
const BowModel = mongoose.model('BowModel', BowModelSchema);


const kureRiserCamo = finishTypes.kureRiserCamoTypes();
const kureRiserOutdoors = finishTypes.kureRiserOutdoorsTypes();
const kureRiserRhinodize = finishTypes.kureRiserRhinodizeTypes();
const kureLimbOutdoors = finishTypes.kureLimbOutdoorsTypes();
const kureLimbCamo = finishTypes.kureLimbCamoTypes();

module.exports.kureBow = function() {
  return new BowModel({
    placement: 0,
    modelYear: "2020",
    name: "Kure",
    skuCode: "20kure",
    msrp: 1099.00,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/ninja-black.png",
    modelNameUrl: "kure",
    logo: "unknown",
    cadPath: "https://s3.amazonaws.com/elite-website/2020/kure/gltf/kure.gltf",
    limbType: "split",
    techSpecs: {
      axleToAxle: "31 13/16\" +/- 1/8\"",
      brace: "6 9/16\" +/- 1/8\"",
      weight: "4.6",
      stringLength: "58 3/16\"",
      cableLength: "35 15/16\"",
      // centerShot: "13/16\" to 15/16\"",
      peakWeights: ["40", "50", "60", "65", "70"],
      drawLengths: ["23.0", "23.5", "24.0", "24.5", "25.0", "25.5", "26.0", "26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5", "30.0"],
      speedRating: 335,
      letOff: "70% - 90%",
      useTypes: [
        {
          name: "Hunting",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
          caption: "kure Hunting Caption for hunting use type",
          description: "kure Hunting paragraph for hunting use type",
          image: ""
        },
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "kure Field Caption for hunting use type",
          description: "kure Field paragraph for field use type",
          image: ""
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "kure 3D Caption for hunting use type",
          description: "kure 3D paragraph for 3D use type",
          image: ""
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "kure Indoor Caption for indoor use type",
          description: "kure Indoor paragraph for indoor use type",
          image: ""
        }
      ],
      finishes: {
        riser: [
          kureRiserOutdoors,
          kureRiserCamo,
          kureRiserRhinodize,
        ],
        limbs: [
          kureLimbOutdoors,
          kureLimbCamo
        ]
      },
      mods: [
        {
          name: "#1 – 30.0\”",
          speed: "335 fps",
        },
        {
          name: "#2 – 29.5\”",
          speed: "330 fps",
        },
        {
          name: "#3 – 29.0\”",
          speed: "325 fps",
        },
        {
          name: "#4 – 28.5\”",
          speed: "320 fps",
        },
        {
          name: "#5 – 28.0\”",
          speed: "315 fps",
        },
        {
          name: "#6 – 27.5\”",
          speed: "310 fps",
        },
        {
          name: "#7 – 27.0\”",
          speed: "305 fps",
        },
        {
          name: "#8 – 26.5\”",
          speed: "300 fps",
        },
        {
          name: "#9 – 26.0\”",
          speed: "295 fps",
        },
        {
          name: "#10 – 25.5\”",
          speed: "290 fps",
        },
        {
          name: "#11 – 25.0\”",
          speed: "285 fps",
        },
        {
          name: "#12 – 24.5\”",
          speed: "280 fps",
        },
        {
          name: "#13 – 24.0\”",
          speed: "275 fps",
        },
        {
          name: "#14 – 23.5\”",
          speed: "270 fps",
        },
        {
          name: "#15 – 23.0\”",
          speed: "265 fps",
        },
      ]
    }
  });
};


const rezultRiserOutdoors = finishTypes.rezultRiserOutdoorsTypes();
const rezultRiserRhinodize = finishTypes.rezultRiserRhinodizeTypes();
const rezultLimbsOutdoors = finishTypes.rezultLimbOutdoorsTypes();

module.exports.rezultBow = function() {
  return new BowModel({
    placement: 1,
    modelYear: "2020",
    name: "ReZult",
    skuCode: "20rzlt",
    msrp: 1550.00,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/ninja-black.png",
    modelNameUrl: "rezult",
    logo: "unknown",
    cadPath: "https://s3.amazonaws.com/elite-website/2020/rezult/gltf/rezult.gltf",
    limbType: "split",
    techSpecs: {
      axleToAxle: "37 3/4\" +/- 1/8\"",
      brace: "7 1/4\" +/- 1/8\"",
      weight: "4.7",
      stringLength: "60 3/4\"",
      cableLength: "41 3/4\"",
      // centerShot: "13/16\" to 15/16\"",
      peakWeights: ["40", "50", "55", "60", "70"],
      drawLengths: ["24.0", "24.5", "25.0", "25.5", "26.0", "26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5", "30.0", "30.5", "31.0"],
      speedRating: 325,
      letOff: "70% - 90%",
      useTypes: [
        {
          name: "Hunting",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
          caption: "ReZult Hunting Caption for hunting use type",
          description: "ReZult Hunting paragraph for hunting use type",
          image: ""
        },
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "ReZult Field Caption for hunting use type",
          description: "ReZult Field paragraph for field use type",
          image: ""
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "ReZult 3D Caption for hunting use type",
          description: "ReZult 3D paragraph for 3D use type",
          image: ""
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "ReZult Indoor Caption for indoor use type",
          description: "ReZult Indoor paragraph for indoor use type",
          image: ""
        }
      ],
      finishes: {
        riser: [
          rezultRiserOutdoors,
          rezultRiserRhinodize,
        ],
        limbs: [
          rezultLimbsOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 31.0\”",
          speed: "335 fps",
        },
        {
          name: "#2 – 30.5\”",
          speed: "330 fps",
        },
        {
          name: "#3 – 30.0\”",
          speed: "325 fps",
        },
        {
          name: "#4 – 29.5\”",
          speed: "320 fps",
        },
        {
          name: "#5 – 29.0\”",
          speed: "315 fps",
        },
        {
          name: "#6 – 28.5\”",
          speed: "310 fps",
        },
        {
          name: "#7 – 28.0\”",
          speed: "305 fps",
        },
        {
          name: "#8 – 27.5\”",
          speed: "300 fps",
        },
        {
          name: "#9 – 27.0\”",
          speed: "295 fps",
        },
        {
          name: "#10 – 26.5\”",
          speed: "290 fps",
        },
        {
          name: "#11 – 26.0\”",
          speed: "285 fps",
        },
        {
          name: "#12 – 25.5\”",
          speed: "280 fps",
        },
        {
          name: "#13 – 25.0\”",
          speed: "275 fps",
        },
        {
          name: "#14 – 24.5\”",
          speed: "270 fps",
        },
        {
          name: "#15 – 24.0\”",
          speed: "265 fps",
        },
      ]
    }
  });
};

const ritual35SbRiserCamo = finishTypes.ritual35RiserCamoTypes();
const ritual35SbRiserOutdoors = finishTypes.ritual35RiserOutdoorsTypes();
const ritual35SbRiserRhinodize = finishTypes.ritual35RiserRhinodizeTypes();
const ritual35SbLimbsOutdoors = finishTypes.ritual35LimbOutdoorsTypes();

module.exports.ritual35SbBow = function() {
  return new BowModel({
    placement: 0,
    modelYear: "2019",
    name: "Ritual 35 Small Base",
    skuCode: "1935sb",
    msrp: 1049.00,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual-35/ritual-35-main.png",
    modelNameUrl: "ritual-35-sb",
    logo: "",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/gltf/ritual-35.gltf",
    limbType: "split",
    techSpecs: {
      axleToAxle: "34 5/8\" +/- 1/8\"",
      brace: "6 1/8\" +/- 1/8\"",
      weight: "4.4",
      stringLength: "55 5/8\"",
      cableLength: "38 1/16\"",
      centerShot: "13/16\" to 15/16\"",
      peakWeights: ["40", "50", "60", "70"],
      drawLengths: ["24.0", "24.5", "25.0", "25.5", "26.0", "26.5", "27.0", "27.5", "28.0"],
      speedRating: 306,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Hunting",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
          caption: "35 Hunting Caption for hunting use type",
          description: "35 Hunting paragraph for hunting use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-30-larry.jpg"
        },
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "35 Field Caption for hunting use type",
          description: "35 Field paragraph for field use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-33-green.jpg"
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "35 3D Caption for hunting use type",
          description: "35 3D paragraph for 3D use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-30-biggs.jpg"
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "35 Indoor Caption for indoor use type",
          description: "35 Indoor paragraph for indoor use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-33-unger.jpg"
        }
      ],
      finishes: {
        riser: [
          ritual35SbRiserOutdoors,
          ritual35SbRiserCamo,
          ritual35SbRiserRhinodize
        ],
        limbs: [
          ritual35SbLimbsOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 28.0\”",
          speed: "316 fps",
        },
        {
          name: "#2 – 27.5\”",
          speed: "311 fps",
        },
        {
          name: "#3 – 27.0\”",
          speed: "306 fps",
        },
        {
          name: "#4 – 26.5\”",
          speed: "301 fps",
        },
        {
          name: "#5 – 26.0\”",
          speed: "296 fps",
        },
        {
          name: "#6 – 25.5\”",
          speed: "291 fps",
        },
        {
          name: "#7 – 25.0\”",
          speed: "286 fps",
        },
        {
          name: "#8 – 24.5\”",
          speed: "281 fps",
        },
        {
          name: "#9 – 24.0\”",
          speed: "276 fps",
        }
      ]
    }
  });
};

const valorRiserCamo = finishTypes.valorRiserCamoTypes();
const valorRiserOutdoors = finishTypes.valorRiserOutdoorsTypes();
const valorLimbsOutdoors = finishTypes.valorLimbOutdoorsTypes();


module.exports.valorBow = function() {
  return new BowModel({
    placement: 1,
    modelYear: "2019",
    name: "Valor",
    skuCode: "19valr",
    msrp: 749.00,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/2019/valor/images/bows/ninja-black.png",
    modelNameUrl: "valor",
    logo: "unknown",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/valor/gltf/valor.gltf",
    limbType: "split",
    techSpecs: {
      axleToAxle: "28 3/4\" +/- 1/8\"",
      brace: "6 13/16\" +/- 1/8\"",
      weight: "4.1",
      stringLength: "55 1/8\"",
      cableLength: "33 5/16\"",
      centerShot: "13/16\" to 15/16\"",
      peakWeights: ["50", "60", "70"],
      drawLengths: ["25.0", "25.5", "26.0", "26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5"],
      speedRating: 329,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Hunting",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
          caption: "Valor Hunting Caption for hunting use type",
          description: "Valor Hunting paragraph for hunting use type",
          image: ""
        },
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "Valor Field Caption for hunting use type",
          description: "Valor Field paragraph for field use type",
          image: ""
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "Valor 3D Caption for hunting use type",
          description: "Valor 3D paragraph for 3D use type",
          image: ""
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "Valor Indoor Caption for indoor use type",
          description: "Valor Indoor paragraph for indoor use type",
          image: ""
        }
      ],
      finishes: {
        riser: [
          valorRiserOutdoors,
          valorRiserCamo,
        ],
        limbs: [
          valorLimbsOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 29.5\”",
          speed: "329 fps",
        },
        {
          name: "#2 – 29.0\”",
          speed: "319 fps",
        },
        {
          name: "#3 – 28.5\”",
          speed: "314 fps",
        },
        {
          name: "#4 – 28.0\”",
          speed: "309 fps",
        },
        {
          name: "#5 – 27.5\”",
          speed: "304 fps",
        },
        {
          name: "#6 – 27.0\”",
          speed: "299 fps",
        },
        {
          name: "#7 – 26.5\”",
          speed: "294 fps",
        },
        {
          name: "#8 – 26.0\”",
          speed: "289 fps",
        },
        {
          name: "#9 – 25.5\”",
          speed: "284 fps",
        },
        {
          name: "#10 – 25.0\”",
          speed: "279 fps",
        },
      ]
    }
  });
};

const ritual30RiserCamo = finishTypes.ritual30RiserCamoTypes();
const ritual30RiserOutdoors = finishTypes.ritual30RiserOutdoorsTypes();
const ritual30RiserRhinodize = finishTypes.ritual30RiserRhinodizeTypes();
// const ritual30RiserExclusiveDecorationTypes = finishTypes.ritual30RiserExclusiveDecorationTypes();
const ritual30LimbsOutdoors = finishTypes.ritual30LimbOutdoorsTypes();


module.exports.ritual30Bow = function() {
  return new BowModel({
    placement: 3,
    modelYear: "2019",
    name: "Ritual 30",
    skuCode: "1830ri",
    msrp: 1049.00,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual-30/ritual-30-main.png",
    modelNameUrl: "ritual-30",
    logo: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/builder/ritual-30.png",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/gltf/ritual-30.gltf",
    limbType: "split",
    techSpecs: {
      axleToAxle: "30 1/2\" +/- 1/8\"",
      brace: "6 3/4\" +/- 1/8\"",
      weight: "4.1",
      stringLength: "56 13/16\"",
      cableLength: "35\"",
      centerShot: "13/16\" to 15/16\"",
      peakWeights: ["50", "60", "65", "70"],
      drawLengths: ["25.5", "26.0", "26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5", "30.0"],
      speedRating: 332,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Hunting",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
          caption: "30 Hunting Caption for hunting use type",
          description: "30 Hunting paragraph for hunting use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-30-larry.jpg"
        },
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "30 Field Caption for hunting use type",
          description: "30 Field paragraph for field use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-33-green.jpg"
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "30 3D Caption for hunting use type",
          description: "30 3D paragraph for 3D use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-30-biggs.jpg"
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "30 Indoor Caption for indoor use type",
          description: "30 Indoor paragraph for indoor use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-33-unger.jpg"
        }
      ],
      finishes: {
        riser: [
          ritual30RiserOutdoors,
          ritual30RiserCamo,
          // ritual30RiserExclusiveDecorationTypes,
          ritual30RiserRhinodize
        ],
        limbs: [
          ritual30LimbsOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 30.0\”",
          speed: "332 fps",
        },
        {
          name: "#2 – 29.5\”",
          speed: "327 fps",
        },
        {
          name: "#3 – 29.0\”",
          speed: "322 fps",
        },
        {
          name: "#4 – 28.5\”",
          speed: "317 fps",
        },
        {
          name: "#5 – 28.0\”",
          speed: "312 fps",
        },
        {
          name: "#6 – 27.5\”",
          speed: "307 fps",
        },
        {
          name: "#7 – 27.0\”",
          speed: "302 fps",
        },
        {
          name: "#8 – 26.5\”",
          speed: "297 fps",
        },
        {
          name: "#9 – 26.0\”",
          speed: "292 fps",
        },
        {
          name: "#10 – 25.5\”",
          speed: "287 fps",
        },
      ]
    }
  });
};

const ritual33RiserCamo = finishTypes.ritual33RiserCamoTypes();
const ritual33RiserOutdoors = finishTypes.ritual33RiserOutdoorsTypes();
const ritual33RiserRhinodize = finishTypes.ritual33RiserRhinodizeTypes();
const ritual33LimbsOutdoors = finishTypes.ritual33LimbOutdoorsTypes();

module.exports.ritual33Bow = function() {
  return new BowModel({
    placement: 4,
    modelYear: "2019",
    name: "Ritual 33",
    skuCode: "18ritl",
    msrp: 1049,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-main.jpg",
    modelNameUrl: "ritual-33",
    limbType: "split",
    logo: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/builder/ritual-33.png",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/gltf/ritual.gltf",
    techSpecs: {
      axleToAxle: "33 1/4\" +/- 1/8\"",
      brace: "6 3/4\" +/- 1/8\"",
      weight: "4.3",
      stringLength: "59 1/2\"",
      cableLength: "37 5/8\"",
      centerShot: "13/16\" to 15/16\"",
      peakWeights: ["50", "60", "65", "70"],
      drawLengths: ["26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5", "30.0", "30.5", "31.0"],
      speedRating: 335,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Hunting",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
          caption: "33 Hunting Caption for hunting use type",
          description: "33 Hunting paragraph for hunting use type",
          image: ""
        },
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "33 Field Caption for hunting use type",
          description: "33 Field paragraph for field use type",
          image: ""
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "33 3D Caption for hunting use type",
          description: "33 3D paragraph for 3D use type",
          image: ""
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "33 Indoor Caption for indoor use type",
          description: "33 Indoor paragraph for indoor use type",
          image: ""
        }
      ],
      finishes: {
        riser: [
          ritual33RiserOutdoors,
          ritual33RiserCamo,
          ritual33RiserRhinodize
        ],
        limbs: [
          ritual33LimbsOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 31.0\”",
          speed: "345 fps",
        },
        {
          name: "#2 – 30.5\”",
          speed: "340 fps",
        },
        {
          name: "#3 – 30.0\”",
          speed: "335 fps",
        },
        {
          name: "#4 – 29.5\”",
          speed: "330 fps",
        },
        {
          name: "#5 – 29.0\”",
          speed: "325 fps",
        },
        {
          name: "#6 – 28.5\”",
          speed: "320 fps",
        },
        {
          name: "#7 – 28.0\”",
          speed: "315 fps",
        },
        {
          name: "#8 – 27.5\”",
          speed: "310 fps",
        },
        {
          name: "#9 – 27.0\”",
          speed: "305 fps",
        },
        {
          name: "#10 – 26.5\”",
          speed: "300 fps",
        },
      ]
    }
  });
};

// const ritual35RiserExclusiveDecorationTypes = finishTypes.ritual35RiserExclusiveDecorationTypes();
const ritual35RiserCamo = finishTypes.ritual35RiserCamoTypes();
const ritual35RiserOutdoors = finishTypes.ritual35RiserOutdoorsTypes();
const ritual35RiserRhinodize = finishTypes.ritual35RiserRhinodizeTypes();
const ritual35LimbsOutdoors = finishTypes.ritual35LimbOutdoorsTypes();

module.exports.ritual35Bow = function() {
  return new BowModel({
    placement: 2,
    modelYear: "2019",
    name: "Ritual 35",
    skuCode: "1935ri",
    msrp: 1049.00,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual-35/ritual-35-main.png",
    modelNameUrl: "ritual-35",
    logo: "",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/gltf/ritual-35.gltf",
    limbType: "split",
    techSpecs: {
      axleToAxle: "34 3/4\" +/- 1/8\"",
      brace: "6 7/16\" +/- 1/8\"",
      weight: "4.4",
      stringLength: "61\"",
      cableLength: "39 1/4\"",
      centerShot: "13/16\" to 15/16\"",
      peakWeights: ["50", "60", "65", "70"],
      drawLengths: ["26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5", "30.0", "30.5", "31.0"],
      speedRating: 336,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Hunting",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
          caption: "35 Hunting Caption for hunting use type",
          description: "35 Hunting paragraph for hunting use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-30-larry.jpg"
        },
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "35 Field Caption for hunting use type",
          description: "35 Field paragraph for field use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-33-green.jpg"
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "35 3D Caption for hunting use type",
          description: "35 3D paragraph for 3D use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-30-biggs.jpg"
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "35 Indoor Caption for indoor use type",
          description: "35 Indoor paragraph for indoor use type",
          image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-33-unger.jpg"
        }
      ],
      finishes: {
        riser: [
          ritual35RiserOutdoors,
          ritual35RiserCamo,
          // ritual35RiserExclusiveDecorationTypes,
          ritual35RiserRhinodize
        ],
        limbs: [
          ritual35LimbsOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 31.0\”",
          speed: "346 fps",
        },
        {
          name: "#2 – 30.5\”",
          speed: "341 fps",
        },
        {
          name: "#3 – 30.0\”",
          speed: "336 fps",
        },
        {
          name: "#4 – 29.5\”",
          speed: "331 fps",
        },
        {
          name: "#5 – 29.0\”",
          speed: "326 fps",
        },
        {
          name: "#6 – 28.5\”",
          speed: "321 fps",
        },
        {
          name: "#7 – 28.0\”",
          speed: "316 fps",
        },
        {
          name: "#8 – 27.5\”",
          speed: "311 fps",
        },
        {
          name: "#9 – 27.0\”",
          speed: "306 fps",
        },
        {
          name: "#10 – 26.5\”",
          speed: "301 fps",
        },
      ]
    }
  });
};

const victoryXRiserOutdoors = finishTypes.victoryXRiserOutdoorsTypes();
const victoryXRiserRhinodize = finishTypes.victoryXRiserRhinodizeTypes();
const victoryXLimbOutdoors = finishTypes.victoryXLimbOutdoorsTypes();

module.exports.victoryXBow = function() {
  return new BowModel({
    placement: 6,
    modelYear: "2019",
    name: "victory-x",
    skuCode: "18vctx",
    msrp: 949,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victory_x_cobaltblue.png",
    modelNameUrl: "victory-x",
    limbType: "solid",
    logo: "",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/victoryx/gltf/victoryx.gltf",
    techSpecs: {
      axleToAxle: "37 +/- 1/8\"",
      brace: "6 3/4\" +/- 1/8\"",
      weight: "4.4",
      stringLength: "61 1/4\"",
      cableLength: "42 5/8\"",
      centerShot: "3/4\" to 7/8\"",
      peakWeights: ["50", "60", "70"],
      drawLengths: ["26.0", "26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5", "30.0", "30.5", "31.0"],
      speedRating: 327,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "Victory X Field Caption for hunting use type",
          description: "Victory X Field paragraph for field use type",
          image: "https://s3.amazonaws.com/elite-website/2019/victoryx/series-images/slider-victory-x-gomez.jpg"
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "Victory X 3D Caption for hunting use type",
          description: "Victory X paragraph for 3D use type",
          image: "https://s3.amazonaws.com/elite-website/2019/victoryx/series-images/slider-victory-x-nathan.jpg"
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "Victory X Indoor Caption for indoor use type",
          description: "Victory X Indoor paragraph for indoor use type",
          image: "https://s3.amazonaws.com/elite-website/2019/victoryx/series-images/slider-victory-x-purple.jpg"
        }
      ],
      finishes: {
        riser: [
          victoryXRiserOutdoors,
          victoryXRiserRhinodize
        ],
        limbs: [
          victoryXLimbOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 31.0\”",
          speed: "337 fps",
        },
        {
          name: "#2 – 30.5\”",
          speed: "332 fps",
        },
        {
          name: "#3 – 30.0\”",
          speed: "327 fps",
        },
        {
          name: "#4 – 29.5\”",
          speed: "322 fps",
        },
        {
          name: "#5 – 29.0\”",
          speed: "317 fps",
        },
        {
          name: "#6 – 28.5\”",
          speed: "312 fps",
        },
        {
          name: "#7 – 28.0\”",
          speed: "307 fps",
        },
        {
          name: "#8 – 27.5\”",
          speed: "302 fps",
        },
        {
          name: "#9 – 27.0\”",
          speed: "297 fps",
        },
        {
          name: "#10 – 26.5\”",
          speed: "292 fps",
        },
        {
          name: "#11 – 26.0\”",
          speed: "287 fps",
        },
      ]
    }
  });
};

const echelon37RiserOutdoors = finishTypes.echelon37RiserOutdoorsTypes();
const echelon37RiserRhinodize = finishTypes.echelon37RiserRhinodizeTypes();
const echelon37LimbOutdoors = finishTypes.echelon37LimbOutdoorsTypes();

module.exports.echelon37Bow = function() {
  return new BowModel({
    placement: 7,
    modelYear: "2019",
    name: "Echelon 37",
    skuCode: "1837ec",
    msrp: 1399,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon_37_graphitegray.png",
    modelNameUrl: "echelon-37",
    limbType: "split",
    logo: "unknown",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/gltf/echelon-37.gltf",
    techSpecs: {
      axleToAxle: "37 +/- 1/8\"",
      brace: "6 3/4\" +/- 1/8\"",
      weight: "4.6",
      stringLength: "61\"",
      cableLength: "42 1/8\"",
      centerShot: "13/16\" to 15/16\"",
      peakWeights: ["50", "60", "65", "70"],
      drawLengths: ["26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5", "30.0", "30.5", "31.0"],
      speedRating: 333,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "Echelon 37 Field Caption for hunting use type",
          description: "Echelon 37 Field paragraph for field use type",
          image: "https://s3.amazonaws.com/elite-website/2019/echelon/series-images/slider-echelon-chance.jpg"
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "Echelon 37 3D Caption for hunting use type",
          description: "Echelon 37 3D paragraph for 3D use type",
          image: "https://s3.amazonaws.com/elite-website/2019/echelon/series-images/slider-echelon-closeup.jpg"
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "Echelon 37 Indoor Caption for indoor use type",
          description: "Echelon 37 Indoor paragraph for indoor use type",
          image: "https://s3.amazonaws.com/elite-website/2019/echelon/series-images/slider-echelon-darrin.jpg"
        }
      ],
      finishes: {
        riser: [
          echelon37RiserOutdoors,
          echelon37RiserRhinodize
        ],
        limbs: [
          echelon37LimbOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 31.0\”",
          speed: "343 fps",
        },
        {
          name: "#2 – 30.5\”",
          speed: "338 fps",
        },
        {
          name: "#3 – 30.0\”",
          speed: "333 fps",
        },
        {
          name: "#4 – 29.5\”",
          speed: "328 fps",
        },
        {
          name: "#5 – 29.0\”",
          speed: "323 fps",
        },
        {
          name: "#6 – 28.5\”",
          speed: "318 fps",
        },
        {
          name: "#7 – 28.0\”",
          speed: "313 fps",
        },
        {
          name: "#8 – 27.5\”",
          speed: "308 fps",
        },
        {
          name: "#9 – 27.0\”",
          speed: "303 fps",
        },
        {
          name: "#10 – 26.5\”",
          speed: "298 fps",
        },
      ]
    }
  });
};

const echelon39RiserOutdoors = finishTypes.echelon39RiserOutdoorsTypes();
const echelon39RiserRhinodize = finishTypes.echelon39RiserRhinodizeTypes();
const echelon39LimbOutdoors = finishTypes.echelon39LimbOutdoorsTypes();

module.exports.echelon39Bow = function() {
  return new BowModel({
    placement: 8,
    modelYear: "2019",
    name: "Echelon 39",
    skuCode: "1839ec",
    msrp: 1399,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon39/echelon_39_copperflame.png",
    modelNameUrl: "echelon-39",
    limbType: "split",
    logo: "unknown",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/gltf/echelon-39.gltf",
    techSpecs: {
      axleToAxle: "38 3/4\" +/- 1/8\"",
      brace: "7 1/8\" +/- 1/8\"",
      weight: "4.7",
      stringLength: "62 7/8\"",
      cableLength: "43 3/4\"",
      centerShot: "13/16\" to 15/16\"",
      peakWeights: ["50", "60", "70"],
      drawLengths: ["27.5", "28.0", "28.5", "29.0", "29.5", "30.0", "30.5", "31.0", "31.5", "32.0"],
      speedRating: 326,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "Echelon 39 Field Caption for hunting use type",
          description: "Echelon 39 Field paragraph for field use type",
          image: ""
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "Echelon 39 3D Caption for hunting use type",
          description: "Echelon 39 3D paragraph for 3D use type",
          image: ""
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "Echelon 39 Indoor Caption for indoor use type",
          description: "Echelon 39 Indoor paragraph for indoor use type",
          image: ""
        }
      ],
      finishes: {
        riser: [
          echelon39RiserOutdoors,
          echelon39RiserRhinodize
        ],
        limbs: [
          echelon39LimbOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 32.0\”",
          speed: "346 fps",
        },
        {
          name: "#2 – 31.5\”",
          speed: "341 fps",
        },
        {
          name: "#3 – 31.0\”",
          speed: "336 fps",
        },
        {
          name: "#4 – 30.5\”",
          speed: "331 fps",
        },
        {
          name: "#5 – 30.0\”",
          speed: "326 fps",
        },
        {
          name: "#6 – 29.5\”",
          speed: "321 fps",
        },
        {
          name: "#7 – 29.0\”",
          speed: "316 fps",
        },
        {
          name: "#8 – 28.5\”",
          speed: "311 fps",
        },
        {
          name: "#9 – 28.0\”",
          speed: "306 fps",
        },
        {
          name: "#10 – 27.5\”",
          speed: "301 fps",
        },
      ]
    }
  });
};


const revolXlRiserCamo = finishTypes.revolXlRiserCamoTypes();
const revolXlRiserOutdoors = finishTypes.revolXlRiserOutdoorsTypes();
const revolXlRiserRhinodize = finishTypes.revolXlRiserRhinodizeTypes();
const revolXlLimbOutdoors = finishTypes.revolXlLimbOutdoorsTypes();

module.exports.revolXlBow = function() {
  return new BowModel({
    placement: 5,
    modelYear: "2019",
    name: "Revol XL",
    skuCode: "19rvxl",
    msrp: 1099,
    bowListImagePath: "https://s3.amazonaws.com/elite-website/2019/revol/revolXL/images/bows/revol-xl-ninja-black.png",
    modelNameUrl: "revol-xl",
    limbType: "split",
    logo: "unknown",
    cadPath: "https://s3.amazonaws.com/elite-website/2019/revol/revolXL/gltf/revolXL.gltf",
    techSpecs: {
      axleToAxle: "36 1/8\" +/- .125\"",
      brace: "7 5/8\" +/- .125\"",
      weight: "4.4",
      stringLength: "60 1/4\"",
      cableLength: "41\"",
      centerShot: "13/16\" to 15/16\"",
      peakWeights: ["60", "70"],
      drawLengths: ["27.5", "28.0", "28.5", "29.0", "29.5", "30.0", "30.5", "31.0", "31.5", "32.0"],
      speedRating: 317,
      letOff: "90% - 75%",
      useTypes: [
        {
          name: "Hunting",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
          caption: "Revol XL Hunting Caption for hunting use type",
          description: "Revol XL Hunting paragraph for hunting use type",
          image: "https://s3.amazonaws.com/elite-website/2019/revol/series-images/slider-revol-1.jpg"
        },
        {
          name: "Field",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
          caption: "Revol XL Field Caption for hunting use type",
          description: "Revol XL Field paragraph for field use type",
          image: "https://s3.amazonaws.com/elite-website/2019/revol/series-images/slider-revol-2.jpg"
        },
        {
          name: "3D",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
          caption: "Revol XL 3D Caption for hunting use type",
          description: "Revol XL 3D paragraph for 3D use type",
          image: "https://s3.amazonaws.com/elite-website/2019/revol/series-images/slider-revol-3.jpg"
        },
        {
          name: "Indoor",
          icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg",
          caption: "Revol XL Indoor Caption for indoor use type",
          description: "Revol XL Indoor paragraph for indoor use type",
          image: "https://s3.amazonaws.com/elite-website/2019/revol/series-images/slider-revol-4.jpg"
        }
      ],
      finishes: {
        riser: [
          revolXlRiserOutdoors,
          revolXlRiserCamo,
          revolXlRiserRhinodize
        ],
        limbs: [
          revolXlLimbOutdoors
        ]
      },
      mods: [
        {
          name: "#1 – 32.0\”",
          speed: "332 fps",
        },
        {
          name: "#2 – 31.5\”",
          speed: "328 fps",
        },
        {
          name: "#3 – 31.0\”",
          speed: "325 fps",
        },
        {
          name: "#4 – 30.5\”",
          speed: "321 fps",
        },
        {
          name: "#5 – 30.0\”",
          speed: "317 fps",
        },
        {
          name: "#6 – 29.5\”",
          speed: "313 fps",
        },
        {
          name: "#7 – 29.0\”",
          speed: "309 fps",
        },
        {
          name: "#8 – 28.5\”",
          speed: "305 fps",
        },
        {
          name: "#9 – 28.0\”",
          speed: "300 fps",
        },
        {
          name: "#10 – 27.5\”",
          speed: "296 fps",
        },
      ]
    }
  });
};
