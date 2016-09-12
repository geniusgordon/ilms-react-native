import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import menuIcon from '../assets/ic_menu_black.png';

export default class CustomNavButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={menuIcon}
          style={[{ width: 20, height: 20, }, this.props.style]}/>
      </TouchableOpacity>
    );
  }
}