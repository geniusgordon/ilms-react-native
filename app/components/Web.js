import React, { PropTypes } from 'react';
import { View, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ToolBar from './ToolBar';

const Web = ({ title, uri }) => {
  return (
    <View style={{ flex: 1 }}>
      <ToolBar
        title={title}
        leftIcon="close"
        statusbarColor="#388e3c"
        style={{ backgroundColor: '#4caf50' }}
        onLeftClicked={Actions.pop}
      />
      <WebView
        source={{ uri }}
        style={{ }}
      />
    </View>
  );
};

Web.propTypes = {
  uri: PropTypes.string,
};

export default Web;