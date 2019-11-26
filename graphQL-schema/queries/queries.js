const graphql = require('graphql');
const BowFamilySchema = require('../../models/bows/bow-family');
const mongoose = require('mongoose');
const bowFamilyModel = mongoose.model('BowFamily', BowFamilySchema);
const { BowFamilyType, BowType} = require('../types/bow-family-type');


// will need to give a name parameter like 'Ritual'
const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    bowFamily: {
      type: BowFamilyType, // check
      args: {
        name: { type: graphql.GraphQLString }
      },
      resolve: (parentValue, args) => {
        console.log('args: ', args.name);
        return new Promise( (resolve, reject) => {
          bowFamilyModel.findOne({ name: {'$regex': args.name,$options:'i'} }, (err, bowFamily) => {
            if (err) {
              console.log('err: ', err);
              reject(err);
            } else {
              console.log('successful: ', bowFamily);
              resolve(bowFamily);
            }
          });
        });
      }
    },
    bows: {
      type: graphql.GraphQLList(BowType),
      resolve: (parentValue, args) => {
        return new Promise( (resolve, reject) => {
          bowFamilyModel.find({}, (err, bowFamily) => {
            if (err) {
              reject(err);
            } else {
              let bowsList = [];
              bowFamily.forEach((family) => {
                family.bows.forEach((bow) => {
                  bowsList.push(bow)
                })
              })
              resolve(bowsList)
            }
          });
        });
      }
    },
  }
});


// const queryType = new graphql.GraphQLObjectType({
//   name: 'Query',
//   fields: {
//     bows: {
//       type: graphql.GraphQLList(BowListType),
//       resolve: (parentValue, args) => {
//         return new Promise( (resolve, reject) => {
//           bowModel.find({}, (err, bows) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve(bows);
//             }
//           });
//         });
//       }
//     },
//     bow: {
//       type: BowType,
//       args: {
//         name: { type: graphql.GraphQLString }
//       },
//       resolve: (parentValue, args) => {
//         return new Promise( (resolve, reject) => {
//           bowModel.findOne({ modelNameUrl: args.name }, (err, bow) => {
//             if (err) {
//               console.log('err: ', err);
//               reject(err);
//             } else {
//               resolve(bow);
//             }
//           });
//         });
//       }
//     },
//   }
// });

module.exports = queryType;


/*

GRAPHIQL:

TO GET ALL DATA FOR A BOW FAMILY:

query {
  bowFamily(name:"Ritual") {
    name
    overview {
      h1
      h2
      h3
    }
    headerVideo
    highlights
    compareModels {
     backgroundImage
      bows {
        bowImage
        braceHeight
        massWeight
        fps
      }
    }
    dualVideos
    performance {
      header
      p
      fps
      drawWeight
      drawLength
      massWeight
    }
    seriesSlider {
      image
      caption
    }
    aboutCam {
      h3
      description
      video
    }
    shopAccessoriesImage
    beautyImageGallery
    bows {
      name
      placement
      skuCode
      msrp
      modelNameUrl
      cadPath
      techSpecs {
        axleToAxle
        brace
        weight
        stringLength
        cableLength
        centerShot
        peakWeights
        drawLengths
        speedRating
        useTypes {
          name
          icon
          caption
          description
        }
        finishes {
          riser {
            brands {
              name
              finishes {
                color {
                  colorName
                  skuCode
                  swatchUrl
                  patternName
                }
                image
              }
            }
          }
          limbs {
            brands {
              name
              finishes {
                color {
                  colorName
                }
              }
            }
          }
        }
      }
    }
  }
}





*/
