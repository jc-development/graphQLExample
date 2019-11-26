const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bowModel = require('./bows-seed');

const BowFamilySchema = require('../models/bows/bow-family');
const BowFamily = mongoose.model('BowFamily', BowFamilySchema);


const kureBow = bowModel.kureBow();
kureBow.save();

module.exports.kureFamily = function() {
  return new BowFamily({
    name: "Kure",
    overview: {
      h1: "Kure Series",
      h2: "The Kure for the common bow",
      h3: "No matter what arrows you use. What rest you install. What your grip looks like. Which broadheads you use. The KURE adapts to you. Never before seen technology from the minds of some of the world's most recognizable archers eliminates the frustrations of tuning a bow."
    },
    headerVideo: "https://s3.amazonaws.com/elite-website/videos/kure/video/kure.mp4",
    headerVideoPoster: "https://s3.amazonaws.com/elite-website/videos/kure/poster/kure-poster.jpg",
    highlights: [
      "S.E.T. Technology",
      "Vibe X Blocks",
      "Cable Stop Adjustment",
      "Versa Mod System"
    ],
    compareModels: {
      backgroundImage: null,
      bows: [
        {
          bowImage: "https://s3.amazonaws.com/elite-website/2020/kure/images/bows/ninja-black.png",
          axleToAxle: "31",
          massWeight: "4.6",
          fps: "335"
        }
      ]
    },
    dualVideos: [
      "unknown",
      "unknown"
    ],
    performance: {
      header: "Tuning made easy",
      p: "S.E.T. (Simplified Exact Tuning) Technology enables micro-adjustments to the cam attitude at the limb pocket to achieve perfect arrow and broadhead flight. Paired with Elite's new Vibe X limb dampeners - the KURE delivers a smooth, quiet and shock-free shot.",
      fps: 335, // fastest fps in family
      drawWeight: 40, // lowest in family
      drawLength: 23.0, // lowest in family
      massWeight: 4.6 // lightest in family
    },
    seriesSlider: [
      {
        image: "https://s3.amazonaws.com/elite-website/2020/kure/series-images/slider-kure-1.jpg",
        caption: "ELITE Kure - Now with matching camo limbs"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2020/kure/series-images/slider-kure-2.jpg",
        caption: "ELITE Kure - Vibe X limb dampeners creates a smooth, quiet, and shock-free shot"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2020/kure/series-images/slider-kure-3.jpg",
        caption: "ELITE Kure - Asym Tri-Track Cams are laterally balanced giving the perfect shot"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2020/kure/series-images/slider-kure-4.jpg",
        caption: "ELITE Kure - The hunting bow that adapts to you"
      },

    ],
    aboutCam: {
      h3: "Kure Family Cam",
      description: "The all new Elite ASYM Tri-Track Cams with Versa Mod System rotating modules has Elite's famous high let off and smooth draw cycle, but now with the ability to adjust draw length, cable stops, and limb stops",
      video: "https://elite-website.s3.amazonaws.com/2020/kure/videos/exploded.mp4"
    },
    shopAccessoriesImage: null,
    beautyImageGallery: [
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/kure/kure-1.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/kure/kure-2.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/kure/kure-3.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/kure/kure-4.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/kure/kure-5.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/kure/kure-6.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/kure/kure-7.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/kure/kure-8.jpg"
    ],
    bows: [
      kureBow
    ]
  });
}


const rezultBow = bowModel.rezultBow();
rezultBow.save();

