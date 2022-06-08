import React from 'react';

// Components
import WeatherItem from '../../components/WeatherItem';

// Styles
import { Content } from './styles';


const index = ({ daily }) => {
  return (
    <Content>
      {daily.map(({ id, ...props}, index) => (
        <WeatherItem key={id} data={props} index={index}/>
      ))}
    </Content>
  );
};

export default index;
