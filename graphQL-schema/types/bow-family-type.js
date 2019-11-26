const graphql = require('graphql');

// const FeaturesType = new graphql.GraphQLObjectType({
//   name: 'FeatureType',
//   fields: () => ({
//     title: { type: graphql.GraphQLString },
//     content: { type: graphql.GraphQLString }
//   })
// });
//
// const FeatureImageType = new graphql.GraphQLObjectType({
//   name: 'FeatureImageType',
//   fields: () => ({
//     source: { type: graphql.GraphQLString },
//     caption: { type: graphql.GraphQLString }
//   })
// });
//
// const RiserColorType = new graphql.GraphQLObjectType({
//   name: 'RiserColorType',
//   fields: () => ({
//     colorFamily: { type: graphql.GraphQLString },
//     colorName: { type: graphql.GraphQLString },
//     skuCode: { type: graphql.GraphQLString },
//     patternName: { type: graphql.GraphQLString },
//     swatchUrl: { type: graphql.GraphQLString },
//     colorType: { type: graphql.GraphQLString }
//   })
// });
//
// const LimbColorType = new graphql.GraphQLObjectType({
//   name: 'LimbColorType',
//   fields: () => ({
//     colorFamily: { type: graphql.GraphQLString },
//     colorName: { type: graphql.GraphQLString },
//     skuCode: { type: graphql.GraphQLString },
//     patternName: { type: graphql.GraphQLString },
//     swatchUrl: { type: graphql.GraphQLString },
//     colorType: { type: graphql.GraphQLString }
//   })
// });


// for /elite-bows
const BowListType = new graphql.GraphQLObjectType({
  name: 'BowListType',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    modelYear: { type: graphql.GraphQLString },
    bowListImagePath: { type: graphql.GraphQLString },
    msrp: { type: graphql.GraphQLFloat },
    name: { type: graphql.GraphQLString },
    modelNameUrl: { type: graphql.GraphQLString },
    axleToAxle: { type: graphql.GraphQLString },
    speedRating: { type: graphql.GraphQLString },
    useTypeIcons: { type: graphql.GraphQLList(graphql.GraphQLString) }
  })
});

// new stuff

const BasicColorType = new graphql.GraphQLObjectType({
  name: 'BasicColor',
  fields: () => ({
    colorName: { type: graphql.GraphQLString },
    skuCode: { type: graphql.GraphQLString },
    swatchUrl: { type: graphql.GraphQLString },
    patternName: { type: graphql.GraphQLString }
  })
});

const ColorInstanceType = new graphql.GraphQLObjectType({
  name: 'ColorInstance',
  fields: () => ({
    color: { type: BasicColorType },
    image: { type: graphql.GraphQLString }
  })
});

const BowColorBrandFinishType = new graphql.GraphQLObjectType({
  name: 'BowColorBrandFinish',
  fields: () => ({
    name: { type: graphql.GraphQLString },
    type: { type: graphql.GraphQLString },
    finishes: { type: graphql.GraphQLList(ColorInstanceType) }
  })
});

const BowColorFinishType = new graphql.GraphQLObjectType({
  name: 'BowColorFinish',
  fields: () => ({
    brands: { type: graphql.GraphQLList(BowColorBrandFinishType) }
  })
});

const BowUseType = new graphql.GraphQLObjectType({
  name: 'BowUse',
  fields: () => ({
    name: { type: graphql.GraphQLString },
    icon: { type: graphql.GraphQLString },
    caption: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    image: { type: graphql.GraphQLString }
  })
});

const RiserLimbFinishesType = new graphql.GraphQLObjectType({
  name: 'RiserLimbFinishes',
  fields: () => ({
      riser: { type: graphql.GraphQLList(BowColorFinishType) },
      limbs: { type: graphql.GraphQLList(BowColorFinishType) }
  })
});

const BowModType = new graphql.GraphQLObjectType({
  name: 'BowMod',
  fields: () => ({
    name: { type: graphql.GraphQLString },
    speed: { type: graphql.GraphQLString }
  })
});

