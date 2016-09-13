import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import NavBar from 'react-native-navbar';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';

const ToolBar = ({
  title,
  androidIcon,
  statusbarColor,
  style,
  onClicked,
}) => {
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
  }
  return (
    <ToolbarAndroid
      title={title}
      navIconName={androidIcon}
      style={{ height: 56, ...style }}
      onIconClicked={onClicked}
    />
  );
};

ToolBar.propTypes = {
  title: PropTypes.string,
  androidIcon: PropTypes.string,
  statusbarColor: PropTypes.string,
  iosIcon: PropTypes.object,
  style: PropTypes.object,
  onClicked: PropTypes.func,
};

export default ToolBar;

