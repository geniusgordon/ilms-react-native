import React, { Component, PropTypes } from 'react';
import {
  DrawerLayoutAndroid,
  ToolbarAndroid,
} from 'react-native';
import Drawer from './Drawer';
import styles from './styles';
import menuIcon from '../../assets/ic_menu_black.png';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  handleIconClick = () => {
    this.openDrawer();
  };
  openDrawerRef = (ref) => {
    if (ref) {
      this.openDrawer = ref.openDrawer;
    }
  };
  renderNavigationView() {
    return <Drawer />;
  }
  render() {
    const { children } = this.props;
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        renderNavigationView={this.renderNavigationView}
        ref={this.openDrawerRef}
      >
        <ToolbarAndroid
          title="iLms"
          titleColor="white"
          navIcon={menuIcon}
          onIconClicked={this.handleIconClick}
          style={styles.toolbar}
          elevation={5}
        />
        {children}
      </DrawerLayoutAndroid>
    );
  }
}

export default App;

