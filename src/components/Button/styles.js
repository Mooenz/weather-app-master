import styled from 'styled-components';

import theme from '../../constants/theme';

const { white, gray } = theme.color;

export const MainStyles = styled.button`
  height: 40px;
  padding: 10px 18px;
  border: none;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  color: ${white};
  background-color: ${gray};
  ${({ location }) =>
    location &&
    `
    width: 40px;
    padding: 0;
    border-radius: 50%;
    font-size: 22px;
    font-family: 'Material Icons';
  `};
`;
