import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  flex: 1;
  padding: 0 15px;
  border-radius: 5px;
  background-color: #ddd;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  margin-left: 15px;
  border-radius: 5px;
  background-color: #333;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
