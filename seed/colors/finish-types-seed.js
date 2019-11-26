const mongoose = require('mongoose');
const TypeFinishSchema = require('../../models/colors/type-finish');
const TypeFinish = mongoose.model('TypeFinish', TypeFinishSchema);

const bowRiserBrandFinishes = require('./riser-color-brands-seed');
const bowLimbBrandFinishes = require('./limb-color-brands-seed');


const kureRealTreeRiserFinishes = bowRiserBrandFinishes.kureRealTree();
const kureKuiuRiserFinishes = bowRiserBrandFinishes.kureKuiu();
const kureOutdoorsRiserFinishes = bowRiserBrandFinishes.kureOutdoors();
const kureRhinodizeRiserFinishes = bowRiserBrandFinishes.kureRhinodize();

module.exports.kureRiserCamoTypes = function() {
  return new TypeFinish({
    name: "Kure Riser Camo",
    brands: [
      kureRealTreeRiserFinishes,
      kureKuiuRiserFinishes
    ]
  });
};

module.exports.kureRiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Kure Riser Outdoors",
    brands: [
      kureOutdoorsRiserFinishes
    ]
  });
};

module.exports.kureRiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Kure Riser Rhinodize",
    brands: [
      kureRhinodizeRiserFinishes
    ]
  });
};


const kureOutdoorsLimbFinishes = bowLimbBrandFinishes.kureOutdoors();
const kureRealTreeLimbFinishes = bowLimbBrandFinishes.kureRealTree();
const kureKuiuLimbFinishes = bowLimbBrandFinishes.kureKuiu();
module.exports.kureLimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Kure Limb Outdoors",
    brands: [
      kureOutdoorsLimbFinishes
    ]
  });
};

module.exports.kureLimbCamoTypes = function() {
  return new TypeFinish({
    name: "Kure Limb Camo",
    brands: [
      kureRealTreeLimbFinishes,
      kureKuiuLimbFinishes
    ]
  });
};

const rezultOutdoorsRiserFinishes = bowRiserBrandFinishes.rezultOutdoors();
const rezultRhinodizeRiserFinishes = bowRiserBrandFinishes.rezultRhinodize();

module.exports.rezultRiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "ReZult Riser Outdoors",
    brands: [
      rezultOutdoorsRiserFinishes
    ]
  });
};

module.exports.rezultRiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "ReZult Riser Rhinodize",
    brands: [
      rezultRhinodizeRiserFinishes
    ]
  });
};


const rezultOutdoorsLimbFinishes = bowLimbBrandFinishes.rezultOutdoors();
module.exports.rezultLimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "ReZult Limb Outdoors",
    brands: [
      rezultOutdoorsLimbFinishes
    ]
  });
};


const valorRealTreeRiserFinishes = bowRiserBrandFinishes.valorRealTree();
const valorOutdoorsRiserFinishes = bowRiserBrandFinishes.valorOutdoors();

module.exports.valorRiserCamoTypes = function() {
  return new TypeFinish({
    name: "Valor Riser Camo",
    brands: [
      valorRealTreeRiserFinishes,
    ]
  });
};

module.exports.valorRiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Valor Riser Outdoors",
    brands: [
      valorOutdoorsRiserFinishes
    ]
  });
};


const valorOutdoorsLimbFinishes = bowLimbBrandFinishes.valorOutdoors();
module.exports.valorLimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Valor Limb Outdoors",
    brands: [
      valorOutdoorsLimbFinishes
    ]
  });
};


const ritual30RealTreeRiserFinishes = bowRiserBrandFinishes.ritual30RealTree();
const ritual30KuiuRiserFinishes = bowRiserBrandFinishes.ritual30Kuiu();
const ritual30MossyOakRiserFinishes = bowRiserBrandFinishes.ritual30MossyOak();
const ritual30ExclusiveDecorationFinishes = bowRiserBrandFinishes.ritual30ExclusiveDecoration();
const ritual30OutdoorsRiserFinishes = bowRiserBrandFinishes.ritual30Outdoors();
const ritual30RhinodizeRiserFinishes = bowRiserBrandFinishes.ritual30Rhinodize();

