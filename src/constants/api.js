const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = process.env.REACT_APP_KEY;

export const BASE_URL_CITY = (CAPITAL) =>
  `${BASE_URL}${CAPITAL}&units=metric&appid=${API_KEY}`;
