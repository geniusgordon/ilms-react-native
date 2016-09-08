import React, { Component } from 'react';
import {
  DrawerLayoutAndroid,
  ToolbarAndroid,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import menuIcon from '../../assets/ic_menu_black.png';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#888',
    height: 56,
  },
});

class App extends Component {
  handleIconClick = () => {
    this.openDrawer();
  };
  openDrawerRef = (ref) => {
    this.openDrawer = ref.openDrawer;
  };
  renderNavigationView = () => (
    <View>
      <Text>Drawer</Text>
    </View>
  );
  render() {
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
        <View>
          <Text>iLms</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default App;

