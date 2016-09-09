import React, { Component, PropTypes } from 'react';
import {
  Image,
  Switch,
  ToolbarAndroid,
  TextInput,
  View,
} from 'react-native';
import closeIcon from '../../assets/ic_close_black.png';
import sendIcon from '../../assets/ic_send_black.png';
import styles from './styles';

class Compose extends Component {
  actions = [{
    title: 'send',
    icon: sendIcon,
    show: 'always',
  }];
  render() {
    const { reply } = this.props;
    const title = reply ? '回覆' : '發表討論';
    return (
      <View style={styles.base}>
        <ToolbarAndroid
          title={title}
          navIcon={closeIcon}
          style={{ height: 56, backgroundColor: 'white' }}
          elevation={5}
          actions={this.actions}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="標題" 
            underlineColorAndroid="rgba(0, 0, 0, 0)"
          />
          <TextInput placeholder="暱稱" underlineColorAndroid="rgba(0, 0, 0, 0)" />
        </View>
        <View style={[styles.inputContainer, styles.contentInputContainer]}>
          <TextInput 
            style={styles.contentInput}
            placeholder="內容"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            multiline
          />
        </View>
      </View>
    );
  }
}

export default Compose;

