import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

export default class CustomNavButton extends Component {
  render() {
    const { icon, style, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          source={icon}
          style={[style]}/>
      </TouchableOpacity>
    );
  }
}