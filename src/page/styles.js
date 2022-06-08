import styled from 'styled-components';
import theme from '../constants/theme';

const { secondary } = theme.color;

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));

  @media screen and (min-width: 840px) {
    grid-template-columns: auto 1fr;
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
`;

export const ContainerMain = styled.div`
  position: relative;
`;

export const ContainerSecond = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${secondary};
`;