module.exports.rezultFamily = function() {
  return new BowFamily({
    name: "ReZult",
    overview: {
      h1: "ReZult Series",
      h2: "The Rezult is Accuracy",
      h3: "The 2020 Elite REZULT delivers a game changing set of technologies that - combined - put professional performance and tuning options into the hands of every day archers. Designed and developed by professional archers, the REZULT tunes faster and easier, saving time and leaving frustration at the door. Built for any shooter looking for a bow that delivers real results, the REZULT is here."
    },
    headerVideo: "https://s3.amazonaws.com/elite-website/videos/rezult/video/rezult.mp4",
    headerVideoPoster: "https://s3.amazonaws.com/elite-website/videos/rezult/poster/rezult-poster.jpg",
    highlights: [
      "StabiLock Pockets",
      "S.E.T. Technology",
      "Asym Tri-Track Cams",
      "Versa Mod System"
    ],
    compareModels: {
      backgroundImage: null,
      bows: [
        {
          bowImage: "https://s3.amazonaws.com/elite-website/2020/rezult/images/bows/ninja-black.png",
          axleToAxle: "37",
          massWeight: "4.7",
          fps: "325"
        }
      ]
    },
    dualVideos: [
      "unknown",
      "unknown"
    ],
    performance: {
      header: "Unmatched Stability",
      p: "The REZULT's new platform allows you to achieve the perfect tune - so quickly that you don't even have to leave the line when you're tuning. S.E.T. (Simplified Exact Tuning) Technology enables micro-adjustments to the cam attitude at the limb pocket to achieve perfect arrow flight. Paired with the wide stance of Elite's StabiLock limb pocket - this target bow delivers precision, accuracy, and unmatched stability.",
      fps: 335, // fastest fps in family
      drawWeight: 40, // lowest in family
      drawLength: 24.0, // lowest in family
      massWeight: 4.7 // lightest in family
    },
    seriesSlider: [
      {
        image: "https://s3.amazonaws.com/elite-website/2020/rezult/series-images/slider-rezult-1.jpg",
        caption: "ELITE ReZult - Asym Tri-Track Cams are laterally balanced giving the perfect shot"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2020/rezult/series-images/slider-rezult-2.jpg",
        caption: "ELITE ReZult - Vibe X limb dampeners creates a smooth shock-free shot"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2020/rezult/series-images/slider-rezult-3.jpg",
        caption: "ELITE ReZult - Adjustable back wall using limb stops or cable stops"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2020/rezult/series-images/slider-rezult-4.jpg",
        caption: "ELITE ReZult - StabiLock limb pockets has wider stance and increased limb stability"
      },

    ],
    aboutCam: {
      h3: "ReZult Family Cam",
      description: "The all new Elite ASYM Tri-Track Cams are laterally balanced, which reduces dynamic lateral nock travel and results in an accurate, forgiving bow that is easy to tune. With the addition of Elite's Versa Mod System, the REZULT introduced the ability to adjust draw length, cable stops, and limb stops.",
      video: "https://s3.amazonaws.com/elite-website/2020/rezult/videos/exploded.mp4"
    },
    shopAccessoriesImage: null,
    beautyImageGallery: [
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/rezult/rezult-1.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/rezult/rezult-2.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/rezult/rezult-3.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/rezult/rezult-4.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/rezult/rezult-5.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/rezult/rezult-6.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/rezult/rezult-7.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/rezult/rezult-8.jpg"
    ],
    bows: [
      rezultBow
    ]
  });
}


const valorBow = bowModel.valorBow();
valorBow.save();

