const mongoose = require('mongoose');
const BowModelSchema = require('./../models/bow-model');
const bowsSeed = require('./bows');

module.exports = {
  check: () => {
    const bowModel = mongoose.model('BowModel', BowModelSchema);

    bowModel.find({}, (err, collection) => {
      if (collection.length === 0) {
        console.log('no bows found, seeding the database ...');

        for (let step = 0; step < bowsSeed.bows.length; step++) {

          let currentBow = bowsSeed.bows[step];
          if (step === 0) {
            console.log('currentBow.modelNameURL ', currentBow.modelNameURL);
          }

          const bowFeatures = currentBow.features.map( (feature) => {
            return {
              title: feature.title,
              content: feature.content
            };
          });

          const bowPeakWeights = currentBow.peakWeights.map( (weight) => { return weight });
          const bowDrawLengths = currentBow.drawLengths.map( (length) => { return length });
          const bowUseTypeIcons = currentBow.useTypeIcons.map( (icon) => { return icon });
          const bowUseTypes = currentBow.useTypes.map( (use) => { return use });

          const bowFeatureImages = currentBow.featureImages.map( (featureImage) => {
            return {
              source: featureImage.source,
              caption: featureImage.caption
            };
          });

          const bowHandOrientations = currentBow.handOrientations.map( (hand) => { return hand });
          const bowGripOptions = currentBow.gripOptions.map( (grip) => { return grip });

          const bowRiserColors = currentBow.riserColors.map( (color) => {
            return {
              colorFamily: color.colorFamily,
              colorName: color.colorName,
              skuCode: color.skuCode,
              swatchUrl: color.swatchUrl,
              patternName: color.patternName,
              colorType: color.colorType
            };
          });

          const bowLimbColors = currentBow.limbColors.map( (color) => {
            return {
              colorFamily: color.colorFamily,
              colorName: color.colorName,
              skuCode: color.skuCode,
              swatchUrl: color.swatchUrl,
              patternName: color.patternName,
              colorType: color.colorType
            };
          });

          const getIndependentMsrp = () => {
            if (currentBow.independentMsrp) {
              return currentBow.independentMsrp
            } else {
              return null;
            }
          };

          const getIndependentCaption = () => {
            if (currentBow.independentCaption) {
              return currentBow.independentCaption;
            } else {
              return null;
            }
          }

          const getIndependenceImages = () => {
            if (currentBow.independenceBowImages) {
              return currentBow.independenceBowImages.map( (image) => {
                return {
                  name: image.name,
                  thumb: image.thumb,
                  large: image.large
                };
              });
            } else {
              return null;
            }
          };

          const newBow = new bowModel({
            placement: currentBow.placement,
            name: currentBow.name,
            skuCode: currentBow.skuCode,
            msrp: currentBow.msrp,
            independentMsrp: getIndependentMsrp(),
            bowListImagePath: currentBow.bowListImagePath,
            modelNameUrl: currentBow.modelNameURL,
            elevatorPitch: currentBow.elevatorPitch,
            captionHeader: currentBow.captionHeader,
            caption: currentBow.caption,
            independentCaption: getIndependentCaption(),
            features: bowFeatures,
            limbType: currentBow.limbType,
            axleToAxle: currentBow.axleToAxle,
            brace: currentBow.brace,
            weight: currentBow.weight,
            stringLength: currentBow.stringLength,
            cableLength: currentBow.cableLength,
            centerShot: currentBow.centerShot,
            peakWeights: bowPeakWeights,
            drawLengths: bowDrawLengths,
            speedRating: currentBow.speedRating,
            useTypeIcons: bowUseTypeIcons,
            useTypes: bowUseTypes,
            letOff: currentBow.letOff,
            featureImages: bowFeatureImages,
            bowModelHeroVideoBg: currentBow.bowModelHeroVideoBg,
            bowModelHeroVideoMobileBg: currentBow.bowModelHeroVideoMobileBg,
            bowModelHeroVideoPosterBg: currentBow.bowModelHeroVideoPosterBg,
            handOrientations: bowHandOrientations,
            gripOptions: bowGripOptions,
            riserColors: bowRiserColors,
            limbColors: bowLimbColors,
            independenceBowImages: getIndependenceImages()
          });

          newBow.save( (err, bow) => {
            if (err) {
              console.log('error when creating bow: ', err);
            } else {
              console.log('successfully created bow: ', bow.modelNameUrl);
            }
          });
        }

      }
    });
  }

}
