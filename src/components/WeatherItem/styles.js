import styled from 'styled-components';
import theme from '../../constants/theme';

const { primary, colorFont } = theme.color;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 170px;
  padding: 18px;
  background-color: ${primary};
`;

export const ContainerDate = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 500;
`;

export const Image = styled.img`
  width: 56px;
  height: auto;
  margin-bottom: 20px;
`;

export const ContainerTemp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MaxTemp = styled.p``;

export const MinTemp = styled.p`
  color: ${colorFont};
`;
