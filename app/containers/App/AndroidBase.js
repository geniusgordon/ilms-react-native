import React, { Component, PropTypes } from 'react';
import {
  DrawerLayoutAndroid,
  StatusBar,
} from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';
import Drawer from './Drawer';

class AndroidBase extends Component {
  static propTypes = {
    title: PropTypes.string,
    statusBarBackgroundColor: PropTypes.string,
    toolbarBackgroundColor: PropTypes.string,
    children: PropTypes.node,
  };
  handleIconClick = () => {
    this.openDrawer();
  };
  handleDrawerItemClick = () => {
    this.closeDrawer();
  };
  drawerRef = (ref) => {
    if (ref) {
      this.openDrawer = ref.openDrawer;
      this.closeDrawer = ref.closeDrawer;
    }
  };
  render() {
    const {
      title,
      statusBarBackgroundColor,
      toolbarBackgroundColor,
      children,
    } = this.props;
    const renderDrawer = () => <Drawer onItemClick={this.handleDrawerItemClick} />;
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        renderNavigationView={renderDrawer}
        ref={this.drawerRef}
      >
        <StatusBar backgroundColor={statusBarBackgroundColor} />
        <ToolbarAndroid
          title={title}
          navIconName="menu"
          style={{ height: 56, backgroundColor: toolbarBackgroundColor }}
          onIconClicked={this.handleIconClick}
        />
        {children}
      </DrawerLayoutAndroid>
    );
  }
}

export default AndroidBase;

