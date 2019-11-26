const mongoose = require('mongoose');
const BrandFinishSchema = require('../../models/colors/brand-finish');
const BrandFinish = mongoose.model('BrandFinish', BrandFinishSchema);

const colorFinishes = require('./colors-seed');

const realTreeXtra = colorFinishes.realTreeXtra();
const realTreeMax = colorFinishes.realTreeMax();
const realTreeSnow = colorFinishes.realTreeSnow();
const realTreeEdge = colorFinishes.realTreeEdge();
const realTreeXcape = colorFinishes.realTreeXcape(); //new

const kuiuVerde = colorFinishes.kuiuVerde();
const kuiuVias = colorFinishes.kuiuVias();

const mossyOakBreakUpCountry = colorFinishes.mossyOakBreakUpCountry();
const mossyOakMountainCountry = colorFinishes.mossyOakMountainCountry();

const whiteOut = colorFinishes.whiteOut();
const greenMantis = colorFinishes.greenMantis();

const ninjaBlack = colorFinishes.ninjaBlack();
const hardwoodsBrown = colorFinishes.hardwoodsBrown();
const oliveGreen = colorFinishes.oliveGreen();

const graphiteGray = colorFinishes.graphiteGray()
const purpleRain = colorFinishes.purpleRain();
const emeraldGreen = colorFinishes.emeraldGreen();
const surgeRed = colorFinishes.surgeRed();
const cobaltBlue = colorFinishes.cobaltBlue();
const copperFlame = colorFinishes.copperFlame();
const sunsetPink = colorFinishes.sunsetPink();

const silverAlloy = colorFinishes.silverAlloy(); //new
const sourApple = colorFinishes.sourApple(); //new
const lagunaTeal = colorFinishes.lagunaTeal(); //new

module.exports.kureRealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeEdge, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/realtree-edge.png"},
      {color: realTreeXcape, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/realtree-xcape.png"},
    ]
  });
};
module.exports.kureKuiu = function() {
  return new BrandFinish({
    name: "KUIU",
    type: "camo",
    finishes: [
      {color: kuiuVerde, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/kuiu-verde.png"},
    ]
  });
};
module.exports.kureOutdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/ninja-black.png"},
      {color: hardwoodsBrown, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/hardwoods-brown.png"},
      {color: oliveGreen, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/olive-green.png"},
    ]
  });
};
module.exports.kureRhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/graphite-gray.png"},
      {color: purpleRain, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/purple-rain.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/cobalt-blue.png"},
      {color: copperFlame, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/copper-flame.png"},
      {color: silverAlloy, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/silver-alloy.png"},
      {color: sourApple, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/sour-apple.png"},
      {color: lagunaTeal, image: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/laguna-teal.png"},
    ]
  });
};

module.exports.rezultOutdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/ninja-black.png"}
    ]
  });
};
module.exports.rezultRhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/graphite-gray.png"},
      {color: purpleRain, image: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/purple-rain.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/cobalt-blue.png"},
      {color: copperFlame, image: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/copper-flame.png"},
      {color: silverAlloy, image: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/silver-alloy.png"},
      {color: sourApple, image: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/sour-apple.png"},
      {color: lagunaTeal, image: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/laguna-teal.png"},
    ]
  });
};

module.exports.valorRealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeEdge, image: "https://s3.amazonaws.com/elite-website/2019/valor/images/bows/realtree-edge.png"}
    ]
  });
};
module.exports.valorOutdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2019/valor/images/bows/ninja-black.png"}
    ]
  });
};

