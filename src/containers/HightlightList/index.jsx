import React from 'react';

// Styles
import {
  Container,
  Content,
  Item,
  ItemTitle,
  ItemContent,
  ItemBody,
  ItemUnit,
  ContainerIcon,
  Icon,
  Description,
  ContainerInput,
  InputIndicators,
  InputRange,
} from './styles';

const index = ({ current }) => {

  return (
    <Container>
      <h2>Today’s Hightlights</h2>
      <Content>
        <Item>
          <ItemTitle>Wind status</ItemTitle>
          <ItemContent>
            <ItemBody>{current.wind_speed}</ItemBody>
            <ItemUnit>mph</ItemUnit>
          </ItemContent>
          <ContainerIcon>
            <Icon wind_deg={current.wind_deg}>
              <span className="material-icons">near_me</span>
            </Icon>
            <Description>{current.description}</Description>
          </ContainerIcon>
        </Item>

        <Item>
          <ItemTitle>Humidity</ItemTitle>
          <ItemContent>
            <ItemBody>{current.humidity}</ItemBody>
            <ItemUnit>%</ItemUnit>
          </ItemContent>
          <ContainerInput>
            <InputIndicators>
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </InputIndicators>
            <InputRange humidity={current.humidity}>
              <div />
            </InputRange>
            <div>%</div>
          </ContainerInput>
        </Item>

        <Item>
          <ItemTitle>Visibility</ItemTitle>
          <ItemContent>
            <ItemBody>{current.visibility}</ItemBody>
            <ItemUnit>miles</ItemUnit>
          </ItemContent>
        </Item>

        <Item>
          <ItemTitle>Air Pressure</ItemTitle>
          <ItemContent>
            <ItemBody>{current.pressure}</ItemBody>
            <ItemUnit>mb</ItemUnit>
          </ItemContent>
        </Item>
      </Content>
    </Container>
  );
};

export default index;
