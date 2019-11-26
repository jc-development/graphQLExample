const graphql = require('graphql');

const FeaturesType = new graphql.GraphQLObjectType({
  name: 'FeatureType',
  fields: () => ({
    title: { type: graphql.GraphQLString },
    content: { type: graphql.GraphQLString }
  })
});

const FeatureImageType = new graphql.GraphQLObjectType({
  name: 'FeatureImageType',
  fields: () => ({
    source: { type: graphql.GraphQLString },
    caption: { type: graphql.GraphQLString }
  })
});

const RiserColorType = new graphql.GraphQLObjectType({
  name: 'RiserColorType',
  fields: () => ({
    colorFamily: { type: graphql.GraphQLString },
    colorName: { type: graphql.GraphQLString },
    skuCode: { type: graphql.GraphQLString },
    patternName: { type: graphql.GraphQLString },
    swatchUrl: { type: graphql.GraphQLString },
    colorType: { type: graphql.GraphQLString }
  })
});

const LimbColorType = new graphql.GraphQLObjectType({
  name: 'LimbColorType',
  fields: () => ({
    colorFamily: { type: graphql.GraphQLString },
    colorName: { type: graphql.GraphQLString },
    skuCode: { type: graphql.GraphQLString },
    patternName: { type: graphql.GraphQLString },
    swatchUrl: { type: graphql.GraphQLString },
    colorType: { type: graphql.GraphQLString }
  })
});

const IndependenceBowImagesType = new graphql.GraphQLObjectType({
  name: 'IndependenceBowImageType',
  fields: () => ({
    name: { type: graphql.GraphQLString },
    thumb: { type: graphql.GraphQLString },
    large: { type: graphql.GraphQLString }
  })
});

// for /elite-bows
const BowListType = new graphql.GraphQLObjectType({
  name: 'BowListType',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    placement: { type: graphql.GraphQLInt },
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

// for /elite-bows/model-name
const BowType = new graphql.GraphQLObjectType({
  name: 'BowType',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    modelYear: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    skuCode: { type: graphql.GraphQLString },
    msrp: { type: graphql.GraphQLFloat },
    modelNameUrl: { type: graphql.GraphQLString },
    axleToAxle: { type: graphql.GraphQLString },
    speedRating: { type: graphql.GraphQLString },
    useTypeIcons: { type: graphql.GraphQLList(graphql.GraphQLString) },
    elevatorPitch: { type: graphql.GraphQLString },
    captionHeader: { type: graphql.GraphQLString },
    caption: { type: graphql.GraphQLString },
    features: { type: graphql.GraphQLList(FeaturesType) },
    limbType: { type: graphql.GraphQLString },
    brace: { type: graphql.GraphQLString },
    weight: { type: graphql.GraphQLString },
    stringLength: { type: graphql.GraphQLString },
    cableLength: { type: graphql.GraphQLString },
    centerShot: { type: graphql.GraphQLString },
    peakWeights: { type: graphql.GraphQLList(graphql.GraphQLString) },
    drawLengths: { type: graphql.GraphQLList(graphql.GraphQLString) },
    speedRating: { type: graphql.GraphQLString },
    useTypes: { type: graphql.GraphQLList(graphql.GraphQLString) },
    letoff: { type: graphql.GraphQLString },
    featureImages: { type: graphql.GraphQLList(FeatureImageType) },
    bowModelHeroVideoBg: { type: graphql.GraphQLString },
    bowModelHeroVideoMobileBg: { type: graphql.GraphQLString },
    bowModelHeroVideoPosterBg: { type: graphql.GraphQLString },
    handOrientations: { type: graphql.GraphQLList(graphql.GraphQLString) },
    riserColors: { type: graphql.GraphQLList(RiserColorType) },
    limbColors: { type: graphql.GraphQLList(LimbColorType) }
  })
});

// for independent-bows
const IndependentEchelonsListType = new graphql.GraphQLObjectType({
  name: 'IndependentEchelonsListType',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    skuCode: { type: graphql.GraphQLString },
    independentMsrp: { type: graphql.GraphQLFloat },
    modelNameUrl: { type: graphql.GraphQLString },
    axleToAxle: { type: graphql.GraphQLString },
    speedRating: { type: graphql.GraphQLString },
    useTypeIcons: { type: graphql.GraphQLList(graphql.GraphQLString) },
    elevatorPitch: { type: graphql.GraphQLString },
    captionHeader: { type: graphql.GraphQLString },
    independentCaption: { type: graphql.GraphQLString },
    features: { type: graphql.GraphQLList(FeaturesType) },
    limbType: { type: graphql.GraphQLString },
    brace: { type: graphql.GraphQLString },
    weight: { type: graphql.GraphQLString },
    stringLength: { type: graphql.GraphQLString },
    cableLength: { type: graphql.GraphQLString },
    centerShot: { type: graphql.GraphQLString },
    peakWeights: { type: graphql.GraphQLList(graphql.GraphQLString) },
    drawLengths: { type: graphql.GraphQLList(graphql.GraphQLString) },
    speedRating: { type: graphql.GraphQLString },
    useTypes: { type: graphql.GraphQLList(graphql.GraphQLString) },
    letoff: { type: graphql.GraphQLString },
    featureImages: { type: graphql.GraphQLList(FeatureImageType) },
    bowModelHeroVideoBg: { type: graphql.GraphQLString },
    bowModelHeroVideoMobileBg: { type: graphql.GraphQLString },
    bowModelHeroVideoPosterBg: { type: graphql.GraphQLString },
    handOrientations: { type: graphql.GraphQLList(graphql.GraphQLString) },
    riserColors: { type: graphql.GraphQLList(RiserColorType) },
    limbColors: { type: graphql.GraphQLList(LimbColorType) },
    independenceBowImages: { type: graphql.GraphQLList(IndependenceBowImagesType) }
  })
});

module.exports = { BowListType, BowType, IndependentEchelonsListType };