module.exports.ritual30RiserCamoTypes = function() {
  return new TypeFinish({
    name: "Ritual 30 Riser Camo",
    brands: [
      ritual30RealTreeRiserFinishes,
      ritual30KuiuRiserFinishes,
      ritual30MossyOakRiserFinishes
    ]
  });
};
module.exports.ritual30RiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Ritual 30 Riser Outdoors",
    brands: [
      ritual30OutdoorsRiserFinishes
    ]
  });
};

module.exports.ritual30RiserExclusiveDecorationTypes = function() {
  return new TypeFinish({
    name: "Ritual 30 Exclusive Decoration",
    brands: [
      ritual30ExclusiveDecorationFinishes
    ]
  });
};

module.exports.ritual30RiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Ritual 30 Riser Outdoors",
    brands: [
      ritual30RhinodizeRiserFinishes
    ]
  });
};

const ritual30OutdoorsLimbFinishes = bowLimbBrandFinishes.ritual30Outdoors();

module.exports.ritual30LimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Ritual 30 Limb Outdoors",
    brands: [
      ritual30OutdoorsLimbFinishes
    ]
  });
};


const ritual33RealTreeRiserFinishes = bowRiserBrandFinishes.ritual33RealTree();
const ritual33KuiuRiserFinishes = bowRiserBrandFinishes.ritual33Kuiu();
const ritual33MossyOakRiserFinishes = bowRiserBrandFinishes.ritual33MossyOak();
const ritual33OutdoorsRiserFinishes = bowRiserBrandFinishes.ritual33Outdoors();
const ritual33RhinodizeRiserFinishes = bowRiserBrandFinishes.ritual33Rhinodize();

module.exports.ritual33RiserCamoTypes = function() {
  return new TypeFinish({
    name: "Ritual 33 Riser Camo",
    brands: [
      ritual33RealTreeRiserFinishes,
      ritual33KuiuRiserFinishes,
      ritual33MossyOakRiserFinishes
    ]
  });
};
module.exports.ritual33RiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Ritual 33 Riser Outdoors",
    brands: [
      ritual33OutdoorsRiserFinishes
    ]
  });
};
module.exports.ritual33RiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Ritual 33 Riser Rhinodize",
    brands: [
      ritual33RhinodizeRiserFinishes
    ]
  });
};

const ritual33OutdoorsLimbFinishes = bowLimbBrandFinishes.ritual33Outdoors();
module.exports.ritual33LimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Ritual 33 Limb Outdoors",
    brands: [
      ritual33OutdoorsLimbFinishes
    ]
  });
};

const ritual35ExclusiveDecorationFinishes = bowRiserBrandFinishes.ritual35ExclusiveDecoration();
const ritual35RealTreeRiserFinishes = bowRiserBrandFinishes.ritual35RealTree();
const ritual35KuiuRiserFinishes = bowRiserBrandFinishes.ritual35Kuiu();
const ritual35MossyOakRiserFinishes = bowRiserBrandFinishes.ritual35MossyOak();
const ritual35OutdoorsRiserFinishes = bowRiserBrandFinishes.ritual35Outdoors();
const ritual35RhinodizeRiserFinishes = bowRiserBrandFinishes.ritual35Rhinodize();

module.exports.ritual35RiserExclusiveDecorationTypes = function() {
  return new TypeFinish({
    name: "Ritual 35 Exclusive Decoration",
    brands: [
      ritual35ExclusiveDecorationFinishes
    ]
  });
};

