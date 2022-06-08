import styled from 'styled-components';
import theme from '../../constants/theme';

const { secondary } = theme.color;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, auto));
  gap: 26px;
  padding: 50px 50px 25px;
  text-align: center;
  background-color: ${secondary};
`;
