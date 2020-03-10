import React, {Component} from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

// Styles
import Container from '../../styles/components/Container';
import {Form, Input, SubmitButton} from './styles';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicione um usuário"
          />
          <SubmitButton>
            <Icons name="add" color="#fff" size={20} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
