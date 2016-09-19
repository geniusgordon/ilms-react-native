import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
import I18n from 'react-native-i18n';
import RippleView from '../../components/RippleView';
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
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={I18n.t('account')}
              value={this.account}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              onChangeText={this.handleAccountChange}
            />
            <TextInput
              style={styles.input}
              placeholder={I18n.t('password')}
              value={this.password}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              onChangeText={this.handlePasswordChange}
              secureTextEntry
            />
          </View>
          <RippleView onPress={this.handleSubmit}>
            <View style={styles.button} elevation={1}>
              <Text>{I18n.t('login')}</Text>
            </View>
          </RippleView>
        </View>
      </View>
    );
  }
}

export default connect()(Auth);

