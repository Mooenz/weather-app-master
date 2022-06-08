const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const BASE_URL_NEW = 'https://api.openweathermap.org/data/2.5/onecall?';
const API_KEY = process.env.REACT_APP_KEY;

export const BASE_URL_CITY = (CAPITAL) =>
  `${BASE_URL}${CAPITAL}&units=metric&appid=${API_KEY}`;

export const BASE_URL_COORD = (LAT, LON, PART ) => `${BASE_URL_NEW}lat=${LAT}&lon=${LON}&exclude=${PART}&units=metric&appid=${API_KEY}`
