import React, { Component, PropTypes } from 'react';
import {
  Platform
} from 'react-native';
import NavBar from 'react-native-navbar';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';
import CustomNavButton from './CustomNavButton';
import menuIcon from '../assets/ic_menu_black.png';


class ToolBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    androidIcon: PropTypes.string,
    statusbarColor: PropTypes.string,
    iosIcon: PropTypes.object,
    style: PropTypes.object,
    onClicked: PropTypes.func,
  };
  render() {
    const {
      title,
      androidIcon,
      statusbarColor,
      iosIcon,
      style,
      onClicked
    } = this.props;
    if (Platform.OS === 'ios') {
      return (
        <NavBar
          title={{ title }}
          style={{ alignItems: 'center', height: 44, ...style }}
          statusBar={{
            style: 'light-content',
            tintColor: statusbarColor,
          }}
          leftButton={{
            title: 'Back',
            tintColor: 'black',
            handler: onClicked,
          }}
        />
      );
    } else {
      return (
        <ToolbarAndroid
          title={title}
          navIconName={androidIcon}
          style={{ height: 56, ...style }}
          onIconClicked={this.onClicked}
        />
      );
    }
    
  }
}

export default ToolBar;

