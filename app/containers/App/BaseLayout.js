import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import ToolBar from '../../components/ToolBar';
import styles from './styles';

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
    const toolbarStyle = [{ backgroundColor: toolbarBackgroundColor }];
    if (toolbarElevation > 0) {
      toolbarStyle.push(styles.toolbarElevation);
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={statusBarColor} />
        <ToolBar
          title={title}
          leftIcon={leftIcon}
          style={toolbarStyle}
          statusBarColor={statusBarColor}
          elevation={toolbarElevation}
          actions={toolbarActions}
          onActionSelected={onActionSelected}
          onIconClicked={onIconClicked}
        />
        <View style={{ flex: 1 }}>
          {children}
        </View>
      </View>
    );
  }
}

export default BaseLayout;

