import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Styles
import { Container, ContainerMain, ContainerSecond } from './styles';

// Components
import MainWeatherDay from '../containers/MainWeatherDay';
import SearchLocation from '../containers/SearchLocation';
import WeatherDayList from '../containers/WeatherDayList';
import HightlightList from '../containers/HightlightList';
import Footer from '../components/Footer';

// Api urls
import { BASE_URL_CITY } from '../constants/api';
import { BASE_URL_COORD } from '../constants/api';

// StatesContext
import { StatesContext } from '../context/StatesContext';

// Initial States
const INITIAL_TODAY_DATA = {
  name: 'search',
  temp: '0',
  weather: 'Clear',
};

const INITIAL_DAILY_DATA = [
  {
    id: 0,
    date: 0,
    temp_max: 0,
    temp_min: 0,
    weather: 'Clear',
  },
];

const INITIAL_CURRENT_DATA = {
  wind_speed: 0,
  humidity: 0,
  visibility: 0,
  pressure: 0,
  description: '',
  wind_deg: 0,
};

const Home = () => {
  // StatesContext
  const { city, setCity, isClose, setIsCLose } = useContext(StatesContext);

  // States
  const [todayData, setTodayData] = useState(INITIAL_TODAY_DATA);
  const [daily, setDaily] = useState(INITIAL_DAILY_DATA);
  const [current, setCurrent] = useState(INITIAL_CURRENT_DATA);

  // Handle
  const handleClose = () => setIsCLose(!isClose);

  // Get data
  useEffect(() => {
    axios.get(BASE_URL_CITY(city)).then((response) => {
      // Get weather next days
      const { lon, lat } = response.data.coord;

      axios
        .get(BASE_URL_COORD(lat, lon, 'minutely,hourly,alerts'))
        .then((res) => {
          // Objects Data
          const objectDataToday = {
            date: res.data.current.dt,
            name: response.data.name,
            temp: parseInt(res.data.current.temp),
            weather: res.data.current.weather[0].main,
          };

          const dailyData = res.data.daily;
          const dailyDataSlice = dailyData.slice(1, dailyData.lengt);
          const arrayDataDaily = dailyDataSlice.map(
            (item, id) =>
              (item = {
                id: id,
                date: item.dt,
                temp_max: parseInt(item.temp.max),
                temp_min: parseInt(item.temp.min),
                weather: item.weather[0].main,
              })
          );

          const objectDataCurrent = {
            wind_speed: parseInt(res.data.current.wind_speed),
            humidity: res.data.current.humidity,
            visibility: parseInt(res.data.current.visibility / 1000),
            pressure: res.data.current.pressure,
            description: res.data.current.weather[0].description,
            wind_deg: res.data.current.wind_deg,
          };

          // Change state with new data
          setTodayData(objectDataToday);
          setDaily(arrayDataDaily);
          setCurrent(objectDataCurrent);
        });
    });
  }, [city]);

  return (
    <Container>
      <ContainerMain>
        <MainWeatherDay todayData={todayData} handleClose={handleClose} />
        <SearchLocation
          isClose={isClose}
          setCity={setCity}
          handleClose={handleClose}
        />
      </ContainerMain>
      <ContainerSecond>
        <WeatherDayList daily={daily} />
        <HightlightList current={current} />
        <Footer />
      </ContainerSecond>
    </Container>
  );
};

export default Home;