module.exports.valorFamily = function() {
  return new BowFamily({
    name: "Valor",
    overview: {
      h1: "Valor Series",
      h2: "Conquering Adversity with Courage",
      h3: "The Elite Valor is an excellent option for bowhunters looking to step into a high quality, great drawing, smooth shooting machine. Elite's proven platform of form, fit, and finish - combined with the original shootability make the Valor a strong contender among all bows."
    },
    headerVideo: "https://s3.amazonaws.com/elite-website/videos/valor/video/valor.mp4",
    headerVideoPoster: "https://s3.amazonaws.com/elite-website/videos/valor/poster/valor-poster.jpg",
    highlights: [
      "28 3/4\" Axle-To-Axle",
      "329 FPS",
      "25\" - 29 1/2\" Length",
      "$749.00 MSRP"
    ],
    compareModels: {
      backgroundImage: null,
      bows: [
        {
          bowImage: "https://s3.amazonaws.com/elite-website/2019/valor/images/bows/ninja-black.png",
          axleToAxle: "29",
          massWeight: "4.1",
          fps: "329"
        }
      ]
    },
    dualVideos: [
      "unknown",
      "unknown"
    ],
    performance: {
      header: "Who is the Valor for?",
      p: "The bow hunter that is looking for a high quality and affordable bow. The hunter that recognizes the value in high-end machined components and appreciates that we don't cut corners.",
      fps: 329, // fastest fps in family
      drawWeight: 50, // lowest in family
      drawLength: 25.0, // lowest in family
      massWeight: 4.1 // lightest in family
    },
    seriesSlider: [
      {
        image: "https://s3.amazonaws.com/elite-website/2019/valor/series-images/slider-valor-6.jpg",
        caption: "ELITE VALOR - ELITE STAYS TRUE TO ITS CORE: PERFORMANCE, FORM, FIT, AND FINISH"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/valor/series-images/slider-valor-8.jpg",
        caption: "ELITE VALOR - LEVERAGING THE POWER OF THE PROVEN RITUAL PLATFORM"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/valor/series-images/slider-valor-1.jpg",
        caption: "ELITE VALOR - OTHERS TRY TO COPY, BUT ELITE OFFERS THE ORIGINAL SHOOTABILITY EXPERIENCE"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/valor/series-images/slider-valor-4.jpg",
        caption: "ELITE VALOR - WITH THE VALOR’S MACHINED POCKETS, GRIP, FIT, AND FINISH, ELITE HELPS YOU COME OUT ON TOP, EVERYTIME"
      },

    ],
    aboutCam: {
      h3: "Valor Family Cam",
      description: "Elite delivers the silky smooth draw, deep valley, and fantastic dwell zone. It's where shootability was born.",
      video: "https://s3.amazonaws.com/elite-website/2019/ritual/videos/ritual.mp4"
    },
    shopAccessoriesImage: null,
    beautyImageGallery: [
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/valor/valor-1.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/valor/valor-2.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/valor/valor-3.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/valor/valor-4.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/valor/valor-5.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/valor/valor-6.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/valor/valor-7.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/valor/valor-8.jpg"
    ],
    bows: [
      valorBow
    ]
  });
}


const ritual30Bow = bowModel.ritual30Bow();
const ritual33Bow = bowModel.ritual33Bow();
const ritual35Bow = bowModel.ritual35Bow();
const ritual35SbBow = bowModel.ritual35SbBow();
ritual30Bow.save();
ritual33Bow.save();
ritual35Bow.save();
ritual35SbBow.save();

module.exports.ritualFamily = function() {
  return new BowFamily({
    name: "Ritual",
    overview: {
      h1: "Ritual Series",
      h2: "Efficiency is the hallmark of a well designed bow",
      h3: "Elite delivers the Ritual - the most efficient bow ever developed. As Hunters, we have a routine. We follow it religiously. It gives us the best chance for success. From deer camp traditions to wearing our lucky hat. We are all creatures of habit. Of tradition. We are bowhunters. This is the Ritual."
    },
    headerVideo: "https://s3.amazonaws.com/elite-website/videos/meet-the-elite-profiles/biggs-spotlight.mp4",
    headerVideoPoster: "https://s3.amazonaws.com/elite-website/videos/meet-the-elite-profiles/posters/biggs-spotlight-preview.jpg",
    highlights: [
      "Versatile",
      "Simple Tuning",
      "Minimal Vibration",
      "Flawless Draw"
    ],
    compareModels: {
      backgroundImage: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/ritual-compare-bg.jpg",
      bows: [
        {
          bowImage: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-30/images/bows/ninja-black.png",
          axleToAxle: "30",
          massWeight: "4.1",
          fps: "332"
        },
        {
          bowImage: "https://s3.amazonaws.com/elite-website/2019/ritual/ritual-33/images/bows/ninja-black.png",
          axleToAxle: "33",
          massWeight: "4.3",
          fps: "335"
        },
        {
          bowImage: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual-35/ritual-35-main.png",
          axleToAxle: "35",
          massWeight: "4.4",
          fps: "336"
        },
        {
          bowImage: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual-35/ritual-35-main.png",
          axleToAxle: "35",
          massWeight: "4.4",
          fps: "316"
        }
      ]
    },
    dualVideos: [
      "https://s3.amazonaws.com/elite-website/videos/Ritual30-preview-home.mp4",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual_bg.mp4"
    ],
    performance: {
      header: "Drawing a bow back gives instant feedback for your expectations",
      p: "When you reach for a bow the first thing you grab is the grip. In this case, a super chiseled custom feel that automatically brings a smile because you know it will be easy to be consistent and accurate with a grip that feels this good.",
      fps: 336, // fastest fps in family
      drawWeight: 50, // lowest in family
      drawLength: 24.0, // lowest in family
      massWeight: 4.1 // lightest in family
    },
    seriesSlider: [
      {
        image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-30-larry.jpg",
        caption: "ELITE RITUAL 30 - TAKE YOUR TIME AND MAKE IT COUNT"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-33-green.jpg",
        caption: "ELITE RITUAL 33 - BIG RESULTS COME IN SMALL PACKAGES"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-30-biggs.jpg",
        caption: "ELITE RITUAL 30 - LIGHTWEIGHT AND POWERFUL"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/slider-ritual-33-unger.jpg",
        caption: "ELITE RITUAL 33 - SMARTER DESIGN"
      }
    ],
    aboutCam: {
      h3: "Ritual Family Cam",
      description: "The Ritual combines efficiency, smoothness, speed, and accuracy in one package to put the odds in your favor.",
      video: "https://s3.amazonaws.com/elite-website/2019/ritual/videos/ritual.mp4"
    },
    shopAccessoriesImage: "https://s3.amazonaws.com/elite-website/2019/ritual/series-images/ritual-33-accessories-image.jpg",
    beautyImageGallery: [
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-1.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-2.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-3.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-4.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-5.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-6.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-7.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-8.jpg"
    ],
    bows: [
      ritual30Bow,
      ritual33Bow,
      ritual35Bow,
      ritual35SbBow
    ]
  });
}


