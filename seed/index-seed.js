const mongoose = require('mongoose');
const BowFamilySchema = require('./../models/bows/bow-family');
const bowFamily = require('./bow-family-seed');

module.exports = {
  check: () => {
    const BowFamily = mongoose.model('BowFamily', BowFamilySchema);

    BowFamily.find({}, (err, collection) => {
      if (collection.length === 0) {
        console.log('no bow families found, seeding database ...');


        const kureFamily = bowFamily.kureFamily();

        kureFamily.save( (err, family) => {
          if (err) {
            console.log('error when creating series: ', err);
          } else {
            console.log('successfully created bow series: ', kureFamily.name);
          }
        });

        const rezultFamily = bowFamily.rezultFamily();

        rezultFamily.save( (err, family) => {
          if (err) {
            console.log('error when creating series: ', err);
          } else {
            console.log('successfully created bow series: ', rezultFamily.name);
          }
        });

        const valorFamily = bowFamily.valorFamily();

        valorFamily.save( (err, family) => {
          if (err) {
            console.log('error when creating series: ', err);
          } else {
            console.log('successfully created bow series: ', valorFamily.name);
          }
        });

        const ritualFamily = bowFamily.ritualFamily();

        ritualFamily.save( (err, family) => {
          if (err) {
            console.log('error when creating series: ', err);
          } else {
            console.log('successfully created bow series: ', ritualFamily.name);
          }
        });

        const victoryXFamily = bowFamily.victoryXFamily();

        victoryXFamily.save( (err, family) => {
          if (err) {
            console.log('error when creating series: ', err);
          } else {
            console.log('successfully created bow series: ', victoryXFamily.name);
          }
        });

        const echelonFamily = bowFamily.echelonFamily();

        echelonFamily.save( (err, family) => {
          if (err) {
            console.log('error when creating series: ', err);
          } else {
            console.log('successfully created bow series: ', echelonFamily.name);
          }
        });


        const revolFamily = bowFamily.revolFamily();

        revolFamily.save( (err, family) => {
          if (err) {
            console.log('error when creating series: ', err);
          } else {
            console.log('successfully created bow series: ', revolFamily.name);
          }
        });

      } else {
        console.log('bow families found, NO seeding')
      }

    });
  }
};
