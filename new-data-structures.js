colorFinishes: {
    camo: {
      realTree: [
        {
          colorName: "XTRA",
          skuCode: "rx",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-xtra.png",
          patternName: "Realtree Xtra"
        },
        {
          colorName: "MAX-1",
          skuCode: "mx",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-max.png",
          patternName: "Realtree Max",
        },
        {
          colorName: "SNOW",
          skuCode: "sn",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-snow.png",
          patternName: "Realtree Snow",
        }
      ],
      kuiu: [
        {
          colorName: "Verde",
          skuCode: "vr",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/kuiu-verde.png",
          patternName: "KUIU Verde"
        },
        {
          colorName: "Vias",
          skuCode: "vs",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/kuiu-vias.png",
          patternName: "KUIU Vias"
        }
      ],
      mossyOak: [
        {
          colorName: "Break-Up Country",
          skuCode: "bu",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/mossy-oak-break-up.jpg",
          patternName: "Mossy Oak Break-Up Country",
        },
        {
          colorName: "Mountain Country",
          skuCode: "mc",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/mossy-oak-mountain-country.jpg",
          patternName: "Mossy Oak Mountain Country"
        }
      ],
      trueTimber: [
        {
          colorName: "Kanati",
          skuCode: "km",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/truetimber-kanati.jpg",
          patternName: "TrueTimber Kanati",
        },
        {
          colorName: "Strata",
          skuCode: "sa",
          swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/truetimber-strata.jpg",
          patternName: "TrueTimber Strata",
        }
      ]
    },
    outdoor: [
      {
        colorName: "Ninja Black",
        skuCode: "at",
        swatchUrl: "https://s3.amazonaws.com/elite-website/bow-3d-models/outdoors-colors/black.jpg",
        patternName: "Ninja Black"
      },
      {
        colorName: "Hardwoods Brown",
        skuCode: "br",
        swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/outdoors-colors/OD+Brown.png",
        patternName: "OD Brown",
      },
      {
        colorName: "Olive Green",
        skuCode: "gr",
        swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/outdoors-colors/OD+Green.png",
        patternName: "OD Green",
      }
    ],
    rhinodize: [
      {
        colorName: "Graphite Gray",
        skuCode: "gg",
        swatchUrl:  "https://s3.amazonaws.com/elite-website/images/2017-bow-colors/Graphite+Gray.png",
        patternName: "Rhinodize Graphite Gray"
      },
      {
        colorName: "Purple Rain",
        skuCode: "pu",
        swatchUrl: "https://s3.amazonaws.com/elite-website/images/2017-bow-colors/Purple+Rain.png",
        patternName: "Rhinodize Purple Rain"
      },
      {
        colorName: "Emerald Green",
        skuCode: "eg",
        swatchUrl: "https://s3.amazonaws.com/elite-website/images/2017-bow-colors/Emerald+Green.png",
        patternName: "Rhinodize Emerald Green"
      },
      {
        colorName: "Surge Red",
        skuCode: "su",
        swatchUrl: "https://s3.amazonaws.com/elite-website/images/2017-bow-colors/Surge+Red.png",
        patternName: "Rhinodize Surge Red"
      },
      {
        colorName: "Cobalt Blue",
        skuCode: "cb",
        swatchUrl: "https://s3.amazonaws.com/elite-website/images/2017-bow-colors/Cobalt+Blue.png",
        patternName: "Rhinodize Cobalt Blue"
      },
      {
        colorName: "Copper Flame",
        skuCode: "cp",
        swatchUrl: "https://s3.amazonaws.com/elite-website/images/2017-bow-colors/Copper+Flame.png",
        patternName: "Rhinodize Copper Flame"
      },
      {
        colorName: "Sunset Pink",
        skuCode: "sk",
        swatchUrl:  "https://s3.amazonaws.com/elite-website/images/2017-bow-colors/Sunset+Pink.png",
        patternName: "Rhinodize Sunset Pink"
      },
    ],
  }


