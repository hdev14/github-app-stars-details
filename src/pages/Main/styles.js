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
  margin-left: 10px;
  border-radius: 5px;
  background-color: #333;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background-color: #ddd;
`;

export const Name = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  color: #333;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLine: 2,
})`
  margin-top: 5px;
  font-size: 14px;
  color: #999;
  line-height: 16px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  align-self: stretch;
  background-color: #333;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 0;
`;

export const ProfileButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