const victoryXBow = bowModel.victoryXBow();
victoryXBow.save();

module.exports.victoryXFamily = function() {
  return new BowFamily({
    name: "Victory",
    overview: {
      h1: "Victory X Series",
      h2: "The Victory X Bow is built from the winningest target bow platform in Elite history",
      h3: "Elite Archery's Victory X target bow is sculpted with Elite shootability and consistency at your fingertips. The Victory X is a bow that delivers crushing Victory with every shot for every target archer. Victory X is built on the high performing Victory platform and is true to the Elite standard. Forgiving geometry. Perfect synchronization of the famed two-track cam system. Traditional Elite feel."
    },
    headerVideo: "https://s3.amazonaws.com/elite-website/videos/meet-the-elite-profiles/brooks-spotlight.mp4",
    headerVideoPoster: "https://s3.amazonaws.com/elite-website/videos/meet-the-elite-profiles/posters/brooks-spotlight-preview.jpg",
    highlights: [
      "Forgiving",
      "Reliable",
      "Dual Track Binary Cams",
      "IBO 327 FPS"
    ],
    compareModels: {
      backgroundImage: null,
      bows: [
        {
          bowImage: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victory_x_cobaltblue.png",
          axleToAxle: "37",
          massWeight: "4.4",
          fps: "327"
        },
      ]
    },
    dualVideos: [
      "unknown",
      "unknown"
    ],
    performance: {
      header: "The Most Dependable Bow",
      p: "Dual track binary cams with inset mods gives the shooter a stable, noise free, draw length specific cam that will remain true to its original setting. The Victory X will shoot an amazing IBO rating of 327 fps. That means you will not only be able to get that kind of speed for IBO events but that you can shoot heavy large diameter arrows in tournaments where speed is limited. That means better scoring opportunity.",
      fps: 327, // fastest fps in family
      drawWeight: 50, // lowest in family
      drawLength: 26.0, // lowest in family
      massWeight: 4.4 // lightest in family
    },
    seriesSlider: [
      {
        image: "https://s3.amazonaws.com/elite-website/2019/victoryx/series-images/slider-victory-x-nathan.jpg",
        caption: "ELITE VICTORY X - WINNINGEST TARGET BOW PLATFORM IN ELITE HISTORY"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/victoryx/series-images/slider-victory-x-purple.jpg",
        caption: "ELITE VICTORY X - DUAL TRACK BINARY CAMS"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/victoryx/series-images/slider-victory-x-gomez.jpg",
        caption: "ELITE VICTORY X - FORGIVING GEOMETRY"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/victoryx/series-images/slider-victort-x-steve.jpg",
        caption: "ELITE VICTORY X - CONSISTENCY AT YOUR FINGERTIPS"
      }
    ],
    aboutCam: {
      h3: "Victory Family Cam",
      description: "So smooth. So easy to tune. Spend less time at peak weight fighting your bow and more time relaxing and focusing on your shot.",
      video: "https://s3.amazonaws.com/elite-website/2019/victoryx/videos/victory.mp4"
    },
    shopAccessoriesImage: "https://s3.amazonaws.com/elite-website/2019/victoryx/series-images/victory-x-accessories-image.jpg",
    beautyImageGallery: [
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victoryx-1.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victoryx-2.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victoryx-3.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victoryx-4.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victoryx-5.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victoryx-6.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victoryx-7.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/victoryx/victoryx-8.png"
    ],
    bows: [
      victoryXBow
    ]
  });
}


