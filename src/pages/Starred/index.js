import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Starred extends Component {
  static navigationOpitions = ({route}) => ({
    title: route.params.name,
  });

  render() {
    const {html_url} = this.props.route.params;
    return <WebView source={{uri: html_url}} style={{flex: 1}} />;
  }
}
