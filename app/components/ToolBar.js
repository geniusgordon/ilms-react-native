import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import NavBar from 'react-native-navbar';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';
import CustomNavButton from './CustomNavButton';

const ToolBar = ({
  title,
  icon,
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
        leftButton={
          <CustomNavButton
            icon={icon}
            style={{ marginLeft: 16 }}
            onPress={onClicked}
          />
        }
      />
    );
  }
  return (
    <ToolbarAndroid
      title={title}
      navIconName={icon}
      style={{ height: 56, ...style }}
      onIconClicked={onClicked}
    />
  );
};

ToolBar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  statusbarColor: PropTypes.string,
  style: PropTypes.object,
  onClicked: PropTypes.func,
};

export default ToolBar;

