import React, { PropTypes } from 'react';
import { View, ActionSheetIOS, Platform } from 'react-native';
import NavBar from 'react-native-navbar';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';
import CustomNavButton from './CustomNavButton';

const ToolBar = ({
  title,
  leftIcon,
  statusbarStyle,
  statusbarColor,
  actions,
  style,
  elevation,
  onIconClicked,
  onActionSelected,
}) => {
  if (Platform.OS === 'ios') {
    let actionButton;
    if (actions) {
      if (actions.length > 1) {
        const actionSheet = actions.map(action => action.title);
        actionSheet.push('取消');
        const handleActionIconPress = () => {
          ActionSheetIOS.showActionSheetWithOptions({
            options: actionSheet,
            cancelButtonIndex: actionSheet.length - 1,
          },
          (buttonIndex) => {
            onActionSelected(buttonIndex);
          });
        };
        actionButton = (
          <CustomNavButton
            icon="more-vert"
            style={{ marginRight: 16 }}
            onPress={handleActionIconPress}
          />
        );
      } else {
        actionButton = (
          <CustomNavButton
            icon={actions[0].iconName}
            style={{ marginRight: 16 }}
            onPress={onActionSelected}
          />
        );
      }
    }
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
        rightButton={actionButton}
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
};

export default ToolBar;

