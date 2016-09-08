import React, { Component, PropTypes } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { login } from './actions';
import styles from './styles';
import logo from '../../assets/iLms.png';

class Auth extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };
  }
  handleAccountChange = (account) => {
    this.setState({ account });
  };
  handlePasswordChange = (password) => {
    this.setState({ password });
  };
  handleSubmit = () => {
    const { account, password } = this.state;
    this.props.dispatch(login(account, password));
  };
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Account"
            value={this.account}
            onChangeText={this.handleAccountChange}
          />
          <TextInput
            placeholder="Password"
            value={this.password}
            onChangeText={this.handlePasswordChange}
            secureTextEntry
          />
          <TouchableNativeFeedback
            background={new TouchableNativeFeedback.Ripple('#ffffff')}
            delayPressIn={0}
            onPress={this.handleSubmit}
          >
            <View style={styles.button} elevation={1}>
              <Text>Log In</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

export default connect()(Auth);

