import React, { PropTypes } from 'react';
import { View, Platform } from 'react-native';
import NavBar from 'react-native-navbar';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';
import CustomNavButton from './CustomNavButton';

const ToolBar = ({
  title,
  leftIcon,
  rightIcon,
  statusbarStyle,
  statusbarColor,
  style,
  onLeftClicked,
  onRightClicked,
}) => {
  if (Platform.OS === 'ios') {
    return (
      <NavBar
        title={{ title }}
        style={[{ alignItems: 'center', height: 44 }, style]}
        statusBar={{
          style: statusbarStyle || 'light-content',
          tintColor: statusbarColor,
        }}
        leftButton={
          <CustomNavButton
            icon={leftIcon}
            style={{ marginLeft: 16 }}
            onPress={onLeftClicked}
          />
        }
        rightButton={
          <CustomNavButton
            icon={rightIcon}
            style={{ marginRight: 16 }}
            onPress={onRightClicked}
          />
        }
      />
    );
  }
  return (
    <ToolbarAndroid
      title={title}
      navIconName={leftIcon}
      style={{ height: 56, ...style }}
      onIconClicked={onLeftClicked}
    />
  );
};

ToolBar.propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  statusbarStyle: PropTypes.string,
  statusbarColor: PropTypes.string,
  style: View.propTypes.style,
  onLeftClicked: PropTypes.func,
  onRightClicked: PropTypes.func,
};

export default ToolBar;

