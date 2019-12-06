import React, {Component} from 'react';
import {View} from 'react-native';

import Top from './src/Components/Top';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '30%',
        }}>
        <Top />
      </View>
    );
  }
}
