import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Styles
import { Container } from './styles';

// Components
import MainWeatherDay from '../containers/MainWeatherDay';
import SearchLocation from '../containers/SearchLocation';
import WeatherDayList from '../containers/WeatherDayList';
import HightlightList from '../containers/HightlightList';

// Api
import { BASE_URL_CITY } from '../constants/api';

// StatesContext
import { StatesContext } from '../context/StatesContext';

const Home = () => {
  // StatesContext
  const { city, setCity, isClose, setIsCLose } = useContext(StatesContext);

  const [todayData, setTodayData] = useState({
    name: 'search',
    temp: '0',
    weather: 'Clear',
  });

  // Handle
  const handleClose = () => setIsCLose(!isClose);

  // Get data
  useEffect(() => {
    axios.get(BASE_URL_CITY(city)).then((response) => {
      const objectData = {
        name: response.data.name,
        temp: parseInt(response.data.main.temp),
        weather: response.data.weather[0].main,
      };

      setTodayData(objectData);
      console.log(response.data);
      // Get weather next days
      const { lon, lan } = response.data.coord;
    });
  }, [city]);

  return (
    <Container>
      <MainWeatherDay todayData={todayData} handleClose={handleClose} />
      <SearchLocation
        isClose={isClose}
        setCity={setCity}
        handleClose={handleClose}
      />
      <WeatherDayList />
      <HightlightList />
    </Container>
  );
};

export default Home;
