import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import ToolBar from '../../components/ToolBar';

class BaseLayout extends Component {
  static propTypes = {
    title: PropTypes.string,
    leftIcon: PropTypes.string,
    statusBarColor: PropTypes.string,
    toolbarElevation: PropTypes.number,
    toolbarBackgroundColor: PropTypes.string,
    toolbarActions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      show: PropTypes.oneOf(['always', 'ifRoom', 'never']),
    })),
    children: PropTypes.node,
    onIconClicked: PropTypes.func,
    onActionSelected: PropTypes.func,
  };
  render() {
    const {
      title,
      leftIcon,
      statusBarColor,
      toolbarBackgroundColor,
      toolbarActions,
      toolbarElevation,
      onIconClicked,
      onActionSelected,
      children,
    } = this.props;
    return (
      <View>
        <StatusBar backgroundColor={statusBarColor} />
        <ToolBar
          title={title}
          leftIcon={leftIcon}
          style={{ backgroundColor: toolbarBackgroundColor }}
          statusBarColor={statusBarColor}
          elevation={toolbarElevation}
          actions={toolbarActions}
          onActionSelected={onActionSelected}
          onIconClicked={onIconClicked}
        />
        {children}
      </View>
    );
  }
}

export default BaseLayout;

