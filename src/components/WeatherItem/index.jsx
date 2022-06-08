import React from 'react';

// Styles
import {
  Container,
  ContainerDate,
  Image,
  ContainerTemp,
  MaxTemp,
  MinTemp,
} from './styles';

// Path
const images = require.context('../../assets/img', true);

const index = ({ data, index }) => {
  // Data
  const { date, weather, temp_max, temp_min } = data;

  // Get today
  const today = new Date(date * 1000).toDateString().split(' ');
  const day = today[0];
  const numberDay = parseInt(today[2]);
  const month = today[1];

  return (
    <Container>
      <ContainerDate>
        {index === 0 ? 'Tomorrow' : `${day}, ${numberDay} ${month}`}
      </ContainerDate>
      <Image src={images(`./${weather}.png`)} alt={weather} />
      <ContainerTemp>
        <MaxTemp>{temp_max}°C</MaxTemp>
        <MinTemp>{temp_min}°C</MinTemp>
      </ContainerTemp>
    </Container>
  );
};

export default index;