const echelon37Bow = bowModel.echelon37Bow();
const echelon39Bow = bowModel.echelon39Bow();
echelon37Bow.save();
echelon39Bow.save();

module.exports.echelonFamily = function() {
  return new BowFamily({
    name: "Echelon",
    overview: {
      h1: "Echelon Series",
      h2: "ECHELON: a level or rank in an organization, a profession, or society",
      h3: "Whether your game is indoor, field, 3D, or enjoy a long axle to axle hunting bow it will do it all. This bow will fit anyone looking to raise their game to the next level with the new Echelon cam and adjustable cable slide. This bow will match anyones shooting style by having the different cable stops and also the popular elite limb stops."
    },
    headerVideo: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/videos/christenberry-spotlight.mp4",
    headerVideoPoster: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/videos/christianberry-echelon-39.jpg",
    highlights: [
      "Split Limb System",
      "Cable and Limbstop Cam",
      "Tunability",
      "Shootability"
    ],
    compareModels: {
      backgroundImage: null,
      bows: [
        {
          bowImage: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-37/images/bows/ninja-black.png",
          axleToAxle: "37",
          massWeight: "4.6",
          fps: "333"
        },
        {
          bowImage: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/images/bows/ninja-black.png",
          axleToAxle: "39",
          massWeight: "4.7",
          fps: "326"
        }
      ]
    },
    dualVideos: [
      "unknown",
      "unknown"
    ],
    performance: {
      header: "This bow is a shooter",
      p: "You can tune this bow in many different ways to get the pin to set dead still on target. The bow is designed to be one of the most accurate bows on the market with the more stable split limb system. The new grip design allows the bow to melt into your hand and have a very consistent grip,this lets the archer focus more on the shot process and not on if pressures are in the right place on the bow to make that accurate shot.",
      fps: 333, // fastest fps in family
      drawWeight: 50, // lowest in family
      drawLength: 26.5, // lowest in family
      massWeight: 4.6 // lightest in family
    },
    seriesSlider: [
      {
        image: "https://s3.amazonaws.com/elite-website/2019/echelon/series-images/slider-echelon-chance.jpg",
        caption: "ELITE ECHELON 39 - RAISE YOUR GAME TO THE NEXT LEVEL"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/echelon/series-images/slider-echelon-studio.jpg",
        caption: "ELITE ECHELON 37 - NEW GRIP DESIGN ALLOWS THE BOW TO MELT INTO YOUR HAND"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/echelon/series-images/slider-echelon-darrin.jpg",
        caption: "ELITE ECHELON 39 - ELITE SHOOTABILITY IN A SPLIT LIMB SYSTEM"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/echelon/series-images/slider-echelon-closeup.jpg",
        caption: "ELITE ECHELON 37 - ECHELON CAM ALLOWS FOR BOTH CABLE STOPS AND ELITE'S POPULAR LIMB STOPS"
      }
    ],
    aboutCam: {
      h3: "Echelon Family Cam",
      description: "Comes with limb stop, and three cable stops. Keep the smooth draw cycle along with the valley and holding weight without sacrificing speed.",
      video: "https://s3.amazonaws.com/elite-website/2019/echelon/videos/echelon.mp4"
    },
    shopAccessoriesImage: "https://s3.amazonaws.com/elite-website/2019/echelon/series-images/echelon-accessories-image.jpg",
    beautyImageGallery: [
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon-1.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon-2.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon-3.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon-4.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon-5.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon-6.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon-7.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/echelon37/echelon-8.png"
    ],
    bows: [
      echelon37Bow,
      echelon39Bow
    ]
  });
}

