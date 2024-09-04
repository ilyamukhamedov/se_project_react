// export const defaultClothingItems = [
//   {
//     _id: 0,
//     name: "Cap",
//     weather: "hot",
//     imageUrl:
//       "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
//   },
//   {
//     _id: 1,
//     name: "Hoodie",
//     weather: "warm",
//     imageUrl:
//       "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
//   },
//   {
//     _id: 2,
//     name: "Jacket",
//     weather: "cold",
//     imageUrl:
//       "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
//   },
//   {
//     _id: 3,
//     name: "Sneakers",
//     weather: "cold",
//     imageUrl:
//       "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
//   },
//   {
//     _id: 4,
//     name: "T-Shirt",
//     weather: "hot",
//     imageUrl:
//       "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
//   },
//   {
//     _id: 5,
//     name: "Winter coat",
//     weather: "cold",
//     imageUrl:
//       "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
//   },
// ];

export const weatherOptions = [
  {
    url: require("../images/sunnyDay.svg").default,
    day: true,
    type: "Clear",
    alt: "sunnyDay",
  },

  {
    url: require("../images/cloudDay.svg").default,
    day: true,
    type: "Clouds",
    alt: "cloudDay",
  },

  {
    url: require("../images/rainDay.svg").default,
    day: true,
    type: "Rain",
    alt: "rainDay",
  },

  {
    url: require("../images/stormDay.svg").default,
    day: true,
    type: "Thunderstorm",
    alt: "stormDay",
  },

  {
    url: require("../images/snowDay.svg").default,
    day: true,
    type: "Snow",
    alt: "snowDay",
  },

  {
    url: require("../images/mistDay.svg").default,
    day: true,
    type: "Mist",
    alt: "mistDay",
  },

  {
    url: require("../images/dustDay.svg").default,
    day: true,
    type: "Dust",
    alt: "dustDay",
  },

  {
    url: require("../images/moonNight.svg").default,
    day: false,
    type: "Clear",
    alt: "moonNight",
  },

  {
    url: require("../images/cloudNight.svg").default,
    day: false,
    type: "Clouds",
    alt: "cloudNight",
  },

  {
    url: require("../images/rainNight.svg").default,
    day: false,
    type: "Rain",
    alt: "rainNight",
  },

  {
    url: require("../images/stormNight.svg").default,
    day: false,
    type: "Thunderstorm",
    alt: "stormNight",
  },

  {
    url: require("../images/snowNight.svg").default,
    day: false,
    type: "Snow",
    alt: "snowNight",
  },

  {
    url: require("../images/mistNight.svg").default,
    day: false,
    type: "Mist",
    alt: "mistNight",
  },

  {
    url: require("../images/dustNight.svg").default,
    day: false,
    type: "Dust",
    alt: "dustNight",
  },
];

export const APIkey = process.env.REACT_APP_API_KEY;

export const GEOkey = process.env.REACT_APP_GEO_KEY;
