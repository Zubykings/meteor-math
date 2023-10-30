const api = [
  {
    coord: { lon: 7.9266, lat: 5.0333 },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10n" },
    ],
    base: "stations",
    main: {
      temp: 297.17,
      feels_like: 298.11,
      temp_min: 297.17,
      temp_max: 297.17,
      pressure: 1012,
      humidity: 95,
      sea_level: 1012,
      grnd_level: 1004,
    },
    visibility: 10000,
    wind: { speed: 1.52, deg: 203, gust: 3.73 },
    rain: { "1h": 0.44 },
    clouds: { all: 100 },
    dt: 1698013466,
    sys: { country: "NG", sunrise: 1697951590, sunset: 1697994730 },
    timezone: 3600,
    id: 2319480,
    name: "Uyo",
    cod: 200,
  },
];



const forecastData = [
  {
    date: "2023-10-20",
    day: "Friday",
    temp_max: 22,
    temp_min: 15,
    description: "Cloudy",
    icon: "02d",
  },
  {
    date: "2023-10-21",
    day: "Saturday",
    temp_max: 23,
    temp_min: 16,
    description: "Sunny",
    icon: "01d",
  },
  {
    date: "2023-10-20",
    day: "Friday",
    temp_max: 22,
    temp_min: 15,
    description: "Cloudy",
    icon: "02d",
  },
  {
    date: "2023-10-20",
    day: "Friday",
    temp_max: 22,
    temp_min: 15,
    description: "Cloudy",
    icon: "02d",
  },
  {
    date: "2023-10-21",
    day: "Saturday",
    temp_max: 23,
    temp_min: 16,
    description: "Sunny",
    icon: "01d",
  },
  // ... data for other days
];

export { forecastData };
