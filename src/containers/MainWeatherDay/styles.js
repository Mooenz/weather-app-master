import styled from 'styled-components';
import theme from '../../constants/theme';
import imgBg from '../../assets/img/Cloud-background.png';

const { primary, colorFont, colorFontDark } = theme.color;

export const Container = styled.section`
  padding: 18px 12px;
  width: 100%;
  height: 100%;
  min-height: 800px;
  text-align: center;
  background: ${primary} url(${imgBg}) top 60px center no-repeat;
  background-size: 580px;
  background-blend-mode: soft-light;

  @media screen and (min-width:840px){
    width: 490px;
  }
`;

export const ButtonsList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const ImgContainer = styled.picture`
  display: grid;
  place-content: center;
  margin: 0 auto 30px;
  width: 250px;
  height: 250px;
`;

export const WeatherToday = styled.section`

`;

export const TempContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5px;
  margin-bottom: 20px;
`;

export const Temp = styled.p`
  font-size: 144px;
  font-weight: 500;
`;

export const Span = styled.span`
  font-size: 48px;
  color: ${colorFont};
`;

export const Weather = styled.p`
  margin-bottom: 45px;
  font-size: 36px;
  font-weight: 600;
  color: ${colorFont};
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 35px;
  font-size: 18px;
  font-weight: 500;
  color: ${colorFontDark};
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${colorFontDark};
`;
export const Name = styled.p``;