module.exports.ritual30RealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeMax, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/realtree-max-1.png"},
      {color: realTreeSnow, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/realtree-snow.png"},
      {color: realTreeEdge, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/realtree-edge.png"}
    ]
  });
};
module.exports.ritual30Kuiu = function() {
  return new BrandFinish({
    name: "KUIU",
    type: "camo",
    finishes: [
      {color: kuiuVerde, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/kuiu-verde.png"},
      {color: kuiuVias, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/kuiu-vias.png"}
    ]
  });
};
module.exports.ritual30MossyOak = function() {
  return new BrandFinish({
    name: "Mossy Oak",
    type: "camo",
    finishes: [
      {color: mossyOakBreakUpCountry, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/mossy-oak-breakup-country.png"},
      {color: mossyOakMountainCountry, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/mossy-oak-mountain-country.png"}
    ]
  });
};

module.exports.ritual30ExclusiveDecoration = function() {
  return new BrandFinish({
    name: "Exclusive Decoration",
    type: "camo",
    finishes: [
      {color: greenMantis, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/green-mantis-bow.jpg"},
    ]
  });
};

module.exports.ritual30Outdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/ninja-black.png"},
      {color: hardwoodsBrown, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/hardwoods-brown.png"},
      {color: oliveGreen, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/olive-green.png"}
    ]
  });
};
module.exports.ritual30Rhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/graphite-gray.png"},
      {color: purpleRain, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/purple-rain.png"},
      {color: emeraldGreen, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/emerald-green.png"},
      {color: surgeRed, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/surge-red.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/cobalt-blue.png"},
      {color: copperFlame, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/copper-flame.png"},
      {color: sunsetPink, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/sunset-pink.png"}
    ]
  });
};


module.exports.ritual33RealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeMax, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/realtree-max-1.png"},
      {color: realTreeSnow, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/realtree-snow.png"},
      {color: realTreeEdge, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/realtree-edge.png"}
    ]
  });
};
module.exports.ritual33Kuiu = function() {
  return new BrandFinish({
    name: "KUIU",
    type: "camo",
    finishes: [
      {color: kuiuVerde, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/kuiu-verde.png"},
      {color: kuiuVias, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/kuiu-vias.png"}
    ]
  });
};
module.exports.ritual33MossyOak = function() {
  return new BrandFinish({
    name: "Mossy Oak",
    type: "camo",
    finishes: [
      {color: mossyOakBreakUpCountry, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/mossy-oak-breakup-country.png"},
      {color: mossyOakMountainCountry, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/mossy-oak-mountain-country.png"}
    ]
  });
};
module.exports.ritual33Outdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/ninja-black.png"},
      {color: hardwoodsBrown, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/hardwoods-brown.png"},
      {color: oliveGreen, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/olive-green.png"}
    ]
  });
};
module.exports.ritual33Rhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/graphite-gray.png"},
      {color: purpleRain, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/purple-rain.png"},
      {color: emeraldGreen, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/emerald-green.png"},
      {color: surgeRed, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/surge-red.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/cobalt-blue.png"},
      {color: copperFlame, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/copper-flame.png"},
      {color: sunsetPink, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/sunset-pink.png"}
    ]
  });
};

module.exports.ritual35ExclusiveDecoration = function() {
  return new BrandFinish({
    name: "Exclusive Decoration",
    type: "camo",
    finishes: [
      {color: whiteOut, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/whiteout.png"},
    ]
  });
};

module.exports.ritual35RealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeMax, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/realtree-max-1.png"},
      {color: realTreeSnow, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/realtree-snow.png"},
      {color: realTreeEdge, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/realtree-edge.png"}
    ]
  });
};
module.exports.ritual35Kuiu = function() {
  return new BrandFinish({
    name: "KUIU",
    type: "camo",
    finishes: [
      {color: kuiuVerde, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/kuiu-verde.png"},
      {color: kuiuVias, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/kuiu-vias.png"}
    ]
  });
};
module.exports.ritual35MossyOak = function() {
  return new BrandFinish({
    name: "Mossy Oak",
    type: "camo",
    finishes: [
      {color: mossyOakBreakUpCountry, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/mossy-oak-breakup-country.png"},
      {color: mossyOakMountainCountry, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/mossy-oak-mountain-country.png"}
    ]
  });
};
module.exports.ritual35Outdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/ninja-black.png"},
      {color: hardwoodsBrown, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/hardwoods-brown.png"},
      {color: oliveGreen, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/olive-green.png"}
    ]
  });
};
module.exports.ritual35Rhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/graphite-gray.png"},
      {color: purpleRain, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/purple-rain.png"},
      {color: emeraldGreen, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/emerald-green.png"},
      {color: surgeRed, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/surge-red.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/cobalt-blue.png"},
      {color: copperFlame, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/copper-flame.png"},
      {color: sunsetPink, image: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-35/images/bows/sunset-pink.png"}
    ]
  });
};

module.exports.victoryXOutdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2019/victoryx/images/bows/victory-x-ninja-black.png"}
    ]
  });
};
module.exports.victoryXRhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2019/victoryx/images/bows/victory-x-graphite-gray.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2019/victoryx/images/bows/victory-x-cobalt-blue.png"}
    ]
  });
};


