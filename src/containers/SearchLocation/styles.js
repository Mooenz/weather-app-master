import styled from 'styled-components';
import theme from '../../constants/theme';

const { primary } = theme.color;

export const Container = styled.section`
  position: absolute;
  top: 0;
  padding: 18px 12px;
  width: 100%;
  height: 100%;
  min-height: 672px;
  background-color: ${primary};
  ${({ isClose }) =>
    isClose
      ? `
    transform: translateX(-100%);
  `
      : `
    transform: translateX(0);
    `}
  transition: transform 0.5s;
`;

export const IconClose = styled.div`
  text-align: end;
  span {
    cursor: pointer;
  }
`;

export const Searches = styled.ul`
  padding: 19px 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const SearchCity = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid transparent;
  padding: 23px 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  transition-duration: 0.5s;

  span {
    visibility: hidden;
    height: 24px;
    width: 24px;
    transition-duration: 0.2s;
    color: #616475;
  }

  &:hover {
    border: 1px solid #616475;
  }

  &:hover span {
    visibility: visible;
  }
`;
