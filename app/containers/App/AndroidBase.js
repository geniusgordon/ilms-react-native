import React, { Component, PropTypes } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import Drawer from './Drawer';
import Toolbar from '../../components/Toolbar';

class AndroidBase extends Component {
  static propTypes = {
    title: PropTypes.string,
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
    const { title, toolbarBackgroundColor, children } = this.props;
    const renderDrawer = () => <Drawer onItemClick={this.handleDrawerItemClick} />;
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        renderNavigationView={renderDrawer}
        ref={this.drawerRef}
      >
        <Toolbar
          title={title}
          backgroundColor={toolbarBackgroundColor}
          onIconClicked={this.handleIconClick}
        />
        {children}
      </DrawerLayoutAndroid>
    );
  }
}

export default AndroidBase;

