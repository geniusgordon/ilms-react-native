import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import BaseLayout from '../App/BaseLayout';
import IconLink from './IconLink';
import logo from '../../assets/iLms.png';
import styles from './styles';

class About extends Component {
  handleClose = () => {
    Actions.pop();
  };
  render() {
    return (
      <BaseLayout
        title="About"
        leftIcon="close"
        statusBarColor="#9e9e9e"
        toolbarBackgroundColor="white"
        toolbarElevation={5}
        onIconClicked={this.handleClose}
      >
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.info}>
            <Text style={styles.appName}>NTHU iLms</Text>
            <Text style={styles.version}>Version: 2.4.1</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text>NTHU iLms app is an UNOFFICIAL app,</Text>
          <Text>and is NOT affiliated, endorsed or support by NTHU.</Text>
          <Text>If you like this app,</Text>
          <Text>feel free to contribute on Github,</Text>
          <Text>or donate to make this app better.</Text>
        </View>
        <View style={styles.linkContainer}>
          <IconLink
            name="github"
            color="#9c27b0"
            link="https://github.com/geniusgordon/ilms-react-native"
          />
          <IconLink
            name="facebook"
            color="#1e88e5"
            link="https://www.facebook.com/nthu.ilms"
          />
          <IconLink
            name="google-play"
            color="#4caf50"
            link="https://play.google.com/store/apps/details?id=com.geniusgordon.ilms"
          />
        </View>
      </BaseLayout>
    );
  }
}

export default About;

