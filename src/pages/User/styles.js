import styled from 'styled-components';

export const Header = styled.View`
  padding-bottom: 20px;
  border-color: #ddd;
  border-bottom-width: 1px;
  align-items: center;
`;

export const Starred = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #ddd;
  border-radius: 5px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLine: 1,
})`
  font-size: 16px;
  font-weight: bold;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #999;
`;