const BowTechSpecsType = new graphql.GraphQLObjectType({
  name: 'BowTechSpec',
  fields: () => ({
    axleToAxle: { type: graphql.GraphQLString },
    brace: { type: graphql.GraphQLString },
    weight: { type: graphql.GraphQLString },
    stringLength: { type: graphql.GraphQLString },
    cableLength: { type: graphql.GraphQLString },
    centerShot: { type: graphql.GraphQLString },
    peakWeights: { type: graphql.GraphQLList(graphql.GraphQLString) },
    drawLengths: { type: graphql.GraphQLList(graphql.GraphQLString) },
    speedRating: { type: graphql.GraphQLInt },
    letOff: { type: graphql.GraphQLString },
    useTypes: { type: graphql.GraphQLList(BowUseType) },
    finishes: {type: RiserLimbFinishesType },
    mods: { type: graphql.GraphQLList(BowModType) }
  })
});

// for /elite-bows/model-name
const BowType = new graphql.GraphQLObjectType({
  name: 'Bow',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    modelYear: { type: graphql.GraphQLString },
    placement: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    skuCode: { type: graphql.GraphQLString },
    msrp: { type: graphql.GraphQLFloat },
    modelNameUrl: { type: graphql.GraphQLString },
    bowListImagePath: { type: graphql.GraphQLString },
    logo: { type: graphql.GraphQLString },
    limbType: { type: graphql.GraphQLString },
    cadPath: { type: graphql.GraphQLString },
    techSpecs: { type: BowTechSpecsType }
  })
});

const BowCompareType = new graphql.GraphQLObjectType({
  name: 'BowCompare',
  fields: () => ({
    bowImage: { type: graphql.GraphQLString },
    axleToAxle: { type: graphql.GraphQLString },
    massWeight: { type: graphql.GraphQLString },
    fps: { type: graphql.GraphQLString }
  })
});

const SeriesSliderType = new graphql.GraphQLObjectType({
  name: 'SeriesSlider',
  fields: () => ({
    image: { type: graphql.GraphQLString },
    caption: { type: graphql.GraphQLString }
  })
});

const BowOverviewType = new graphql.GraphQLObjectType({
  name: 'BowOverview',
  fields: () => ({
    h1: { type: graphql.GraphQLString },
    h2: { type: graphql.GraphQLString },
    h3: { type: graphql.GraphQLString }
  })
});

const CompareBowModelsType = new graphql.GraphQLObjectType({
  name: 'CompareBowModelsWithImage',
  fields: () => ({
   backgroundImage: { type: graphql.GraphQLString },
   bows: { type: graphql.GraphQLList(BowCompareType) }
  })
});

const PerformanceDescriptionType = new graphql.GraphQLObjectType({
  name: 'PerformanceDescription',
  fields: () => ({
    header: { type: graphql.GraphQLString },
    p: { type: graphql.GraphQLString },
    fps: { type: graphql.GraphQLInt },
    drawWeight: { type: graphql.GraphQLFloat },
    drawLength: { type: graphql.GraphQLFloat },
    massWeight: { type: graphql.GraphQLFloat }
  })
});

const AboutCamType = new graphql.GraphQLObjectType({
  name: 'AboutCam',
  fields: () => ({
    h3: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    video: { type: graphql.GraphQLString }
  })
});

const BowFamilyType = new graphql.GraphQLObjectType({
  name: 'BowFamily',
  fields: () => ({
    name: { type: graphql.GraphQLString },
    overview:  { type: BowOverviewType} ,
    headerVideo: { type: graphql.GraphQLString },
    headerVideoPoster: { type: graphql.GraphQLString },
    highlights: { type: graphql.GraphQLList(graphql.GraphQLString) },
    compareModels: { type: CompareBowModelsType},
    dualVideos: { type: graphql.GraphQLList(graphql.GraphQLString) },
    performance: { type: PerformanceDescriptionType},
    seriesSlider: { type: graphql.GraphQLList(SeriesSliderType) },
    aboutCam: { type: AboutCamType },
    shopAccessoriesImage: { type: graphql.GraphQLString },
    beautyImageGallery: { type: graphql.GraphQLList(graphql.GraphQLString) },
    bows: { type: graphql.GraphQLList(BowType) }
  })
});


module.exports = { BowFamilyType, BowType };
