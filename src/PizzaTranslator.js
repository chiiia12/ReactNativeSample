import React, { Component } from 'react';
import { Text, Image, View, TextInput } from 'react-native';

export default class PizzaTranslater extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '😐').join(' ')}
        </Text>
      </View>
    );
  }
}