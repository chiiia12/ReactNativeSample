import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1, flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    )
  }
}