const revolXlBow = bowModel.revolXlBow();
revolXlBow.save();

module.exports.revolFamily = function() {
  return new BowFamily({
    name: "Revol",
    overview: {
      h1: "Revol Series",
      h2: "Elite's ReVol XL Bow Is Shootability Elevated",
      h3: "The new Elite ReVol XL is an engineering marvel of tack driving accuracy and shootability. With industry leading efficiency ratings, the ReVol XL delivers an amazing 332 FPS, while providing the stability of 35 1/8\" axle to axle length and a 7\" brace height. The ReVol XL's skeletal riser and dual Riser Cage design, made possible by the 7075 T6 aluminum, provides an incredibly rigid riser platform that out aims the competition. The new high performance, ReVol XL cam system is built to perform while the LTR cable management system provides the ultimate in fine tuning. From the woods to the 3D range to indoor and outdoor target, the ReVol XL was designed to bring accuracy and shootability to the next level."
    },
    headerVideo: "https://s3.amazonaws.com/elite-website/v2/videos/ReVol_BG.mp4",
    headerVideoPoster: "https://s3.amazonaws.com/elite-website/v2/images/bow-models/video-posters/ReVol_BG.jpg",
    highlights: [
      "7\" Brace Height",
      "Dual Riser Cage",
      "7075 Aluminum",
      "Versatile"
    ],
    compareModels: {
      backgroundImage: null,
      bows: [
        {
          bowImage: "https://s3.amazonaws.com/elite-website/2019/revol/revolXL/images/bows/revol-xl-ninja-black.png",
          axleToAxle: "36",
          massWeight: "4.4",
          fps: "317"
        },
      ]
    },
    dualVideos: [
      "unknown",
      "unknown"
    ],
    performance: {
      header: "A Do it all bow",
      p: "The ReVol XL cams really shine for this bow. The IBO speed rating for the Revol XL is 317 feet per second. The cam has 11 different module settings ranging from 26 - 31-inches in half-inch increments. The dual cams are engineered to gives shooters the \"Elite feel\". With aid of dual limb stop posts, the adjustable 90% - 75% let-off provides a solid back wall.",
      fps: 332, // fastest fps in family
      drawWeight: 60, // lowest in family
      drawLength: 27.5, // lowest in family
      massWeight: 4.45 // lightest in family
    },
    seriesSlider: [
      {
        image: "https://s3.amazonaws.com/elite-website/2019/revol/series-images/slider-revol-1.jpg",
        caption: "ELITE ReVol XL - 36 1/8\" AXLE-TO-AXLE"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/revol/series-images/slider-revol-2.jpg",
        caption: "ELITE ReVol XL - IBO RATED 333 FPS"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/revol/series-images/slider-revol-3.jpg",
        caption: "ELITE ReVol XL - 7075 ALUMINUM"
      },
      {
        image: "https://s3.amazonaws.com/elite-website/2019/revol/series-images/slider-revol-4.jpg",
        caption: "ELITE ReVol XL - DUAL RISER CAGES"
      }
    ],
    aboutCam: {
      h3: "ReVol XL Family Cam",
      description: "Delivers speed and precision. Steadier aim with the ability to hold longer without letting down at full draw.",
      video: "https://s3.amazonaws.com/elite-website/2019/revol/videos/revol.mp4"
    },
    shopAccessoriesImage: null,
    beautyImageGallery: [
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/revol/revol-1.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/revol/revol-2.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/revol/revol-3.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/revol/revol-4.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/revol/revol-5.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/revol/revol-6.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/revol/revol-7.png",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/revol/revol-8.png"
    ],
    bows: [
      revolXlBow
    ]
  });
}
