import React, { Component, PropTypes } from 'react';
import { Linking, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RippleView from '../../components/RippleView';

const styles = StyleSheet.create({
  container: {
    height: 72,
    flexDirection: 'row',
  },
  icon: {
    width: 72,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
  },
  email: {
    color: 'rgba(0, 0, 0, 0.8)',
  },
});

class EmailItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
  };
  handlePress = () => {
    const { email } = this.props;
    Linking.openURL(`mailto:${email}`);
  };
  render() {
    const { name, email } = this.props;
    return (
      <RippleView onPress={this.handlePress} darkRipple>
        <View style={styles.container}>
          <View style={styles.icon}>
            <Icon name="email" size={24} color="#000" />
          </View>
          <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
      </RippleView>
    );
  }
}

export default EmailItem;