module.exports.ritual35RiserCamoTypes = function() {
  return new TypeFinish({
    name: "Ritual 35 Riser Camo",
    brands: [
      ritual35RealTreeRiserFinishes,
      ritual35KuiuRiserFinishes,
      ritual35MossyOakRiserFinishes
    ]
  });
};
module.exports.ritual35RiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Ritual 35 Riser Outdoors",
    brands: [
      ritual35OutdoorsRiserFinishes
    ]
  });
};
module.exports.ritual35RiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Ritual 35 Riser Outdoors",
    brands: [
      ritual35RhinodizeRiserFinishes
    ]
  });
};

const ritual35OutdoorsLimbFinishes = bowLimbBrandFinishes.ritual35Outdoors();

module.exports.ritual35LimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Ritual 35 Limb Outdoors",
    brands: [
      ritual35OutdoorsLimbFinishes
    ]
  });
};


const victoryXOutdoorsRiserFinishes = bowRiserBrandFinishes.victoryXOutdoors();
const victoryXRhinodizeRiserFinishes = bowRiserBrandFinishes.victoryXRhinodize();

module.exports.victoryXRiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Victory X Riser Outdoors",
    brands: [
      victoryXOutdoorsRiserFinishes
    ]
  });
};

module.exports.victoryXRiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Victory X Riser Rhinodize",
    brands: [
      victoryXRhinodizeRiserFinishes
    ]
  });
};


const victoryXOutdoorsLimbFinishes = bowLimbBrandFinishes.victoryXOutdoors();
module.exports.victoryXLimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Victory X Limb Outdoors",
    brands: [
      victoryXOutdoorsLimbFinishes
    ]
  });
};


const echelon37OutdoorsRiserFinishes = bowRiserBrandFinishes.echelon37Outdoors();
const echelon37RhinodizeRiserFinishes = bowRiserBrandFinishes.echelon37Rhinodize();
module.exports.echelon37RiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Echelon 37 Riser Outdoors",
    brands: [
      echelon37OutdoorsRiserFinishes
    ]
  });
};

module.exports.echelon37RiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Echelon 37 Riser Rhinodize",
    brands: [
      echelon37RhinodizeRiserFinishes
    ]
  });
};

const echelon37OutdoorsLimbFinishes = bowLimbBrandFinishes.echelon37Outdoors();
module.exports.echelon37LimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Echelon 37 Limb Outdoors",
    brands: [
      echelon37OutdoorsLimbFinishes
    ]
  })
}



const echelon39OutdoorsRiserFinishes = bowRiserBrandFinishes.echelon39Outdoors();
const echelon39RhinodizeRiserFinishes = bowRiserBrandFinishes.echelon39Rhinodize();
module.exports.echelon39RiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Echelon 39 Riser Outdoors",
    brands: [
      echelon39OutdoorsRiserFinishes
    ]
  });
};

module.exports.echelon39RiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Echelon 39 Riser Rhinodize",
    brands: [
      echelon39RhinodizeRiserFinishes
    ]
  });
};


const echelon39OutdoorsLimbFinishes = bowLimbBrandFinishes.echelon39Outdoors();
module.exports.echelon39LimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Echelon 39 Limb Outdoors",
    brands: [
      echelon39OutdoorsLimbFinishes
    ]
  });
};


const enlistOutdoorsRiserFinishes = bowRiserBrandFinishes.enlistOutdoors();
const enlistMossyOakRiserFinishes = bowRiserBrandFinishes.enlistMossyOak();
module.exports.enlistRiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Enlist Riser Outdoors",
    brands: [
      enlistOutdoorsRiserFinishes
    ]
  });
};
module.exports.enlistRiserCamoTypes = function() {
  return new TypeFinish({
    name: "Enlist Riser Camo",
    brands: [
      enlistMossyOakRiserFinishes
    ]
  });
};

const enlistOutdoorsLimbFinishes = bowLimbBrandFinishes.enlistOutdoors();
module.exports.enlistLimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Enlist Limb Outdoors",
    brands: [
      enlistOutdoorsLimbFinishes
    ]
  });
};


