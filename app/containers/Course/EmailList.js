import React, { Component, PropTypes } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import EmailItem from './EmailItem';
import styles from './styles';

class EmailList extends Component {
  static propTypes = {
    emailList: PropTypes.array,
  };
  handleClose = () => {
    Actions.pop();
  };
  renderList = () => {
    const { emailList } = this.props;
    return emailList.map(({ name, email }) => (
      <EmailItem key={name} name={name} email={email} />
    ));
  };
  render() {
    return (
      <View style={styles.base}>
        <StatusBar barStyle='light-content' backgroundColor="#9e9e9e" />
        <Icon.ToolbarAndroid
          title="寄信給教授或助教"
          navIconName="close"
          style={{ height: 56, backgroundColor: 'white' }}
          elevation={5}
          onIconClicked={this.handleClose}
        />
        <ScrollView>
          {this.renderList()}
        </ScrollView>
      </View>
    );
  }
}

export default EmailList;

