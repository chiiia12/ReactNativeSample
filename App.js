import React, { Component } from 'react';
import { Text, Image,View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ allignItems: 'center' }}>
      <Image source={pic} style={{ width: 193, height: 110 }} />
        <Greeting name='Rexaaar' />
        <Greeting name='Jaina' />
      </View>
   );
  }
}