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
  actions,
  style,
  elevation,
  onIconClicked,
  onActionSelected,
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
            onPress={onIconClicked}
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
      style={[{ height: 56 }, style]}
      elevation={elevation}
      actions={actions}
      onIconClicked={onIconClicked}
      onActionSelected={onActionSelected}
    />
  );
};

ToolBar.propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  statusbarStyle: PropTypes.string,
  statusbarColor: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    show: PropTypes.oneOf(['always', 'ifRoom', 'never']),
  })),
  style: View.propTypes.style,
  elevation: PropTypes.number,
  onIconClicked: PropTypes.func,
  onActionSelected: PropTypes.func,
  onRightClicked: PropTypes.func,
};

export default ToolBar;

