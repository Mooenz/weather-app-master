import React from 'react';

// Components
import Button from '../../components/Button';

// Styles
import {
  ButtonsList,
  Container,
  WeatherToday,
  ImgContainer,
  TempContainer,
  Temp,
  Span,
  Weather,
  DateContainer,
  Name,
  NameContainer,
} from './styles';

const images = require.context('../../assets/img', true);

const index = ({ todayData, handleClose }) => {
  const { temp, name, weather } = todayData;

  // Get today
  const today = new Date().toDateString().split(' ');
  const day = today[0];
  const numberDay = today[2];
  const month = today[1];

  return (
    <>
      <Container>
        <ButtonsList>
          <Button body="Seach for places" handleClose={handleClose} />
          <Button body="my_location" location />
        </ButtonsList>
        <WeatherToday>
          <ImgContainer > 
          <img src={images(`./${weather}.png`)} alt={weather} />
          </ImgContainer>
          <TempContainer>
            <Temp>{temp}</Temp>
            <Span>°C</Span>
          </TempContainer>
          <Weather>{weather}</Weather>
          <DateContainer>
            <p>Today</p>
            <p>•</p>
            <p>{` ${day},  ${numberDay} ${month}`}</p>
          </DateContainer>
          <NameContainer>
            <span className="material-icons">place</span>
            <Name>{name}</Name>
          </NameContainer>
        </WeatherToday>
      </Container>
    </>
  );
};

export default index;
