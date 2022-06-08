import styled from 'styled-components';
import theme from '../../constants/theme';

const { primary, secondary, white, yellow } = theme.color;

export const Container = styled.section`
  padding: 25px 24px;
  background-color: ${secondary};

  @media screen and (min-width: 1260px) {
    width: 744px;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, auto));
  gap: 30px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  width: 100%;
  min-height: 160px;
  background-color: ${primary};
`;

export const ItemTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemBody = styled.p`
  font-size: 64px;
  font-weight: 700;
`;

export const ItemUnit = styled.p`
  font-size: 36px;
  font-weight: 500;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);

  span {
    ${({ wind_deg }) =>
      wind_deg
        ? `transform: rotate(${wind_deg + 316}deg);`
        : 'transform: rotate(316deg);'}
  }
`;

export const Description = styled.p`
  font-size: 16px;
  text-transform: capitalize;
`;

export const ContainerInput = styled.div`
  width: 100%;
  max-width: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  & div:nth-child(3) {
    align-self: end;
  }
`;

export const InputIndicators = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InputRange = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 10px;
  background-color: ${white};

  div {
    ${({ humidity }) => (humidity ? `width: ${humidity}%` : 'width :100%;')};
    height: 8px;
    border-radius: 10px;
    background-color: ${yellow};
  }
`;
