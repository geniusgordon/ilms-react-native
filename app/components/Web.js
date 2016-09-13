import React, { PropTypes } from 'react';
import { View, WebView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ToolBar from './ToolBar';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
});

const Web = ({ title, uri }) => (
  <View style={{ flex: 1 }}>
    <ToolBar
      title={title}
      leftIcon="close"
      statusbarColor="#9e9e9e"
      style={styles.toolbar}
      onLeftClicked={Actions.pop}
    />
    <WebView
      source={{ uri }}
      style={{ backgroundColor: "#f9f9f9", marginTop: 5 }}
    />
  </View>
);

Web.propTypes = {
  title: PropTypes.string,
  uri: PropTypes.string,
};

export default Web;
