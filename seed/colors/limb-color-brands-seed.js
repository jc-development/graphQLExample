const mongoose = require('mongoose');
const BrandFinishSchema = require('../../models/colors/brand-finish');
const BrandFinish = mongoose.model('BrandFinish', BrandFinishSchema);

const colorFinishes = require('./colors-seed');

const realTreeXtra = colorFinishes.realTreeXtra();
const realTreeMax = colorFinishes.realTreeMax();
const realTreeSnow = colorFinishes.realTreeSnow();
const realTreeEdge = colorFinishes.realTreeEdge();
const realTreeXcape = colorFinishes.realTreeXcape();

const kuiuVerde = colorFinishes.kuiuVerde();
const kuiuVias = colorFinishes.kuiuVias();


const mossyOakBreakUpCountry = colorFinishes.mossyOakBreakUpCountry();
const mossyOakMountainCountry = colorFinishes.mossyOakMountainCountry();


const ninjaBlack = colorFinishes.ninjaBlack();
const hardwoodsBrown = colorFinishes.hardwoodsBrown();
const oliveGreen = colorFinishes.oliveGreen();


module.exports.kureOutdoors = function() {
  return new BrandFinish({
    name: "Outdoors",
    type: "hunting",
    finishes: [ {color: ninjaBlack, image: null} ]
  });
};

module.exports.kureRealTree = function() {
  return new BrandFinish({
    name: "Realtree",
    type: "camo",
    finishes: [
      {color: realTreeEdge, image: null},
      {color: realTreeXcape, image: null},
    ]
  });
};

module.exports.kureKuiu = function() {
  return new BrandFinish({
    name: "KUIU",
    type: "camo",
    finishes: [
      {color: kuiuVerde, image: null},
    ]
  });
}

module.exports.rezultOutdoors = function() {
  return new BrandFinish({
    name: "Outdoors",
    type: "hunting",
    finishes: [ {color: ninjaBlack, image: null} ]
  });
};

module.exports.valorOutdoors = function() {
  return new BrandFinish({
    name: "Outdoors",
    type: "hunting",
    finishes: [ {color: ninjaBlack, image: null} ]
  });
};

module.exports.ritual30Outdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.ritual33Outdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.ritual35Outdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.victoryXOutdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.echelon37Outdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.echelon39Outdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.enlistOutdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.revolOutdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.revolXlOutdoors = function() {
  return new BrandFinish({
    name: "Outdoors",
    type: "hunting",
    finishes: [ {color: ninjaBlack, image: null} ]
  });
};


module.exports.tempoOutdoors = function() {
   return new BrandFinish({
     name: "Outdoors",
     type: "hunting",
     finishes: [ {color: ninjaBlack, image: null} ]
   });
};

module.exports.tempoMossyOak = function() {
   return new BrandFinish({
     name: "Mossy Oak",
     type: "camo",
     finishes: [
       {color: mossyOakMountainCountry, image: null},
       {color: mossyOakBreakUpCountry, image: null}
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
   });
};