const revolRealTreeRiserFinishes = bowRiserBrandFinishes.revolRealTree();
const revolKuiuRiserFinishes = bowRiserBrandFinishes.revolKuiu();
const revolOutdoorsRiserFinishes = bowRiserBrandFinishes.revolOutdoors();
const revolRhinodizeRiserFinishes = bowRiserBrandFinishes.revolRhinodize();

module.exports.revolRiserCamoTypes = function() {
  return new TypeFinish({
    name: "Revol Riser Camo",
    brands: [
      revolRealTreeRiserFinishes,
      revolKuiuRiserFinishes
    ]
  });
};

module.exports.revolRiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Revol Riser Outdoors",
    brands: [
      revolOutdoorsRiserFinishes
    ]
  });
};

module.exports.revolRiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Revol Riser Rhinodize",
    brands: [
      revolRhinodizeRiserFinishes
    ]
  });
};
const revolOutdoorsLimbFinishes = bowLimbBrandFinishes.revolOutdoors();
module.exports.revolLimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Revol Limb Outdoors",
    brands: [
      revolOutdoorsLimbFinishes
    ]
  });
};

const revolXlRealTreeRiserFinishes = bowRiserBrandFinishes.revolXlRealTree();
const revolXlOutdoorsRiserFinishes = bowRiserBrandFinishes.revolXlOutdoors();
const revolXlRhinodizeRiserFinishes = bowRiserBrandFinishes.revolXlRhinodize();

module.exports.revolXlRiserCamoTypes = function() {
  return new TypeFinish({
    name: "Revol XL Riser Camo",
    brands: [
      revolXlRealTreeRiserFinishes,
    ]
  });
};

module.exports.revolXlRiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Revol XL Riser Outdoors",
    brands: [
      revolXlOutdoorsRiserFinishes
    ]
  });
};

module.exports.revolXlRiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Revol XL Riser Rhinodize",
    brands: [
      revolXlRhinodizeRiserFinishes
    ]
  });
};
const revolXlOutdoorsLimbFinishes = bowLimbBrandFinishes.revolXlOutdoors();
module.exports.revolXlLimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Revol XL Limb Outdoors",
    brands: [
      revolXlOutdoorsLimbFinishes
    ]
  });
};


const tempoRealTreeRiserFinishes = bowRiserBrandFinishes.tempoRealTree();
const tempoMossyOakFinishes = bowRiserBrandFinishes.tempoMossyOak();
const tempoOutdoorsRiserFinishes = bowRiserBrandFinishes.tempoOutdoors();
const tempoRhinodizeRiserFinishes = bowRiserBrandFinishes.tempoRhinodize();
module.exports.tempoRiserCamoTypes = function() {
  return new TypeFinish({
    name: "Tempo Riser Camo",
    brands: [
      tempoRealTreeRiserFinishes,
      tempoMossyOakFinishes
    ]
  });
};

module.exports.tempoRiserOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Tempo Riser Outdoors",
    brands: [
      tempoOutdoorsRiserFinishes
    ]
  });
};

module.exports.tempoRiserRhinodizeTypes = function() {
  return new TypeFinish({
    name: "Tempo Riser Rhinodize",
    brands: [
      tempoRhinodizeRiserFinishes
    ]
  });
};


const tempoOutdoorsLimbFinishes = bowLimbBrandFinishes.tempoOutdoors();
const tempoMossyOakLimbFinishes = bowLimbBrandFinishes.tempoMossyOak();
const tempoRealTreeLimbFinishes = bowLimbBrandFinishes.tempoRealTree();
module.exports.tempoLimbOutdoorsTypes = function() {
  return new TypeFinish({
    name: "Tempo Limb Outdoors",
    brands: [
      tempoOutdoorsLimbFinishes
    ]
  });
};

module.exports.tempoLimbCamoTypes = function() {
  return new TypeFinish({
    name: "Tempo Limb Camo",
    brands: [
      tempoMossyOakLimbFinishes,
      tempoRealTreeLimbFinishes
    ]
  });
};
