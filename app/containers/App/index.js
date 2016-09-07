import React, { Component } from 'react';
import {
  DrawerLayoutAndroid,
  ToolbarAndroid,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#888',
    height: 56,
  },
});

class App extends Component {
  renderNavigationView = () => {
    return (  
      <View>
        <Text>Drawer</Text>
      </View>  
    );  
  };
  handleIconClick = () => {
    this.refs.drawer.openDrawer();
  };
  render() {  
    return (  
      <DrawerLayoutAndroid  
        drawerWidth={300}  
        drawerPosition={DrawerLayoutAndroid.positions.left}  
        renderNavigationView={this.renderNavigationView}
        ref="drawer"
      >  
        <ToolbarAndroid
          title="iLms"
          titleColor="white"
          navIcon={require('../../assets/ic_menu_black.png')}
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

