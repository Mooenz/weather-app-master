import styled from 'styled-components';
import theme from '../../constants/theme';

const { primary, purple, white } = theme.color;
const { relaway } = theme.font;

export const SearchContainer = styled.form`
  margin-top: 30px;
  margin-bottom: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.span`
  position: absolute;
  left: 15px;
  top: 12px;
  color: #616475;
`;

export const Search = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 55px;
  border: 1px solid ${white};
  outline: none;
  color: ${white};
  background-color: ${primary};

  ::placeholder {
    font-family: ${relaway};
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  padding: 14px;
  height: 48px;
  border: none;
  font-family: ${relaway};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.9px;
  cursor: pointer;
  color: ${white};
  background-color: ${purple};
`;