/*
  Bow data is organized by series; some will have more than one bow, like ritual and echelon Series.
  Want to add Bow models to the Series
*/
ritual: {
  overview: {
    // page specific items:
    header: {
      h1: "Bow Model Family Name",
      h2: "A blurb about this series name",
      h3: "A supporting claim about this series name"
    },
    headerVideo: "https://s3.amazonaws.com/elite-website/videos/meet-the-elite-profiles/biggs-spotlight-preview.mp4",
    highlights: [
      "series highlight 1",
      "series highlight 2",
      "series highlight 3",
      "series highlight 4"
    ],
    compareModels: {
      backgroundImg: "path to image for bg",
      bows: [
      // use bows below
      ], // maybe pull data already referred to in bows data structure below along with tech specs, or do through graphQL
    },
    dualVideos: [
      "path to first video",
      "path to second video"
    ]
    performance: {
      header: "A performance related statement about this bow model",
      p: "A paragraph explaining the performance of this bow. A paragraph explaining the performance of this bow. A paragraph explaining the performance of this bow. A paragraph explaining the performance of this bow. A paragraph explaining the performance of this bow. A paragraph explaining the performance of this bow.",
      fps: "360", // fastest fps in family
      drawWeight: "50", // lowest in family
      drawLength: "26.5", // lowest in family
      massWeight: "4.4" // lightest in family
    },
    seriesSlider: [
      // section under performance numbers and above hunting, field 3d, indoor use case mini showcase
      {
        img: "",
        caption: ""
      },
      {
        img: "",
        caption: ""
      },
      {
        img: "",
        caption: ""
      },
      {
        img: "",
        caption: ""
      }
    ],
    // useCases: "see below in bow's tech specs",
    /* drawCycleToShootabiliityTranslation: 'will need to develop more; may not make initial release', */
    aboutCam: {
      h3: "About this cam",
      description: "The 7th generation of this Cam, the Ritual is able to deliver a smooth draw cycle. Gets to dwell zone nicer, can hold longer. It assists with transferring energy from the bow to the arrow better. The cam will animate.",
      video: "https://s3.amazonaws.com/elite-website/bow-3d-models/ritual/cam-animation-ex.mp4"
    },
    shopAccessoriesImage: "https://s3.amazonaws.com/elite-website/images/ritual-30-accessories.jpg",
    beautyImageGallery: [
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-1.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-2.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-3.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-4.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-5.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-6.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-7.jpg",
      "https://s3.amazonaws.com/elite-website/v2/images/bow-models/ritual/ritual-8.jpg"
    ]
  },
  general: {},
  bows: [
    {
      // holds the specific ritual 30, ritual 33 instances
      name: "Ritual 30",
      skuCode: "19ritl30",
      msrp: 1049.00,
      modelNameUrl: "ritual-30",
      logo: "use the img that's in the builder, this is for the builder",
      cadPath: "path to glTF cad path on s3",
      techspecs: {
        axleToAxle: "30 1/2\" +/- 1/8\"",
        brace: "6 3/4\" +/- 1/8\"",
        weight: "4.1 lbs.",
        stringLength: "56 13/16\"",
        cableLength: "35\"",
        centerShot: "13/16\" to 15/16\"",
        peakWeights: ["50", "60", "65", "70"],
        drawLengths: ["25.5", "26.0", "26.5", "27.0", "27.5", "28.0", "28.5", "29.0", "29.5", "30.0"],
        speedRating: "332",
        letoff: "90% - 75%",
        useTypes: [
           {
             type: "hunting",
             icon: "https://s3.amazonaws.com/elite-website/images/features/icon_hunting.jpg",
             caption: "bow model (hunting)",
             description: "say tomething about how this bows excels in this particular shooting discipline."
           },
           {
             type: "field",
             icon: "https://s3.amazonaws.com/elite-website/images/features/icon_field.jpg",
             caption: "bow model (field)",
             description: "say tomething about how this bows excels in this particular shooting discipline."
           },
           {
             type: "3D",
             icon: "https://s3.amazonaws.com/elite-website/images/features/icon_3d.jpg",
             caption: "bow model (3D)",
             description: "say tomething about how this bows excels in this particular shooting discipline."
           },
           {
             type: "indoor",
             icon: "https://s3.amazonaws.com/elite-website/images/features/icon_indoor.jpg"
             caption: "bow model (indoor)",
             description: "say tomething about how this bows excels in this particular shooting discipline."
           }
        ],
      }, // need to be associated with bow instance because of buttons to load particular bow
      finishes: {
        riser: [
          // assign the proper references to respective colors for color selection in panel,
          // If is create a structure that has the image of the bow with the color, i can pass the image of the bow when color is clicked
          // This will also allow the hiRes images to be organized in the tech specs page
          /*
          {
            color: {
              colorName: "XTRA",
              skuCode: "rx",
              swatchUrl: "https://s3.amazonaws.com/elite-website/v2/images/camo-patterns/realtree-xtra.png",
              patternName: "Realtree Xtra"
            },
            image: 'image to be used in builder if hi-res button clicked'
          */
          {
            color: 'referenceToColor ObjectID',
            image: 'image to be used in builder if hi-res button clicked'
          }
        ],
        limb: [
          // assign the proper references to respective colors for color selection in panel
        ]
      },
    },
    {
      name: "Ritual 33"
      //...
      techspecs: {
        ...
      },
      ...
    }
  ],
}
