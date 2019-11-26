const mongoose = require('mongoose');
const ColorFinishSchema = require('../../models/colors/color-finish');

const ColorFinish = mongoose.model('ColorFinish', ColorFinishSchema);


// Realtree

module.exports.realTreeXtra = function() {
  return new ColorFinish({
      colorName: "XTRA",
      skuCode: "rx",
      swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-xtra.png",
      patternName: "Xtra"
    });
};

module.exports.realTreeMax = function() {
  return new ColorFinish({
    colorName: "MAX-1",
    skuCode: "mx",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-max.png",
    patternName: "Max"
  });
};

module.exports.realTreeSnow = function() {
  return new ColorFinish({
    colorName: "SNOW",
    skuCode: "sn",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-snow.png",
    patternName: "Snow"
  });
};

module.exports.realTreeEdge = function() {
  return new ColorFinish({
    "colorName": "EDGE",
    "skuCode": "ed",
    "swatchUrl": "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-edge.png",
    "patternName": "Edge"
  });
}

module.exports.realTreeXcape = function() {
  return new ColorFinish({
    "colorName": "XCAPE",
    "skuCode": "xp",
    "swatchUrl": "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-xcape.jpg",
    "patternName": "Xcape"
  });
}

// KUIU

module.exports.kuiuVerde = function() {
  return new ColorFinish({
    colorName: "Verde",
    skuCode: "vr",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/kuiu-verde.png",
    patternName: "Verde"
  });
};

module.exports.kuiuVias = function() {
  return new ColorFinish({
    colorName: "Vias",
    skuCode: "vs",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/kuiu-vias.png",
    patternName: "Vias"
  });
};

// Mossy Oak

module.exports.mossyOakBreakUpCountry = function() {
  return new ColorFinish({
    colorName: "Break-Up Country",
    skuCode: "bu",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/mossy-oak-break-up.jpg",
    patternName: "Break-Up Country"
  });
};

module.exports.mossyOakMountainCountry = function() {
  return new ColorFinish({
    colorName: "Mountain Country",
    skuCode: "mc",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/mossy-oak-mountain-country.jpg",
    patternName: "Mountain Country"
  });
};

// custom decorations

module.exports.whiteOut = function() {
  return new ColorFinish({
    colorName: "Whiteout",
    skuCode: "wo",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/white-out.jpg"
  });
}

module.exports.greenMantis = function() {
  return new ColorFinish({
    colorName: "Green Mantis",
    skuCode: "mg",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/green-mantis.jpg"
  });
}

// Outdoors

module.exports.ninjaBlack = function() {
  return new ColorFinish({
    colorName: "Ninja Black",
    skuCode: "at",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/outdoors-colors/black.jpg",
    patternName: "Ninja Black"
  });
};

module.exports.hardwoodsBrown = function() {
  return new ColorFinish({
    colorName: "Hardwoods Brown",
    skuCode: "br",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/outdoors-colors/OD+Brown.png",
    patternName: "OD Brown"
  });
};

module.exports.oliveGreen = function() {
  return new ColorFinish({
    colorName: "Olive Green",
    skuCode: "gr",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/outdoors-colors/OD+Green.png",
    patternName: "OD Green"
  });
};

// Rhinodize

module.exports.graphiteGray = function() {
  return new ColorFinish({
    colorName: "Graphite Gray",
    skuCode: "gg",
    swatchUrl:  "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Graphite+Gray.png",
    patternName: "Graphite Gray"
  });
};

module.exports.purpleRain = function() {
  return new ColorFinish({
    colorName: "Purple Rain",
    skuCode: "pu",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Purple+Rain.png",
    patternName: "Purple Rain"
  });
};

module.exports.emeraldGreen = function() {
  return new ColorFinish({
    colorName: "Emerald Green",
    skuCode: "eg",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Emerald+Green.png",
    patternName: "Emerald Green"
  });
};

module.exports.surgeRed = function() {
  return new ColorFinish({
    colorName: "Surge Red",
    skuCode: "su",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Surge+Red.png",
    patternName: "Surge Red"
  });
};

module.exports.cobaltBlue = function() {
  return new ColorFinish({
    colorName: "Cobalt Blue",
    skuCode: "cb",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Cobalt+Blue.png",
    patternName: "Cobalt Blue"
  });
};

module.exports.copperFlame = function() {
  return new ColorFinish({
    colorName: "Copper Flame",
    skuCode: "cp",
    swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Copper+Flame.png",
    patternName: "Copper Flame"
  });
};

module.exports.sunsetPink = function() {
  return new ColorFinish({
    colorName: "Sunset Pink",
    skuCode: "sk",
    swatchUrl:  "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Sunset+Pink.png",
    patternName: "Sunset Pink"
  });
};

module.exports.silverAlloy = function() {
  return new ColorFinish({
    colorName: "Silver Alloy",
    skuCode: "sy",
    swatchUrl:  "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Silver+Alloy.jpg",
    patternName: "Silver Alloy"
  });
};

module.exports.sourApple = function() {
  return new ColorFinish({
    colorName: "Sour Apple",
    skuCode: "sp",
    swatchUrl:  "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Sour+Apple.jpg",
    patternName: "Sour Apple"
  });
};

module.exports.lagunaTeal = function() {
  return new ColorFinish({
    colorName: "Laguna Teal",
    skuCode: "lt",
    swatchUrl:  "https://s3.amazonaws.com/elite-website/v2/images/rhinodize-colors/Laguna+Teal.jpg",
    patternName: "Laguna Teal"
  });
};