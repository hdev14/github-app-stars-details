import React, {Component} from 'react';
import {View, Text} from 'react-native';
import api from '../../services/api';

export default class User extends Component {
  static navigationOptions = ({route}) => ({
    title: route.params.user.name,
  });

  state = {
    stars: [],
  };
  async componentDidMount() {
    const {user} = this.props.route.params;
    console.tron.log(user);
    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: response.data,
    });
  }

  render() {
    return (
      <View>
        <Text>User</Text>
      </View>
    );
  }
}
