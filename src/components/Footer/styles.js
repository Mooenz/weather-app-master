import styled from 'styled-components';
import theme from '../../constants/theme';

const { secondary, colorFont } = theme.color;

export const Container = styled.div`
  padding: 100px 24px 24px;
  width: 100%;
  text-align: center;
  color: ${colorFont};
  background-color: ${secondary};

  span {
    font-weight: 700;
  }
`;
