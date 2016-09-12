import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import styles from './styles';

class EmailList extends Component {
  static propTypes = {
    emailList: PropTypes.array,
  };
  handleEmailPress = (email) => {
    console.log(email);
  };
  renderList = () => {
    const { emailList } = this.props;
    return emailList.map(({ name, email }) => {
      const handlePress = () => {
        this.handleEmailPress(email);
      };
      return (
        <ActionButton.Item
          key={name}
          buttonColor="#fff"
          title={name}
          titleColor="#fff"
          titleBgColor="rgba(0, 0, 0, 0.8)"
          onPress={handlePress}
        >
          <Text>{email[0].toUpperCase()}</Text>
        </ActionButton.Item>
      );
    });
  };
  render() {
    return (
      <ActionButton
        buttonColor="#4caf50"
        icon={<Icon name="email" size={24} color="#fff" />}
      >
        {this.renderList()}
      </ActionButton>
    );
  }
}

export default EmailList;