module.exports.echelon37Outdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/ninja-black.png"}
    ]
  });
};
module.exports.echelon37Rhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/graphite-gray.png"},
      {color: purpleRain, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/purple-rain.png"},
      {color: emeraldGreen, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/emerald-green.png"},
      {color: surgeRed, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/surge-red.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/cobalt-blue.png"},
      {color: copperFlame, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/copper-flame.png"},
      {color: sunsetPink, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/sunset-pink.png"}
    ]
  });
};

module.exports.echelon39Outdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/ninja-black.png"}
    ]
  });
};
module.exports.echelon39Rhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/graphite-gray.png"},
      {color: purpleRain, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/purple-rain.png"},
      {color: emeraldGreen, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/emerald-green.png"},
      {color: surgeRed, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/surge-red.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/cobalt-blue.png"},
      {color: copperFlame, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/copper-flame.png"},
      {color: sunsetPink, image: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/sunset-pink.png"}
    ]
  });
};

module.exports.enlistOutdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "outdoor",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/enlist/enlist-blk.jpg"}
    ]
  });
};
module.exports.enlistMossyOak = function() {
  return new BrandFinish({
    name: "Mossy Oak",
    type: "camo",
    finishes: [
      {color: mossyOakBreakUpCountry, image: null}
    ]
  });
};

module.exports.revolRealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeXtra, image: null},
      {color: realTreeMax, image: null},
      {color: realTreeSnow, image: null}
    ]
  });
};
module.exports.revolKuiu = function() {
  return new BrandFinish({
    name: "KUIU",
    type: "camo",
    finishes: [
      {color: kuiuVerde, image: null},
      {color: kuiuVias, image: null}
    ]
  });
};
module.exports.revolOutdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/images/2017-bows/revol.png"},
      {color: hardwoodsBrown, image: null},
      {color: oliveGreen, image: null}
    ]
  });
};
module.exports.revolRhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: null},
      {color: purpleRain, image: null},
      {color: emeraldGreen, image: null},
      {color: surgeRed, image: null},
      {color: cobaltBlue, image: null},
      {color: copperFlame, image: null},
      {color: sunsetPink, image: null},
    ]
  });
};

module.exports.revolXlRealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeEdge, image: "https://s3.amazonaws.com/elite-website/2019/revol/revolXL/images/bows/revol-xl-realtree-edge.png"}
    ]
  });
};
module.exports.revolXlOutdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/2019/revol/revolXL/images/bows/revol-xl-ninja-black.png"}
    ]
  });
};
module.exports.revolXlRhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: "https://s3.amazonaws.com/elite-website/2019/revol/revolXL/images/bows/revol-xl-graphite-gray.png"},
      {color: cobaltBlue, image: "https://s3.amazonaws.com/elite-website/2019/revol/revolXL/images/bows/revol-xl-cobalt-blue.png"}
    ]
  });
};


module.exports.tempoRealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeXtra, image: null},
      {color: realTreeMax, image: null},
      {color: realTreeSnow, image: null}
    ]
  })
};
module.exports.tempoMossyOak = function() {
  return new BrandFinish({
    name: "Mossy Oak",
    type: "camo",
    finishes: [
      {color: mossyOakBreakUpCountry, image: null},
      {color: mossyOakMountainCountry, image: null}
    ]
  });
};
module.exports.tempoOutdoors = function() {
  return new BrandFinish({
    name: "Outdoor",
    type: "hunting",
    finishes: [
      {color: ninjaBlack, image: "https://s3.amazonaws.com/elite-website/images/2017-bows/tempo-bk.png"},
      {color: hardwoodsBrown, image: null},
    ]
  });
};
module.exports.tempoRhinodize = function() {
  return new BrandFinish({
    name: "Rhinodize",
    type: "target",
    finishes: [
      {color: graphiteGray, image: null}
    ]
  });
};
