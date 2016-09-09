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
  drawerRef = (ref) => {
    if (ref) {
      this.openDrawer = ref.openDrawer;
      this.closeDrawer = ref.closeDrawer;
    }
  };
  renderNavigationView() {
    return <Drawer />
  }
  render() {
    const { title, toolbarBackgroundColor, children } = this.props;
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        renderNavigationView={this.renderNavigationView}
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

