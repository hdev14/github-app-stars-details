import React, {Component} from 'react';
import {Keyboard} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

// Styles
import Container from '../../styles/components/Container';
import {
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const {newUser, users} = this.state;
    console.tron.log(newUser);
    const response = await api.get(`/users/${newUser}`);
    const user = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, user],
      newUser: '',
    });

    Keyboard.dismiss();
  };

  render() {
    const {newUser, users} = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicione um usuário"
            onChangeText={text => this.setState({newUser: text})}
            value={newUser}
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icons name="add" color="#fff" size={20} />
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
